import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import toast from "react-hot-toast";

import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const Login = () => {
  const {EmailSignIn, setLoading} = useContext(AuthContext);
  const location = useLocation(); 
  const navigate = useNavigate(); 
  const from = location.state?.from?.pathname || '/'; 
  const [error , setError ] = useState('');  
   const handleSubmit = (e) => {
      
         e.preventDefault(); 
         const form = e.target; 
         const email = form.email.value; 
         const password = form.password.value; 
         console.log(email, password); 
        
         EmailSignIn(email, password)
        .then(res => {
         const user =res.user; 
         form.reset();          
         setError('');
         if(user.emailVerified){
            navigate(from, {replace: true}) ;    
         }else{
            toast.error('Your Email is not verified. Please verify your email address')
         }         
        })
        .catch(err =>{
         setError(err.message); 
        })
        .finally(()=> {
         setLoading(false); 
        })
       
   }
   return (
      <div>
         <h2 className="text-center text-primary text-decoration-none">Login</h2>
         <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control type="email" placeholder="Enter email"  required name='email' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control type="password" placeholder="Password" required  name='password'/>
            </Form.Group>
            {
               error && <p className='text-danger fw-bold'>{error}</p>
            }
            <Button variant="primary" type="submit" >
               login
            </Button>
         </Form>
      </div>
   );
};

export default Login;

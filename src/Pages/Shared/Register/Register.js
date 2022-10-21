import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const Register = () => {
   const { CreateUser, updateUserDetails, verifyEmail } = useContext(AuthContext);
   const [error, setError] = useState("");
   const [emailError, setEmailError] = useState("");
   const [accepted, setAccepted] = useState(false);
   const handleSubmit = (e) => {
      setEmailError("");
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      const name = form.name.value;
      const photoUrl = form.photoUrl.value;
      if (!/^\S+@\S+\.\S+$/.test(email)) {
         setEmailError("PLease Enter a valid email");
         return;
      }
      setEmailError("");
      if (!/(?=.*?[A-Z])/.test(password)) {
         setError("Please enter one uppercase");
         return;
      }
      if (!/(?=.*?[a-z])/.test(password)) {
         setError("Please enter one lowercase");
         return;
      }
      if (!/(?=.*?[0-9])/.test(password)) {
         setError("Please enter one digits");
         return;
      }

      if (password.length < 8) {
         setError("password length must be 8 or more.");
         return;
      }

      if (!/(?=.?[#?!@$%^&*-])/.test(password)) {
         setError("must enter an special ");
         return;
      }

      CreateUser(email, password)
         .then((res) => {
            console.log(res.user);
            form.reset();
            handleUpdateProfile(name, photoUrl);
            setError("");
            handleEmailVerification()
            toast.success('Please verify your email address ')
         })
         .catch((err) => {
            setError(err.message);
         });
   };

   const handleUpdateProfile = (name, profileImage) => {
      updateUserDetails(name, profileImage)
         .then(() => {})
         .catch((err) => console.log(err));
   };
   const handleCheckBox = (e) => {
      setAccepted(e.target.checked);
   };

   const handleEmailVerification = () => {
      verifyEmail()
      .then( ()=> {})
      .catch(err => console.error(err))
   }
   return (
      <div>
         <h2 className="text-center text-primary">Register</h2>
         <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
               <Form.Label>Your Name: </Form.Label>
               <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  required
                  name="name"
                  
               />
            </Form.Group>
            <Form.Group className="mb-3" controlId="photoURL">
               <Form.Label>Photo URL: </Form.Label>
               <Form.Control
                  type="text"
                  placeholder="Enter your photo url"
                  required
                  name="photoUrl"
               />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control
                  type="email"
                  placeholder="Enter email"
                  required
                  name="email"
               />
               {emailError && (
                  <p className="text-danger fw-bold">{emailError}</p>
               )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control
                  type="password"
                  placeholder="Password"
                  required
                  name="password"
               />
               {error && <p className="text-danger fw-bold">{error}</p>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
               <Form.Check 
               onClick={handleCheckBox}
               type="checkbox" 
               label={<>
                  <p>accepted <Link to='/terms'>terms and services</Link> </p>
               </>}/>
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!accepted}>
               Register
            </Button>
         </Form>
      </div>
   );
};

export default Register;

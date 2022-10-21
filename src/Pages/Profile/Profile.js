import React, { useContext, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Profile = () => {
   const {user} = useContext(AuthContext); 
   const [name , setName ]= useState(user?.displayName); 
   const photoURlRef = useRef(user?.photoURL); 

   const handleSubmit = (event) => {
      event.preventDefault();
      console.log(photoURlRef.current.value); 
   }


   const handleName = (e) => {
      setName(e.target.value); 
      console.log(e.target.value); 
   }

   return (
      <div>
         <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="NameControl" onChange={handleName}>
               <Form.Label>Your Name: </Form.Label>
               <Form.Control type="text" placeholder="Enter your fullName" defaultValue={name} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control type="email" placeholder="Enter your email" defaultValue={user?.email} readOnly />
            </Form.Group>
            <Form.Group className="mb-3" controlId="photoURL">
               <Form.Label>Photo URL </Form.Label>
               <Form.Control type="photoURL" placeholder="Enter your profile url" defaultValue={user.photoURL} readOnly ref={photoURlRef} />
            </Form.Group>
             <Button variant="primary" type="submit">
                  save
            </Button>
         </Form>
      </div>
   );
};

export default Profile;

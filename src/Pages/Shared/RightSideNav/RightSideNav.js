import React, { useContext } from 'react';
import {FaGoogle, FaGithubAlt, FaFacebook, FaTwitter , FaTwitch, FaLinkedinIn} from 'react-icons/fa'; 
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import BrandCarousel from '../BrandCarousel/BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {
   const {handleSignInProvider} = useContext(AuthContext); 
   const googleProvider = new GoogleAuthProvider(); 
   const handleGoogleSignIn = () => {
      handleSignInProvider(googleProvider)
      .then(res => {
         console.log(res.user)
      })
      .catch(error => console.log(error))
   }

   return (
      <div>
         <ButtonGroup vertical className='w-100 d-block'>
            <Button onClick={handleGoogleSignIn} variant="outline-primary"   className='mb-3 rounded'> <FaGoogle className="me-3 "></FaGoogle>Google Sign In</Button>
            <Button variant="outline-dark"  className='mb-3 rounded'> <FaGithubAlt className="me-3 "></FaGithubAlt> Github Sign In </Button>
         </ButtonGroup>
         <h5>Find us on : </h5>
         <ListGroup>
               <ListGroup.Item className="d-flex align-items-center mt-2 rounded  "><FaFacebook className='me-3'></FaFacebook> Facebook</ListGroup.Item>            
               <ListGroup.Item className="d-flex align-items-center mt-2 rounded  "><FaTwitter className='me-3'></FaTwitter> twitter</ListGroup.Item>            
               <ListGroup.Item className="d-flex align-items-center mt-2 rounded  "><FaTwitch className='me-3'></FaTwitch> Twitch</ListGroup.Item>            
               <ListGroup.Item className="d-flex align-items-center mt-2 rounded  "><FaLinkedinIn className='me-3'></FaLinkedinIn> Linkedin </ListGroup.Item>            
         </ListGroup>
         <h5 className='mt-3'>Brand Partner </h5>
         <BrandCarousel></BrandCarousel>
      </div>
   );
};

export default RightSideNav;
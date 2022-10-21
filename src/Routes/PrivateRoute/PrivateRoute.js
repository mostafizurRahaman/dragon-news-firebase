import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
const location = useLocation(); 
const {user ,loading } = useContext(AuthContext);  
if(loading){
   return <div className='d-flex align-items-center justify-content-center'>
      <Spinner animation="border" variant="primary" />
   </div>
}
if(user && user.uid){ 
   return children; 
}
return <Navigate to='/login' state={{from: location}} replace ></Navigate>
};

export default PrivateRoute;
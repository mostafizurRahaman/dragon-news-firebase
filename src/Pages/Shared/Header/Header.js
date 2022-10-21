import React, { useContext } from "react";
import { Container, Image, Nav, Navbar} from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Header = () => {
   const {user, logOut} = useContext(AuthContext); 
   const handleLogout = () => {
         logOut()
         .then(res => console.log(res))
         .catch(err => console.log(err)); 
   }
   return (
      <div className="mb-3">
         <Navbar sticky="top" collapseOnSelect expand="lg" bg="light" variant="light" className="shadow-sm py-3">
            <Container>
               <Navbar.Brand><Link to='/' className="fw-bold text-decoration-none text-uppercase ">Dragon News</Link></Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link ><Link to='/home' className="text-secondary text-decoration-none">Home</Link></Nav.Link>
                  </Nav>
                  <Nav>
                     <Nav.Link href="">{
                           user?.uid ? 
                           <div className="d-flex align-items-center gap-3">
                           <p className="mb-0">{user?.displayName ? user?.displayName : 'N/A'}</p>
                          <span> <button onClick={handleLogout} className="btn btn-outline-primary">logout</button>   </span>                        
                           </div>
                           : 
                           <>
                            <span> <Link className='text-muted text-decoration-none' to="/login">Login</Link></span>
                            <span> <Link className='text-muted text-decoration-none' to="/register">register</Link></span>
                           </>

                     }
                     </Nav.Link>
                     <Link to='/profile'>
                       {
                        user?.photoURL ? <Image src={user?.photoURL} alt="" roundedCircle style={{width: '30px', height: '30px'}}></Image> : <FaUser></FaUser>
                       }
                     </Link>
                  </Nav>
                  <div className="d-block d-lg-none">
                     <LeftSideNav></LeftSideNav>
                  </div>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </div>
   );
};

export default Header;

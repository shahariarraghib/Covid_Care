import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Header.css'
import logo from '../../Images/CovidCareLogo-removebg-preview.png'
import PhoneIcon from '@mui/icons-material/Phone';
import { NavHashLink } from 'react-router-hash-link';

const Header = () => {
  const {user, logOut} = useFirebase();
  
    return (
       
            <>
            <div className=' d-flex justify-content-evenly '>
            <div className='logo_style'>
              <img src={logo} alt="" />
            </div>

            <div className='mt-4'>
              <PhoneIcon className='m-2 '/>
            <a 
            className='text-decoration-none'
            href="tel:+8801000000001">Emergency</a>
              
            </div>
            </div>
  
  <Navbar bg="warning" variant="dark" sticky="top"  expand="lg">
  
    <Container>
   
      <Navbar.Brand as={Link} to="/home" className='fs-3 fw-bolder'>Covide<span className='text-danger'>Care</span></Navbar.Brand>
     
    <div>
    <Nav className="me-auto" >
      <Nav.Link as={Link} to="/home" className='text-white fw-bolder fs-6'>Home</Nav.Link>

      <NavHashLink to="/home#services"className='text-white fw-bolder fs-6 text-decoration-none mt-2'>searvice</NavHashLink>
      
      <Nav.Link as={Link} to="/blog" className='text-white fw-bolder fs-6'>Blog</Nav.Link>

      
    </Nav>

   
    </div>
      
    <div>
    <Nav className="me-auto">

    
    {
      user?.email && <span className='mt-2 mr-' style={{color: 'white'}}>Hello {user.displayName}</span>
    }
    {
      user.email ?
      <div className='d-flex justify-content-center'>
       <div> <button onClick={logOut} className='btn btn-danger'>Log Out</button></div>
        <div>
          <img src={user.photoURL} className='rounded-circle border border-1 login-img-style 'alt="" />
        </div>
      </div>
      :

      <button type="button" class="btn btn-success p-0"><Nav.Link as={Link} to="/login" className='text-white fw-bolder fs-6'>Log in</Nav.Link></button>
      
    }
    </Nav>

    </div>
   
    </Container>
    
  </Navbar>


  
</> 
        
    );
};

export default Header;
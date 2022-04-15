import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import { blue, pink } from '@mui/material/colors';
import './Footer.css'
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div className='footer background_color '>
            <div className="container">
  <div className="row mb-5 row-cols-md-2 row-cols-lg-3 row-cols-1 mt-0">
    <div className="col ">
      <h1 className='text-start mt-4 p-2'>About Company</h1>
      <p className='text-start p-2'>A company can be created as a legal person so that the company itself has limited liability as members perform or fail to discharge their duty according to the publicly declared incorporation</p>

      <FacebookOutlinedIcon sx={{ fontSize: 35, color: blue[800] }} />

      <InstagramIcon sx={{ fontSize: 35 ,color: pink[800] }}  />

      <LinkedInIcon sx={{ fontSize: 35, color: blue[800] }} />
    </div>

    <div className="col">
      <h1 className='mt-4 text-start p-2'>Useful Links</h1>

      <div className='text-start'>
      <NavHashLink to="/home#home" className='text-decoration-none text-black  fs-6'>HOME</NavHashLink>
      <br />
      <NavLink to="/blog" className='text-decoration-none text-black  fs-6'>BLOG</NavLink>
      <br />
      <NavHashLink to="/home#services"className='text-black  fs-6 text-decoration-none mt-2'>SEARVICE</NavHashLink>

    </div>
    </div>

    <div className="col">
    <h1 className='mt-4 text-start p-2'>Contact Us</h1>

    
     <div>
       
    
      <div className='d-flex justify-content-start'>
     
      <PhoneIcon sx={{ fontSize: 35 }}/>
       <p className='mt-1 m-2'>+8801000000001</p>
      </div>

      <div className='d-flex justify-content-start '>
      <EmailIcon sx={{ fontSize: 30 }} />
      <a  href="https://mail.google.com" className='text-decoration-none'><p className='mt-1 m-2 text-decoration-none'>CoronaCorner@gmail.com</p></a>
      </div>

      <div className='d-flex justify-content-start'>
      <AddLocationIcon sx={{ fontSize: 35 }}/>
      <p className='mt-1 m-2'>Tejgaon, Dhaka</p>
      </div>
      
     </div>

     </div>
   </div>
 
     </div>
     
     <hr />

<div className='mb-2'> 
<small>© Shahariar 2022. All Rights Reserved</small>
</div>

        
        </div>
    );
};

export default Footer;
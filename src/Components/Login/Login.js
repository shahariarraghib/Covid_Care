import React from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth.js';
import GoogleIcon from '@mui/icons-material/Google';
import useFirebase from '../../Hooks/useFirebase.js';


const Login = () => {
    const { googleSignIn,
        handleRegistration,
        handleNameChange,
        handleResetPassword,
        toggleLogin,
        handlePasswordChange,
        handleEmailChange, isLogin, error } = useAuth();
    const location = useLocation();
    const history = useHistory();
    
    const redirect_url = location.state?.from || '/home';
   

    const handleGoogleLogin = () =>{
        googleSignIn()
        .then(result => {
            
            history.push(redirect_url);
            
        })
    }
    return (
      
        <div >
              <h2>Welcome to CovidCare! Please login.</h2>


  <div className='d-flex justify-content-center '>


             
 <div className='p-3 m-4'>
 <form onSubmit={handleRegistration}>
      <h3>Please {isLogin ? 'Login' : 'Register'}</h3>
{ !isLogin &&
  
  <div className="mb-3">
  <label for="" 
  className="form-label">Name</label>

  <input onBlur={handleNameChange} type="text" className="form-control"  aria-describedby=""/>
  
</div>
}

  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>

    <input onBlur={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input onBlur={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1"/>
  </div>

  <div class="form-check">
  <input onChange={toggleLogin} class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Already Register
  </label>
</div>
  <p className='text-danger'>{error}</p>
  <button type="submit" className="btn btn-primary">{isLogin ? 'Login' : 'Register'}</button>

  
  <button type="button" onClick={handleResetPassword} class="btn btn-danger m-2">Reset Password</button>
</form>
 </div>



        <div className='d-flex align-items-center m-5'>
        
        <button onClick={ handleGoogleLogin } type="button" class="btn btn-success px-5 fw-bolder bg-danger"> <GoogleIcon className='m-2'/>GOOGLE</button>
        </div>
  </div>

        </div>
    );
};

export default Login;
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../FireBase/Firebase.init";
initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
 const[isLogin, setIsLogin] = useState(false);
const [name, setName] = useState('');

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const googleSignIn = () =>{
        setIsLoading(true);
      return  signInWithPopup(auth, googleProvider)
        
        .catch(error =>{
            setError(error.message);
        })
        .finally( () => setIsLoading(false));
    }


    const logOut = () =>{
        setIsLoading(true);
        signOut(auth)
    .then(()=>{
        setUser({});
    })
    .finally( () => setIsLoading(false));
    }

    useEffect(() =>{
        onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({});
            }

            setIsLoading(false);
        })
    }, [])

    const handleRegistration = (e) =>{
        e.preventDefault();
     console.log(email, password)
     if(password.length < 6){
       setError('Password must be at list 6 characters long.')
       return;
     }
     if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
    setError('password must contain 2 upper Case')
    return;
     }
     isLogin ? processLogin(email, password) : createNewUser(email, password)
      }

      const createNewUser = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
          const user = result.user;
          console.log(user);
          setError('');
          verifyEmail();
          setUserName();
        })
        .catch(error =>{
          setError(error.message);
        })
       }
      
       const setUserName = () =>{
        updateProfile(auth.currentUser, {
          displayName: name
        })
      
        .then(result =>{
          
        })
       }
      
       const processLogin = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
          const user = result.user;
          console.log(user)
          setError('');
        })
        .catch(error =>{
          setError(error.message);
        })
       }
       
        
      
        
      
      const handleEmailChange = event => {
        setEmail(event.target.value)
      }
      
      const handlePasswordChange = event =>{
        setPassword(event.target.value)
      }
      
      const toggleLogin = event =>{
        setIsLogin(event.target.checked)
      }
      
      const verifyEmail = () =>{
        sendEmailVerification(auth.currentUser)
        .then(result =>{
      console.log(result)
        })
      }
      const handleResetPassword = () =>{
        sendPasswordResetEmail(auth, email)
        .then(result =>{
          console.log(result)
        })
      }
      
      const handleNameChange = event => {
      setName(event.target.value)
      }

    return{
        user,
        error,
        logOut,
        isLoading,
        googleSignIn,
        handleRegistration,
        handleNameChange,
        handleResetPassword,
        toggleLogin,
        handlePasswordChange,
        handleEmailChange,
        verifyEmail,
        processLogin,
        setUserName,
        isLogin


    }
}

export default useFirebase;
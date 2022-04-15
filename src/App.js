import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Booking from './Components/Booking/Booking';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Blog from './Components/Blog/Blog';
import Authprovider from './Context/Authprovider';
import NotFound from './Components/NotFound/NotFound';



function App() {
  return (
    <div className="App">
   <Authprovider>
   <BrowserRouter>
     <Header></Header>
    
     <Switch>
       
     <Route exact path="/">
        <Home></Home>
       </Route>
       <Route path='/home'>
        <Home></Home>
       </Route>
       

        <PrivateRoute path="/booking/:bookingId">
          <Booking></Booking>
          </PrivateRoute>
          
          <PrivateRoute path='/blog'>
            <Blog></Blog>
          </PrivateRoute>

        <Route path="/login">
        <Login></Login>
        </Route>

        <Route path="*">
          <NotFound></NotFound>
        </Route>

     </Switch>
     <Footer></Footer>
     </BrowserRouter>
   </Authprovider>
    </div>
  );
}

export default App;

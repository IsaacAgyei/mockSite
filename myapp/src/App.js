import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AboutPage from './components/aboutpage/AboutPage'
import ServicePage from './components/servicepage/ServicePage'
import PricePage from './components/pricepage/PricePage'
import ContactPage from './components/contact/ContactPage';
import SignIn  from "./signin/SignIn";
import SignUp  from "./signup/SignUp";
import FileUploader  from "./components/FileUploader";
import Navbar from "./components/homepage/Navbar";
import HomePage from './components/homepage/HomePage'
import PrivateRoute from "./hoc/PrivateRoute";
import ForgotPassword from './resetpassword/ForgotPassword'
import ResetPassword from './resetpassword/ResetPassword'

function App() {

  return (
    <Router>
        <Navbar/>
          <Switch>
            <Route exact path='/' component= { HomePage } />
            <Route exact path="/about" component={ AboutPage }/>
            <Route exact path="/services" component={ ServicePage }/>
            <Route exact path="/prices" component={ PricePage }/>
            <Route exact path="/contact" component={ ContactPage }/>
            <Route exact path="/signin" component={ SignIn }/>
            <Route exact path="/register" component={ SignUp} />
            <Route exact path="/forgot-password" component= { ForgotPassword }/>
            <Route exact path="/reset/:token" component= { ResetPassword }/>
          </Switch>
          <PrivateRoute exact path="/uploader" component={ FileUploader }/>
    </Router>
  );
}

export default App;

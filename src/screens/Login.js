import React from 'react';
import LoginForm from '../Components/LoginForm';
import logoImg from '../assets/images/sunflow logo 1.png';
import frontImg from '../assets/images/22 2.png';
const Login = () => {
  return (
    <>
      <div className="container ">
        <div className="row d-flex">
          <div className="col-md-4 col-lg-3">
            <div className="logo-img front-margin-top">
              <img src={logoImg} alt="" className="img-fluid" />
            </div>
            <h1 className="login__heading">Log in to your account</h1>
            <LoginForm />
          </div>
          <div className="col-md-8 col-lg-9 carton-img">
            <img src={frontImg} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

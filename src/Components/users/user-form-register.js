import React, { Component}  from "react";
import './user.css'
import logo  from "../../img/logo.png";

class RegisterFormComponent extends Component{
    render(){
        return (
            <div id="container-fullimg">
            <div class="container-login-reg">
                <div class="text-center">
                    <div class="col-md-12">
                        <form data-aos="fade-up" id="register-form">
                            <a href="/" class="h-logo" data-aos="zoom-in"> 
                                <img src={logo} alt="logo"/></a>                           
                            <h1 data-aos="fade-up" class="title font-bold">Register</h1>
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label >User Name</label>
                                    <input type="text" class="form-control" placeholder="User name" name="user_name"/>
                                </div>
                                <div class="form-group col-md-6">
                                    <label>Email address</label>
                                    <input type="email" class="form-control" placeholder="Enter email" name="email"/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label>Password</label>
                                    <input type="password" class="form-control" placeholder="Password" name="password"/>
                                </div>
                                <div class="form-group col-md-6">
                                    <label>Confirm Password</label>
                                    <input type="password" class="form-control" placeholder="Confirm Password" name="password2"/>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-md-10 center">
                                    <button type="submit" class="btn btn-dark waves-effect waves-light m-r-10" id="registerButton">Submit</button>
                                    <button type="reset" class="btn btn-primary waves-effect waves-light m-r-10">Clear</button>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="error-box">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default RegisterFormComponent;
import React, { Component}  from "react";
import './user.css'
import logo  from "../../img/logo.png";

class LoginFormComponent extends Component{
    render(){
        return (
        <div id="container-fullimg">
            <div class="container-login-reg">
                <div class="col-md-6 text-center">
                    <div class="col-md-12">
                        <form data-aos="fade-up" id="login-form">
                           <a href="/" class="h-logo" data-aos="zoom-in"> 
                                <img src={logo} alt="logo"/></a>
                                <h1 class="title font-bold"> Login </h1>
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label >User Name</label>
                                        <input type="text" class="form-control" placeholder="User name" name="user_name"/>
                                    </div>
                                <div class="form-group col-md-6">
                                    <label>Password</label>
                                    <input type="password" class="form-control" placeholder="Password" name="password"/>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-md-10 center">
                                    <button type="submit" class="btn btn-dark waves-effect waves-light m-r-10" id="login-button">Login</button>
                                    <button type="reset" class="btn btn-primary waves-effect waves-light m-r-10">Clear</button>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="error-box"></div>
                            </div>
                        </form> 
                    </div> 
                </div> 
            </div> 
        </div>
        )
    }
}

export default LoginFormComponent;
import React, { Component}  from "react";
import './user.css'
import logo  from "../../img/logo.png";

//import { Redirect } from 'react-router-dom';
//import { useHistory } from "react-router-dom";

class LoginFormComponent extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '',
        };
    }
    userNameHandler = (event) => {
        this.setState({username: event.target.value});
    }
    passwordHandler = (event) => {
        this.setState({password: event.target.value});
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        this.postLogin(this.state.username, this.state.password);
    }
    postLogin = async function(user_name, password){
        try{
            const formData = {
                'user_name' : user_name,
                'password': password
            };
            let response = await fetch('https://movies-smart.herokuapp.com/api/authentication/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) { 
                let json = await response.json();
                console.log(json);
                window.location.replace('/home');
            }
        }
        catch(error){
            console.log(`error - postLogin - ${error}`);
        }
    }


    render(){
        return (
        <div id="container-fullimg">
            <div className="container-login-reg">
                <div className="col-md-6 text-center">
                    <div className="col-md-12">
                        <form data-aos="fade-up" id="login-form" onSubmit={this.mySubmitHandler}>
                           <a href="/" className="h-logo" data-aos="zoom-in"> 
                                <img src={logo} alt="logo"/></a>
                                <h1 className="title font-bold"> Login </h1>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label >User Name</label>
                                        <input type="text" className="form-control" placeholder="User name" name="user_name" onChange={this.userNameHandler}/>
                                    </div>
                                <div className="form-group col-md-6">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Password" name="password" onChange={this.passwordHandler}/>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-10 center">
                                    <button type="submit" className="btn btn-dark waves-effect waves-light m-r-10" id="login-button">Login</button>
                                    <button type="reset" className="btn btn-primary waves-effect waves-light m-r-10">Clear</button>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="error-box"></div>
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
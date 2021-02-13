import React, { Component}  from "react";
import './user.css'
import logo  from "../../img/logo.png";

class RegisterFormComponent extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            email: '',
            password: '',
            password2: '',
        };
    }
    userNameHandler = (event) => {
        this.setState({username: event.target.value});
    }
    emailHandler = (event) => {
        this.setState({email: event.target.value});
    }
    passwordHandler = (event) => {
        this.setState({password: event.target.value});
    }
    password2Handler = (event) => {
        this.setState({password2: event.target.value});
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        this.postRegister(this.state.username, this.state.email, this.state.password, this.state.password2);
    }
    postRegister = async function (user_name, email,password, password2){
        try{
            const formData = {
                'user_name' : user_name,
                'email': email,
                'password': password,
                'password2': password2
            };
            let response = await fetch('https://movies-smart.herokuapp.com/api/authentication/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) { 
                let json = await response.json();
                let user = json.newUser;
                localStorage.setItem('userName', user.user_name );
                localStorage.setItem('userID', user._id );
                localStorage.setItem('userMail', user.email);;
                if(user.isAdmin) {localStorage.setItem('isAdmin', 'admin' );}
                else {localStorage.setItem('isAdmin', 'user' );}
                window.location.replace('/home');
            }
        }
        catch(error){
            console.log(`error - postRegister - ${error}`);
        }
    }
    

    render(){
        return (
            <div id="container-fullimg">
            <div className="container-login-reg">
                <div className="text-center">
                    <div className="col-md-12">
                        <form data-aos="fade-up" id="register-form" onSubmit={this.mySubmitHandler}>
                            <a href="/" className="h-logo" data-aos="zoom-in"> 
                                <img src={logo} alt="logo"/></a>                           
                            <h1 data-aos="fade-up" className="title font-bold">Register</h1>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label >User Name</label>
                                    <input type="text" className="form-control" placeholder="User name" name="user_name" onChange={this.userNameHandler}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Email address</label>
                                    <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={this.emailHandler}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Password" name="password" onChange={this.passwordHandler}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Confirm Password</label>
                                    <input type="password" className="form-control" placeholder="Confirm Password" name="password2" onChange={this.password2Handler}/>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-10 center">
                                    <button type="submit" className="btn btn-dark waves-effect waves-light m-r-10" id="registerButton">Submit</button>
                                    <button type="reset" className="btn btn-primary waves-effect waves-light m-r-10">Clear</button>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="error-box">
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
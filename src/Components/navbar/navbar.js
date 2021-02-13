import '../users/user.css'
import logo  from "../../img/logo.png";
import userImage from "../../img/profile-demo.png"
import adminImage from "../../img/profile-demo2.jpg"

import { BiCaretDownCircle } from 'react-icons/bi';
import { BiAlignJustify } from 'react-icons/bi';
import { BiCodeAlt } from 'react-icons/bi';
import { BiHomeAlt } from 'react-icons/bi';
import { BiUserCircle } from 'react-icons/bi';
import { BiSelectMultiple } from 'react-icons/bi';
import { BiLoaderCircle } from 'react-icons/bi';
import { BiLock } from 'react-icons/bi';
import React  from 'react';

const NavBarComponent =()=>{
    const userName = localStorage.getItem('userName');

    function showNavBar(){
        console.log(localStorage.getItem('isAdmin'))
        if(localStorage.getItem('isAdmin') === 'user'){
           return(
                <nav id="aside-nav">        
                    <div className="d-flex flex-column">
                        <div className="search-links">
                            <img src={logo} alt="logo"/>
                        </div>
                        <nav className="nav-menu">
                            <ul>
                                <li><a href="/home"><BiHomeAlt className="bx"/> Home</a></li>
                                <li><a href="/profile"><BiUserCircle className="bx"/> Profile</a></li>
                                <li><a href="/toprated"><BiLoaderCircle className="bx"/> Top Rated Movies</a></li>
                                <li><a href="/recomand"><BiSelectMultiple className="bx"/> Recomandations</a></li>
                                <li><a href="/smart"><BiCodeAlt className="bx"/> Smart Search</a></li>
                                <li><a href="/lists"><BiAlignJustify className="bx"/> Lists</a></li>
                                <li><a href="/"><BiCaretDownCircle className="bx"/> Logout</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div id="mini-profile">
                        <img src={userImage} alt="userImage"/>
                            <h4 id = "userName" className="text-light"> {userName} </h4>       
                    </div>
                    <nav className="nav-footer">
                        <ul>
                            <li><a href="/home"> Privacy Policy </a></li>
                            <li> © 2020 Daniel Modilevsky Jonatan Kobany.</li>
                        </ul>
                    </nav>
                </nav>
            ) 
        }
        else{
            return (
                <nav id="aside-nav">
                    <div className="d-flex flex-column">
                        <div className="search-links">
                            <img src={logo} alt="logo"/>
                        </div>
                        <nav className="nav-menu">
                            <ul>
                                <li><a href="/home"><BiHomeAlt className="bx"/> Home</a></li>
                                <li><a href="/profile"><BiUserCircle className="bx"/> Profile</a></li>
                                <li><a href="/toprated"><BiLoaderCircle className="bx"/> Top Rated Movies</a></li>
                                <li><a href="/recomand"><BiSelectMultiple className="bx"/> Recomandations</a></li>
                                <li><a href="/smart"><BiCodeAlt className="bx"/> Smart Search</a></li>
                                <li><a href="/lists"><BiAlignJustify className="bx"/> Lists</a></li>
                                <li><a href="/admin"><BiLock className="bx"/> Admin</a></li>
                                <li><a href="/"><BiCaretDownCircle className="bx"/> Logout</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div id="mini-profile">
                        <img src={adminImage} alt="adminImage"/>
                            <h4 id = "userName" className="text-light"> {userName} </h4>       
                    </div>
                    <nav className="nav-footer">
                        <ul>
                            <li><a href="/home"> Privacy Policy </a></li>
                            <li> © 2020 Daniel Modilevsky Jonatan Kobany.</li>
                        </ul>
                    </nav>
                </nav>
            )  
        }
    }
    return (
           <div>
               {showNavBar()}
           </div>
        )
    }

export default NavBarComponent;
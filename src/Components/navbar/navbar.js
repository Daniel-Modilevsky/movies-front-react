import '../users/user.css'
import logo  from "../../img/logo.png";
import userImage from "../../img/profile-demo.png"
import { BiCaretDownCircle } from 'react-icons/bi';
import { BiAlignJustify } from 'react-icons/bi';
import { BiCodeAlt } from 'react-icons/bi';
import { BiHomeAlt } from 'react-icons/bi';
import { BiUserCircle } from 'react-icons/bi';
import { BiSelectMultiple } from 'react-icons/bi';
import { BiLoaderCircle } from 'react-icons/bi';

const NavBarComponent =()=>{
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
                            <li><a href="/"><BiCaretDownCircle className="bx"/> Logout</a></li>
                        </ul>
                    </nav>
                </div>
                <div id="mini-profile">
                    <img src={userImage} alt="userImage"/>
                        <h4 id = "userName" className="text-light"> </h4>       
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

export default NavBarComponent;
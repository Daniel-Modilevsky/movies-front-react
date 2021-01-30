import '../users/user.css'
import logo  from "../../img/logo.png";
import userImage from "../../img/profile-demo.png"
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
  crossorigin="anonymous"
/>
const NavBarComponent =()=>{
        return (
            <nav id="aside-nav">
                <div className="d-flex flex-column">
                    <div className="search-links">
                        <img src={logo} alt="logo"/>
                    </div>
                    <nav className="nav-menu">
                        <ul>
                            <li><a href="/home"><i className="bx bx-home selected"></i> Home</a></li>
                            <li><a href="/profile"><i className="bx bx-user"></i> Profile</a></li>
                            <li><a href="/toprated"><i className="bx bx-hash"></i> Top Rated Movies</a></li>
                            <li><a href="/recomand"><i className="bx bx-message"></i> Recomandations</a></li>
                            <li><a href="/smart"><i className="bx bx-bookmark"></i> Smart Search</a></li>
                            <li><a href="/lists"><i className="bx bx-detail"></i> Lists</a></li>
                            <li><a href="/"><i className="bx bx-dots-horizontal-rounded"></i> Logout</a></li>
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
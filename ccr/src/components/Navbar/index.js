import React, {Component} from "react";
import "./styles.css"
import LookIcon from "../../images/discover.png";
import HomeIcon from "../../images/home.png";
import CertifIcon from "../../images/polls.png";
import UserIcon from "../../images/user.png";


export class Navbar extends Component {
    render(){
        return(
            <div className="navbar-main">
                <div className="navbar-content">
                    <div>
                        <img className="nav-icon" src={LookIcon} alt="logo"></img>
                    </div>
                    <div>
                        <img className="nav-icon" src={HomeIcon} alt="logo"></img>
                    </div>
                    <div>
                        <img className="nav-icon" src={CertifIcon} alt="logo"></img>
                    </div>
                    <div>
                        <img className="nav-icon" src={UserIcon} alt="logo"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar
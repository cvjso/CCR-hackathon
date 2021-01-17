import React, {Component} from "react";
import "./styles.css"
import LookIcon from "../../discover.png";
import HomeIcon from "../../home.png";
import CertifIcon from "../../polls.png";
import UserIcon from "../../user.png";


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
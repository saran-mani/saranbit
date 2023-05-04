import { Component } from "react";
import "./Footer.css"
class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <div className="container-fluid bg-dark text-light p-5">
                <div className="row text-center text-uppercase">
                    <div className="col-sm"> HOME</div>
                    <div className="col-sm">Explore Temple's</div>
                    <div className="col-sm">About Us</div>
                    <div className="col-sm">Contact</div>
                </div>
            </div>
            </>
        );
    }
}
 
export default Footer;
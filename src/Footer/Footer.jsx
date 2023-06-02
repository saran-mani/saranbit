import { Component } from "react";
import "./Footer.css"
import { Link } from "react-router-dom";
class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <div className="container-fluid bg-dark text-light p-5">
                <div className="row text-center text-uppercase">
                    <div className="col-sm"><Link to="/">HOME</Link> </div>
                    <div className="col-sm"><Link to="/explore-temples"> Explore Temple's</Link></div>
                    <div className="col-sm"><Link to="/about"> About Us</Link></div>
                    <div className="col-sm"><Link to="/contact">Contact</Link> </div>
                </div>
            </div>
            </>
        );
    }
}
 
export default Footer;
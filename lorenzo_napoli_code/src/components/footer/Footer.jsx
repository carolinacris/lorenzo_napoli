import { Link } from "react-router-dom";
import { Single } from "../../pages/single/Single";
import './footer.css'

export const Footer = () =>{

    return(
        <footer className="footer">
            <nav>
            <li><Link className="gradient-text lets-chat" to="/chat">let's chat</Link></li>
            <li><Link className="secondary-link back-home" to="/">back to home</Link></li>
            </nav>
        </footer>
    )
}
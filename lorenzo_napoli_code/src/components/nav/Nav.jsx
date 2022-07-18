import { Link } from 'react-router-dom'
import "./nav.css"

export const Nav = () =>{
    return(
        <nav className="nav-primary gradient-text uppercase" >
            <ul>
                <li className='char'><Link to="/charaters">Charaters</Link></li>
                <li className='env'><Link to="/enviroments">Enviroments</Link></li>
            </ul>
        </nav>
    )
}
import { Link } from 'react-router-dom'
import "./header.css"

export const Header = () => {

            return(
                <header>
            <nav>
                <ul>
                    <li><Link to="/"><img src="src/assets/img/logo_lorenzo_napoli.png" alt="" /></Link></li>
                </ul>
            </nav>
            </header>
        )

}
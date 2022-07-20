import { Link } from "react-router-dom"
import "./charater.css"
export const Charater = ()=>{
    return(
        <div className="card">
            <div className="png-wrap">
                <div className="background-card"></div>
                <img src="src/assets/img/cards/charaters/4.png" alt="" />
            </div>
                <Link to="/single" className="titolo">Neomorph</Link>
        </div>
    )
}
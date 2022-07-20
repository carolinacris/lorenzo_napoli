import { Link } from "react-router-dom"
import "./single.css"

export const Single =()=>{
    return(
       <section className="single">
        <div className="text-box">
            <h1 className="gradient-text">Titolo</h1>
            <div className="in-box">
                <h2 className="gradient-text"> consectetur adipisicing elit?</h2>
            </div>
        </div>
   
        <div className="wrapper" id="single-w">
            <img src="src/assets/img/cards/enviroments/lorenzo-napoli-sketching23.jpg" alt="alien1" />
            <img src="src/assets/img/cards/charaters/alien2.jpg" alt="alien2" />
        </div>
        <Link to="/charaters"className="back secodary-link">back to charaters</Link>
       </section>
    )
}
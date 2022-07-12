import { Enviroment } from "../../components/enviroment/enviroment"
import "./enviroments.css"
// import { Link } from "react-router-dom"

export const Enviroments = ()=>{
    return(
        <section className="enviroments">
            <h1 className="gradient-text uppercase">Enviroments</h1>
            <div className="wrapper">
                <Enviroment></Enviroment>
                <Enviroment></Enviroment>
                <Enviroment></Enviroment>
                <Enviroment></Enviroment>
                <Enviroment></Enviroment>
            </div>
        </section>
    )
}
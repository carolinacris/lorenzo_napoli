import { Enviroment } from "../../components/enviroment/enviroment"
import {hotWheel} from "../../components/functions/HotWheel"
import "./enviroments.css"
// import { Link } from "react-router-dom"

export const Enviroments = ()=>{

   
    return(
        <>
        <h1 className="gradient-text uppercase nav-primary t-a-end">enviroments</h1>
        <section className="enviroments" onWheel={hotWheel}  id="scroll">
            <div className="wrapper " >
                <Enviroment></Enviroment>
                <Enviroment></Enviroment>
                <Enviroment></Enviroment>
                <Enviroment></Enviroment>
                <Enviroment></Enviroment>
            </div>
        </section>
        </>
    )
}
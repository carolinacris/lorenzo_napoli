import {Charater} from "../../components/charater/Charater"
import "./charaters.css"
// import { Link } from "react-router-dom"

export const Charaters = ()=>{
    return(
        <section className="charaters">
            <h1 className="gradient-text uppercase">charaters</h1>
            <div className="wrapper">
                <Charater></Charater>
                <Charater></Charater>
                <Charater></Charater>
                <Charater></Charater>
                <Charater></Charater>
            </div>
        </section>
    )
}
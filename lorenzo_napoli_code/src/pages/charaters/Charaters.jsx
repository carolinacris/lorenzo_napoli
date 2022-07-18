import {Charater} from "../../components/charater/Charater"
import "./charaters.css"
// import { Link } from "react-router-dom"

export const Charaters = ()=>{
    return(
        <>
        <h1 className="gradient-text uppercase nav-primary">charaters</h1>
        <section className="charaters">
            <div className="wrapper">
                <Charater></Charater>
                <Charater></Charater>
                <Charater></Charater>
                <Charater></Charater>
                <Charater></Charater>
            </div>
        </section>
        </>
    )
}
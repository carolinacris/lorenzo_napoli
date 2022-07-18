import {Charater} from "../../components/charater/Charater"
import { hotWheel } from "../../components/functions/HotWheel"
import "./charaters.css"
// import { Link } from "react-router-dom"

export const Charaters = ()=>{
    return(
        <>
        <h1 className="gradient-text uppercase nav-primary">charaters</h1>
        <section className="charaters"onWheel={hotWheel}  id="scroll" >
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
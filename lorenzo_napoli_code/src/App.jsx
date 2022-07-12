import { Routes, Route } from "react-router-dom";
import { Homie } from "./pages/home/homie";
import { Header } from "./components/header/Header";
import {Charaters} from "./pages/charaters/Charaters"
import {Chat} from "./pages/chat/Chat"
import { Footer } from "./components/footer/Footer";
import { Enviroments } from "./pages/enviroments/enviroments";


export const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Homie />} />
                <Route path="/charaters" element={<Charaters/>} />
                <Route path="/chat" element={<Chat/>} />
                <Route path="/enviroments" element={<Enviroments/>} />
            </Routes>
            <Footer></Footer>
          
        </>
    )
}
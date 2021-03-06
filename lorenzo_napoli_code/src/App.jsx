import { Routes, Route, useLocation } from "react-router-dom";
import { Homie } from "./pages/home/Homie";
import { Header } from "./components/header/Header";
import {Charaters} from "./pages/charaters/Charaters"
import {Chat} from "./pages/chat/Chat"
import { Footer } from "./components/footer/Footer";
import { Enviroments } from "./pages/enviroments/enviroments";
import { Single } from "./pages/single/Single";



export const App = () => {
    
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Homie />} />
                <Route path="/charaters" element={<Charaters/>} />
                <Route path="/chat" element={<Chat/>} />
                <Route path="/enviroments" element={<Enviroments/>} />
                <Route path="/single" element={<Single/>} />
            </Routes>
            <Footer></Footer>
          
        </>
    )
}



// const RoutePaths = {
//     Index: "/",
//     Charaters: "/charaters",
//     Chat: "/chat",
//     Enviroments: "/enviroments",
// }

// export const App = () => {
//     let location = useLocation();

//     const hasHeader = location.pathname !== RoutePaths.Chat;

//     return (
//         <>
//             {hasHeader && <Header/>}
//             <Routes>
//                 <Route path={RoutePaths.Index} element={<Homie />} />
//                 <Route path={RoutePaths.Charaters} element={<Charaters/>} />
//                 <Route path={RoutePaths.Chat} element={<Chat/>} />
//                 <Route path={RoutePaths.Enviroments} element={<Enviroments/>} />
//             </Routes>
//             <Footer></Footer>
          
//         </>
//     )
// }

import Mail from "../../components/mail/Mail"
import { Social } from "../../components/social/Social"
// import { useHorizontalScroll } from "../../components/hooks/useHorizontalScroll"
import "./chat.css"


export const Chat = () =>{


     

    return(
        <section className="chat"  > 
            <div className="me" >
                <p>Mi presento sono Lorenzo, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor </p>
                <img src="src/assets/img/lollo/lollo1.jpeg" alt="Lorenzo Napoli" className="scomparsa"/>
            </div>
            <div>
                <p>Altre cose di me sul perchè mi pace fare quello che faccio ma molto brevemente giusto per andare a capo</p>
                <img src="src/assets/img/lollo/lollo2.jpg" alt="" />
            </div>
            <div className="text-box">
                <h1 className="uppercase"><span>about our</span><span>next project</span></h1>
            </div>
            <div>
              <h1>faccio la form</h1>
            </div>
            <ul>
                <li><Mail mailto={"mailto:mailto:napo.art01@gmail.com"} label="napo.art01@gmail.com"></Mail></li>
                <li><span>+39 344556739256</span></li>
                <li><Social url={"https://www.artstation.com/lorenzonapoli"} classe={"fab fa-artstation"}></Social></li>
                <li><Social url={"https://it.linkedin.com/in/lorenzo-napoli-17a2ab197?trk=people-guest_people_search-card"} classe={"fab fa-linkedin"}></Social></li>
                <li><Social url={"https://www.instagram.com/iamlorenzonapoli/"} classe={"fab fa-instagram"}></Social></li>

            </ul>
        </section>
    )
}


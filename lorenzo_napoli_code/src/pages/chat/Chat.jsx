import Mail from "../../components/mail/Mail"
import { Social } from "../../components/social/Social"
import { hotWheel } from "../../components/functions/HotWheel"
import { Form } from "../../components/form/Form"
// import { useHorizontalScroll } from "../../components/hooks/useHorizontalScroll"
import "./chat.css"


export const Chat = () =>{

   const nope=(event)=>{
    console.log(event.deltaY);
    if(event.deltaY >= 0){
       const head = document.querySelector(".mamma")
       head.classList.add("nope")
    }else{
         const head = document.querySelector(".mamma")
        head.classList.remove("nope")
    }
  
   } 

    return(
        <section className="chat" onWheel={hotWheel}  id="scroll" >
        
          <div className="wrapper" onWheel={nope}>
                <div className="me" >
                    <p>Mi presento sono Lorenzo, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor </p>
                    <img src="src/assets/img/lollo/lollo1.jpeg" alt="Lorenzo Napoli" className="scomparsa"/>
                </div>
                <div>
                    <p>Altre cose di me sul perchè mi pace fare quello che faccio ma molto brevemente giusto per andare a capo</p>
                    <img src="src/assets/img/lollo/lollo2.jpg" alt="" />
                </div>
                <div className="text-box">
                    <h1 className="uppercase"><span>contacts</span> </h1>
                </div>
                <ul>
                    <div className="contactme">
                        <li><Mail mailto={"mailto:mailto:napo.art01@gmail.com"} label="napo.art01@gmail.com"></Mail></li>
                        <li><a>+39 344556739256</a></li>
                    </div>
                    <div className="contactme_due">
                        <li><Social url={"https://www.artstation.com/lorenzonapoli"} classe={"fab fa-artstation"} nome={"Lorenzo Napoli"}></Social></li>
                        <li><Social url={"https://it.linkedin.com/in/lorenzo-napoli-17a2ab197?trk=people-guest_people_search-card"} classe={"fab fa-linkedin"} nome={"Lorenzo Napoli concept artist"}></Social></li>
                        <li><Social url={"https://www.instagram.com/iamlorenzonapoli/"} classe={"fab fa-instagram"} nome={"iamlorenzonapoli"}></Social></li>
                    </div>
                </ul>
            </div>
        </section>
    )
}


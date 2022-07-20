import emailjs from "emailjs-com"
//npm install emailjs-com

//npm install react-toastify

export const Form=()=>{

    const inviaEmail=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_L0r3nzo', "template_impzfib", e.target, "user_3upU9uFX-270Jc09h");
    }
    return(
        <form action=""Submit={inviaEmail} on>


            <input type="submit" value="INVIA"/>
        </form>
    )
}
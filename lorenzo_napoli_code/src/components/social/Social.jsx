import "./social.css"
export const Social = ({url, classe, nome}) =>{

    return(
        <a href={url} className={classe} target="_blank"><span>{nome}</span></a>
    )
}
import { Link } from "react-router-dom";


const Mail = ({mailto, label}) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        > 
        {label}
        </Link>
    );
};

export default Mail;




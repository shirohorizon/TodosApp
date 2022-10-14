import { Link } from "react-router-dom";

function Contact() {
    return (<h1>Contact
        <Link to={'/about'}>about</Link>
    </h1>);
}

export default Contact;
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
    return (
        <>
            <ul className="nav">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/privacy">Privacy Policy</Link>
                </li>
            </ul>
        </>
    );
};

export default Navbar;

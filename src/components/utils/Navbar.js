import navbarStyle from "../styles/navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className={navbarStyle.navbar}>
            <Link to="/">Home</Link>
            <Link to="auth/Logging">Sign in</Link>
            <Link to="auth/Registration">Sign up</Link>
        </nav>
    );
}

export default Navbar;
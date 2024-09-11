import { useState, useEffect } from "react";
// import {Link} from "react-scroll";
import { Link } from "react-router-dom";


function Navbar() {
    const [navActive, setNavActive] = useState (false);

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    const closeMenu = () => {
        setNavActive(false);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu;
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu;
        }
    }, []);

    return (
        <nav className={ `navbar ${navActive ? "active": ""}`}>

            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link to="/" className="navbar--content">Home</Link>
                    </li>
                    <li>
                        <Link to="/AboutMe" className="navbar--content">About Me</Link>
                    </li>
                    <li>
                        <Link to="/Contact"> Contact Mek </Link>
                    </li>
                </ul>
            </div>
            
        </nav>
    )
}

export default Navbar
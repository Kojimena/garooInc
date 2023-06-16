import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-scroll"
import "./NavBar.css"
import Button from "../Button/Button"

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <Link to='/' className='logo'>
                    <img src="/images/logo.png" alt='logo' />
                </Link>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: "#ffffff" }} />)
                        : (<FaBars size={30} style={{ color: "#ffffff" }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="/" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="services" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Services</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="portfolio" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Portfolio</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="contact" spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu}>Contact Us</Link>
                    </li>
                </ul>
                <Button text="Contacto" whatsapp={true} backgroundcolor={"#29ABE2"}/>
            </nav>
        </div>
    )
}

export default Navbar
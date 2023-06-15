import React from "react"
import "./PrincipalPage.css"
import NavBar from "../../components/NavBar/NavBar"

const PrincipalPage = () => {

    return (
        <div className='principalPage'>
            <NavBar />
            <section id='/' className="home">
                <h1>Home</h1>
            </section>
            <section id='about' className="about">
                <h1>About</h1>
            </section>
            <section id='services' className="services">
                <h1>Services</h1>
            </section>
            <section id='portfolio' className="portfolio">
                <h1>Portfolio</h1>
            </section>
            <section id='contact' className="contact">
                <h1>Contact Us</h1>
            </section>
        </div>
    )
}

export default PrincipalPage


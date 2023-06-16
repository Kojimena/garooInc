import React from "react"
import "./PrincipalPage.css"
import NavBar from "../../components/NavBar/NavBar"
import Textdescbutton from "../../components/Textdescbutton/Textdescbutton"

const PrincipalPage = () => {

    return (
        <div className='principalPage'>
            <NavBar />
            <section id='/' className="home">
                <div className='home__content'>
                <Textdescbutton title1='Ordinary technology' title2='made extraordinary' paragraph="Helping entrepreneurs get online" textbutton='Learn More' buttoncolor="#fff" color="#000"/>
                </div>
                <div className='home__image'>
                    <img src="/images/img1.png" alt='home' />
                </div>
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


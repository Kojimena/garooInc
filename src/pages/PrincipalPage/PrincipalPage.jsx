import React from "react"
import "./PrincipalPage.css"
import NavBar from "../../components/NavBar/NavBar"
import Textdescbutton from "../../components/Textdescbutton/Textdescbutton"
import Title from "../../components/Title/Title"
import ImageText from "../../components/ImageText/ImageText"
import { logos } from "../../assets/imgLogos"
import ImgLogo from "../../components/ImgLogo/ImgLogo"

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
                <Title title1="Our" title2="Garoo" underlined color="#2B2B2B" paddingright="10px"/>
                <div className='about__content'>
                    <div className='about__content__image'>
                        <img src="/images/img2.png" alt='about' />
                    </div>
                    <div className='about__content__text'>
                        <Textdescbutton title1='A ordinary technology made extraordinary' title2='' paragraph="We store your data effectively with our super fast database storage system ensuring safety and security for your data." textbutton='Learn More' buttoncolor="#29ABE2" color="#fff" textcolor="#2B2B2B"/>
                    </div>
                </div>
            </section>
            <section id='services' className="services">
                <Title title1="Our" title2="Products" underlined color="#2B2B2B" paddingright="10px"/>
                <div className='services__content'>
                    <ImageText image="/images/img3.png" title="E - Commerce Solutions" text="We take care of designing, creating, and managing your e-commerce site.
                        Keep your site up to date, just send an email and we will do it for you."/>
                    <ImageText image="/images/img4.png" title="Garoo Cloud" text="We create chatbots powered by Artificial Intelligence (Chat GPT).
                        Save time and maintain efficient communication with everyone."/>
                </div>
            </section>
            <section id='portfolio' className="portfolio">
                <Title title1="Trusted By Renowned" title2="ENTREPRENEURS"  color="#2B2B2B" paddingright="10px" column/>
                <div className='portfolio__content logo-container'>
                    {logos.map((logo) =>  (
                            <ImgLogo image={logo.image} key={logo.name}/>
                        ))
                    }
                </div>
            </section>
            <section id='contact' className="contact">
                <h1>Contact Us</h1>
            </section>
        </div>
    )
}

export default PrincipalPage


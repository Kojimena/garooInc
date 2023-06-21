import React from "react"
import "./PrincipalPage.css"
import NavBar from "../../components/NavBar/NavBar"
import Textdescbutton from "../../components/Textdescbutton/Textdescbutton"
import Title from "../../components/Title/Title"
import ImageText from "../../components/ImageText/ImageText"
import { logos } from "../../assets/imgLogos"
import ImgLogo from "../../components/ImgLogo/ImgLogo"
import Testimonial from "../../components/Testimonial/Testimonial"
import { testimonialData } from "../../assets/testimonialData"
import ServiceIcon from "../../components/ServiceIcon/ServiceIcon"
import Button from "../../components/Button/Button"

const PrincipalPage = () => {

    return (
        <div className='principalPage'>
            <NavBar />
            <section id='/' className="home">
                <div className='home__content'>
                <Textdescbutton title1='Ordinary technology' title2='made extraordinary' paragraph="Helping entrepreneurs get online" textbutton='Learn More' buttoncolor="#fff" color="#000" align="flex-start"/>
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
            <section id='reviews' className="reviews">
                <Title title1="Trusted By Over" title2="100+ Clients Worldwide" column color="#fff"/>
                <div className='contact__content'>
                <Testimonial></Testimonial>
                </div>
            </section>
            <section id='service' className="service">
                <Title title1="Service we provide" title2="" underlined color="#2B2B2B" paddingright="10px"/>
                <div className='service__content'>
                    <ServiceIcon image="/images/img5.svg" title="Web Design" text="We create your website from scratch, we take care of the design, the development and the maintenance of your website."/>
                    <ServiceIcon image="/images/img6.svg" title="UI/UX Design" text="We create your website from scratch, we take care of the design, the development and the maintenance of your website."/>
                    <ServiceIcon image="/images/img7.svg" title="Branding" text="We create your website from scratch, we take care of the design, the development and the maintenance of your website."/>
                    <ServiceIcon image="/images/img8.svg" title="Digital Marketing" text="We create your website from scratch, we take care of the design, the development and the maintenance of your website."/>
                    <ServiceIcon image="/images/img9.svg" title="SEO" text="We create your website from scratch, we take care of the design, the development and the maintenance of your website."/>
                    <ServiceIcon image="/images/img10.svg" title="Email Marketing" text="We create your website from scratch, we take care of the design, the development and the maintenance of your website."/>
                </div>
                
            </section>
            <section id='prefooter' className="prefooter">
            <div className='textdescprefooter' >
                <div className='textdescbutton__title'>
                    <span className='title'>From Guatemala to the</span>
                    <span className='subtitle'>World.</span>
                </div>
                <p className='paragraph'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                <Button text="Get A Quote" backgroundcolor="#29ABE2" colortext="fff"/>
            </div>
            </section>
        </div>
    )
}

export default PrincipalPage


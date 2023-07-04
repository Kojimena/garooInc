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
import Footer from "../../components/Footer/Footer"

const PrincipalPage = () => {

    return (
        <div className='principalPage'>
            <NavBar />
            <section id='/' className="home">
                <div className='home__content'>
                <Textdescbutton 
                    title1='Ordinary technology' 
                    title2='made extraordinary' 
                    paragraph="Empowering Growth through Innovative E-commerce and AI Bot Solutions" 
                    textbutton='Learn More' 
                    buttoncolor="#fff" 
                    color="#000" 
                    align="flex-start"
                    fontsize="52px"
                    />
                </div>
                <img src="/images/gradient.svg" alt='home' className="gradient"/>
                <img src="/images/dots.svg" alt='home' className="dots"/>
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
                    <Textdescbutton 
                        title1='Businesses with Cutting-Edge Technology and AI Innovation' 
                        title2='' 
                        paragraph={[
                            "At Garoo Inc, we pride ourselves on our cutting-edge e-commerce solutions that drive businesses to new heights of success. We understand that the online marketplace is a dynamic and competitive environment, which is why we offer tailored services that cater to the unique needs of each client.", 
                            "Beyond e-commerce, our expertise in AI bot development sets us apart. Garoo Inc is committed to harnessing the full potential of artificial intelligence to bring intelligent and interactive bots to life.", 
                            "We believe in the power of technology to shape a better future, and we are excited to partner with you on this exciting adventure."
                        ]} 
                        textbutton='Contact us' 
                        buttoncolor="#29ABE2" 
                        color="#fff" 
                        textcolor="#2B2B2B"
                    />
                    </div>
                </div>
            </section>
            <section id='services' className="services">
                <Title title1="Our" title2="Products" underlined color="#2B2B2B" paddingright="10px"/>
                <div className='services__content'>
                    <ImageText image="/images/img3.png" title="E - Commerce Solutions" text="We take care of designing, creating, and managing your e-commerce site. 
                        Keep your site up to date, just send an email and we will do it for you.
                        Put all your energy in growing and creating an amazing business. 
                        "/>
                    <ImageText image="/images/img4.png" title="BOT Solutions" text= {[
                        "We create chatbots powered by Artificial Intelligence (Chat GPT).",
                        "Our AI bots are designed to enhance customer experiences, automate processes, and provide invaluable insights for businesses. Whether it's customer support, personalized recommendations, or streamlining operations.",
                        "Our AI bots are built to deliver unparalleled efficiency and effectiveness."
                    ]}
                    />
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
                <p className='paragraph'>We are proud to serve clients globally with our cutting-edge e-commerce and AI bot solutions. We are committed to delivering top-notch technology that empowers businesses to succeed in the digital era. 
                Join us on this journey of innovation and let's shape the future together.
                </p>
                <Button text="Free trial" backgroundcolor="#29ABE2" colortext="fff"/>
            </div>
            </section>
            <section id='footer' className="footer">
                <Footer />
            </section>

        </div>
    )
}

export default PrincipalPage


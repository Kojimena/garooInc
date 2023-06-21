import React from "react"
import PropTypes from "prop-types"
import "./ServiceIcon.css"

const ServiceIcon = ({ image, title, text, color, textcolor }) => {
    return (
        <div className='serviceicon'>
            <div className='overlay_serviceicon' >
                <img className='image_serviceicon' src={image} alt='service'/>
            </div>
            <h1 className='title_serviceicon' style={{color: color}}>{title}</h1>
            <p className='text_serviceicon' style={{color: textcolor}}>{text}</p>
        </div>
    )
}

ServiceIcon.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    textcolor: PropTypes.string
}

export default ServiceIcon

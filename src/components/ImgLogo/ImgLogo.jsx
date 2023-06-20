import React from "react"
import PropTypes from "prop-types"
import "./ImgLogo.css"

const ImgLogo = ({ image }) => {
    
        return (
            <div className='imglogo'>
                <img className='image_imglogo' src={image} alt='logo'/>
            </div>
        )
    }

ImgLogo.propTypes = {
    image: PropTypes.string.isRequired
}

export default ImgLogo
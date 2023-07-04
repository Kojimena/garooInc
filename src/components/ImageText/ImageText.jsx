import React from "react"
import PropTypes from "prop-types"
import "./ImageText.css"

const ImageText = ({ image, title, text }) => {

    return (
        <div className='imagetext'>
            <img className='image_imgtext' src={image} alt={title}/>
            <div className='overlay_imgtext'>
                <h2 className='title_imgtext'>{title}</h2>
                {(() => {
                if (typeof text === "string") {
                    return <p className='text_imgtext'>{text}</p>
                } else {
                    return text.map((item, index) =>
                        <p key={index} className='text_imgtext'>{item}</p>
                    )
                }
            })()}
            </div>
        </div>
    )
}

ImageText.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default ImageText
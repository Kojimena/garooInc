import React from "react"
import PropTypes from "prop-types"
import "./Textdescbutton.css"
import Button from "../Button/Button"
import Title from "../Title/Title"

const Textdescbutton = ({ title1, title2, paragraph, textbutton, buttoncolor, color, textcolor }) => {
    return (
        <div className='textdescbutton'>
            <Title title1={title1} title2={title2} column color={textcolor}/>
            <p className='paragraph' style={{color: textcolor}}>{paragraph}</p>
            <Button text={textbutton} backgroundcolor={buttoncolor} colortext={color}/>
        </div>
    )
}

Textdescbutton.propTypes = {
    title1: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    textbutton: PropTypes.string.isRequired,
    buttoncolor: PropTypes.string,
    color: PropTypes.string,
    textcolor: PropTypes.string
}

export default Textdescbutton
import React from "react"
import PropTypes from "prop-types"
import "./Title.css"

const Textdescbutton = ({ title1, title2, underlined, column }) => {
    if (underlined) {
        return (
            <div className='titleunderlined'>
                <span className='title1'>{title1}</span>
                <span className='title2'>{title2}</span>
            </div>
        )
    } else if (column) {
        return (
            <div className='titlecolumn'>
                <span className='title1'>{title1}</span>
                <span className='title2'>{title2}</span>
            </div>
        )
    }
}

Textdescbutton.propTypes = {
    title1: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
    underlined: PropTypes.bool,
    column: PropTypes.bool
}

export default Textdescbutton
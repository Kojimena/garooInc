import React from "react"
import PropTypes from "prop-types"
import "./Title.css"

const TitleComponent = ({ title1, title2, underlined, column, color, paddingright, fontsize }) => {
    const style = { color, paddingRight: paddingright, fontSize: fontsize }

    return (
        <div className={underlined ? "titleunderlined" : "titlecolumn"}>
            <span className='title1' style={style}>{title1}</span>
            <span className='title2' style={{fontSize: fontsize}}>{title2}</span>
        </div>
    )
}

TitleComponent.propTypes = {
    title1: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
    underlined: PropTypes.bool,
    column: PropTypes.bool,
    color: PropTypes.string,
    paddingright: PropTypes.string,
    fontsize: PropTypes.string
}

export default TitleComponent

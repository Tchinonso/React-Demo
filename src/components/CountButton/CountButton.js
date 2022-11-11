import React, { useState } from "react"
import "./CountButton.css"

const CountButton = (props) => {
    const [currentCount, setCurrentCount] = useState (0)

    const handleClick = () => {
        setCurrentCount (currentCount + props.incrementBy)
    }
    const divStyle = {
        color: "yellow",
        borderRadius: "10px",
        border: "2px solid purple",
    }
    const buttonStyle = {
        borderRadius: props.borderRadius,
        backgroundColor: props.buttonColor,
        buttonSize: props.buttonSize,
    }

    return (
        <div style={divStyle}>
            <button style={buttonStyle} onClick={handleClick}>+{props.incrementBy}</button>
            <div className={"count-display"}>{currentCount}</div>
        </div>
    )
}

export default CountButton
import React, {useState, useEffect} from "react";

const UseEffectCleanUp = () => {
    const [size, setSize] = useState(window.innerWidth)
    console.log(size)

    const checkSize = () => {
        setSize(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', checkSize)
    })
    return (
        <>
            <h1>window's</h1>
            <h2>{size} px</h2>
        </>
        
    )
}

export default UseEffectCleanUp
import React, {useState} from "react";

const ComplexCounter = () => {

    const [value, setValue] = useState(0)

    const reset = () => {
        setValue(0)
    }

    const ComplexIncrease = () => {
        setTimeout(()=>{
            //setValue(value + 1)
            setValue((prevState)=>{
                return prevState + 1
            })
        },2000)
    }
    
    return (
        <div>
            <section style={{margin: '5rem 0'}}>
                <h3>normal counter</h3>
                <h1>{value}</h1>
                <button onClick={()=>setValue(value - 1)}>decrease</button>
                <button onClick={reset}>reset</button>
                <button onClick={()=>setValue(value + 1)}>increase</button>

            </section>
            <section style={{margin: '5rem 0'}}>
                <h3>Complex counter</h3>
                <h1>{value}</h1>
                
                <button onClick={ComplexIncrease}>increase later</button>

            </section>
        </div>

    )
    
}

export default ComplexCounter
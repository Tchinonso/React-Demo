import React, {useState} from "react";

const Counter = () => {

    const [value, setValue] = useState(0)

    const reset = () => {
        setValue(0)
    }
    
    return (
        <div>
            <section style={{margin: '5rem 0'}}>
                <h3>Normal counter</h3>
                <h1>{value}</h1>
                <button onClick={()=>setValue(value - 1)}>decrease</button>
                <button onClick={reset}>reset</button>
                <button onClick={()=>setValue(value + 1)}>increase</button>

            </section>
        </div>
    )
}

export default Counter
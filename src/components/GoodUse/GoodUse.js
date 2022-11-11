import React, {useState} from "react";


const GoodUse = () => {
    const [text, setText] = useState('Check this out');

    const handleClick = () => {
        if (text === 'Check this out') {
            setText('It changed right?');
        }
        else {
            setText('Check this out');
        }
    };

    return (
        <React.Fragment>
            <h1>{text}</h1>
            <button type="button" onClick={handleClick}>
                change
            </button>
        </React.Fragment>
    );
};

export default GoodUse
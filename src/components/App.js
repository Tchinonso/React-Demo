import React from "react"
import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"
import GoodUse from "./GoodUse/GoodUse"

const App = () => {
    return (
        <div>
            <SearchBar />
            <CountButton incrementBy={1} buttonColor={"red"} borderRadius={'200px'} buttonSize={'15px'} />
            <CountButton incrementBy={2} buttonColor={"blue"} borderRadius={'200px'} />
            <CountButton incrementBy={5} buttonColor={"purple"} borderRadius={'200px'} />
            <CountButton incrementBy={10} buttonColor={"maroon"} borderRadius={'200px'} />
            <GoodUse />
        </div>
    )
}

export default App
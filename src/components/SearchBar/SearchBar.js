import React, { useState } from "react"
import "./SearchBar.css"

const products = [
    "cars plugs",
    "house and home accessories",
    "phones and gadgets",
    "laptops and repairs",
]
const SearchBar = () => {
    const [searchValue, setSearchValue] = useState("")

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const handleClearClick = () => {
        setSearchValue("")
    }

    const shouldDisplayButton = searchValue.length > 0

    const filteredProducts = products.filter((product) => {
        return product.includes(searchValue)
    })

    return (
        <div>
            <input type="text" value={searchValue} onChange={handleInputChange} />
            {shouldDisplayButton&&<button onClick={handleClearClick}>X</button>}

            <ul>
                {filteredProducts.map((product) => {
                    return <li className={"search"} key={product}>{product}</li>
                })}
            </ul>
        </div>
    ) 
}


export default SearchBar
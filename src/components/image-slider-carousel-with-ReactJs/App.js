import React from "react";
import ImageSlider from "./ImageSlider";
import SliderData from "./SliderData";
import './App.css'



const App = () => {
	return (
		<ImageSlider slides={SliderData}/>
	)
}

export default App
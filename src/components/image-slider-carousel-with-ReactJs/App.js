import React from "react";
import ImageSlider from "./ImageSlider";
import SliderData from "./SliderData";
import './App.css'
import { BrowserRouter } from "react-router-dom";



const App = () => {
	return (
	<BrowserRouter>
		<ImageSlider slides={SliderData}/>
	</BrowserRouter>
	)
}

export default App
import React from "react"
import ReactDOM from "react-dom"
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
//import App from "./components/App"
//import "./styles/global.css"
//import App from "./components/GoodUse/App"
//import App from "./components/UseStateArray/App"
//import App from "./components/UseStateCounter/App"
//import App from "./components/UseEffect/App";
// import App from "./components/image-slider-carousel-with-ReactJs/App"
import App from "./components/ReactRoute/App";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>
	
);
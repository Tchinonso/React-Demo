import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom";
import './index.css'
// import App from "./components/App"
// import "./styles/global.css"
// import App from "./components/GoodUse/App"
// import App from "./components/UseStateArray/App"
// import App from "./components/UseStateCounter/App"
// import App from "./components/UseEffect/App";
// import App from "./components/image-slider-carousel-with-ReactJs/App"
// import App from "./components/ReactRoute/App";
// import App from './components/Portfolio/App'
// import GlobalStyles from "./components/Portfolio/styles/GlobalStyle";
// import Typography from './components/Portfolio/styles/Typography'
// import App from "./Komponents/SimpleNavKomponent/App"
import App from "./NewComponent/App";




// ReactDOM.render(
//   <>
//     <GlobalStyles />
//     <Typography />
//     <App />
// 	</>,
// 	document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
   </React.StrictMode>
)
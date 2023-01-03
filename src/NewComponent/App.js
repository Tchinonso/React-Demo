import React from 'react'
import './App.scss'
import { BrowserRouter as Routes, Route} from 'react-router-dom'
import Layout from './Layout/Layout'

const App = () => {
  return (
	<>
	 <Routes>
			  <Route path='/'>
				  <Layout/>
			  </Route>
	 </Routes>
	</>
  )
}

export default App

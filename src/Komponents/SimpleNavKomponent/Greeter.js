import React from 'react'

const Greeter = ({ name, age = 20, happy = 1 }) => {
	function ekel() {
		alert(`hello there ${name}`)
	}
  return (
	<div>
		  <h2>Hi there, i am { name }{'!'.repeat(happy)}</h2>
		  <p>and i am { age } years old</p>
		  {/* <button onClick={()=>alert("Don't Touch")}>Touch</button> */ }
		  <button onClick={ekel}>Touch</button>
	</div>
  )
}

export default Greeter

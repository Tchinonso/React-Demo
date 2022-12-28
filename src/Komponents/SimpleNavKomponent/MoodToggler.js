import React, { useState } from 'react'
import './MoodToggler.css'

const MoodToggler = () => {
	const [happy, setHappy] = useState(true);
  function Toggle() {
    setHappy(!happy);
	}
	const styles = { color: happy ? 'green' :'red'}
  return (
    <div className='mood'>
      <h2 style={styles} onClick={Toggle}>{happy ? ":)" : ":("}</h2>
    </div>
  );
}

export default MoodToggler

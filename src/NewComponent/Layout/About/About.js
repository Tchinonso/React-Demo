import React from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './About.scss'

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e', '.']}
            index={15}
          />
        </h1>
			  <p>
				  I'm very Ambitious Fullstack Javascript developer looking for a role in Established IT company with the opportunity to work with the 
				  latest technologies on challenging and diverse projects.
		</p>
			  <p>
				  I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
		</p>
			  <p>
				  If i need to define myself in one sentence that would be a career driven person, a sport and workout fan,
				  singer and keyboardist, and tech-obsessed!!!.
		</p>
      </div>
    </div>
  )
}

export default About

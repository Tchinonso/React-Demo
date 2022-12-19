import React from 'react'
import socialmediaarrow from './assets/images/social-media-arrow.svg'
import mesnapchat from './assets/me images/mesnapchat.jpg'
import Button from './Button';
import PText from './PText'


const HeroSection = () => {
  return (
	<div>
		  <div className='container'>
			  <h1 className='hero__heading'>
				  <span>Hello, this is </span>
				  <span>Tchinonso Destiny</span>
			  </h1>
			  <div className='hero__img'>
				  <img src={mesnapchat} alt='' />
			  </div>
			  <div className='hero__info'>
				  <PText>
					  I am a Full-stack Web and Javascript Developer, I have few years of experience and i love to code
				  </PText>
				  <Button btnLink='/projects' btnText='See my Work' outline={false} />
			  </div>
			  <div className='hero__social'>
				  <div className='hero__social__indicator'>
					  <p>follow</p>
					  <img src={socialmediaarrow} alt=''/>
				  </div>
			  </div>
	  </div>
	</div>
  )
}

export default HeroSection

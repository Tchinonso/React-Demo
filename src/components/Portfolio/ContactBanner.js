import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import PText from './PText'

const BannerStyles = styled.div`
  padding: 10rem 0;
  .contactBanner__wrapper {
    background: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;

const ContactBanner = () => {
  return (
	<BannerStyles>
		  <div className='container'>
			  <div className='contactBanner__wrapper'>
				  <PText>Have a project in mind?</PText>
				  <h3 className='contactBanner__heading'>I can help you if you let me</h3>
				  <Button btnText='Contact Now' btnLink='/contact' />
			  </div>
	  </div>
	</BannerStyles>
  )
}

export default ContactBanner

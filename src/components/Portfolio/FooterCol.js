import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ColStyles = styled.div`
.heading{
	font-size:2.4rem;
	margin-bottom:2rem;
}
li{
	margin-bottom:1rem;
}
a{
	font-size:1.8rem;
}
`;

const FooterCol = ({
	heading = 'col heading',
	links = [
		{
			type:'Link',
			title:'Home',
			path:'/home'
		},
		{
			type:'Link',
			title:'About',
			path:'/about'
		},
		{
			type:'Link',
			title:'Projects',
			path:'/projects'
		},
		{
			type:'Link',
			title:'Contact',
			path:'/contact'
		},
	]
}) => {
  return (
	<ColStyles>
		  <h1 className='heading'>{ heading }</h1>
		  <ul>
			  { links.map((item, index) => (
				  <li key={ index }>
					  { item.type === 'Link' ? (
						  <Link to={item.path}>{item.title}</Link>
					  ) : (
							  <a href={item.path} target='_blank' rel='noreferrer'>{item.title}</a>
					  )}
				  </li>
			  ))}
		  </ul>
	</ColStyles>
  )
}

export default FooterCol
// the pages is link from react router dom and 
// the social medias is link from a
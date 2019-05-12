import React from 'react';

const Img = props =>
	<li>
		<a target="_blank" href={props.link}>
			<img src={props.url} alt="Unsplash Image here" />
	       </a>
   		<p>
			Photo by
			<a target="_blank" href={props.user}>@{props.name}</a>
            <a target="_blank" href={props.dload}>Download the photo here</a>
        </p>
	</li> 
export default Img;
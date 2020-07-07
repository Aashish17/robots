
 import React from 'react';

const Card=({Name ,email,id})=>{

	return(

	<div className='bg-washed-red tc br3 pa10 ma2  link black dim db mw5 pa3 ba b--black-10 shadow-1 dib'>
	<img alt="robot" src= {`https://robohash.org/k${id}ahdk`}/>
	<div>
		<h2>{Name }</h2>
		<p>{email}</p>
	</div>
	</div>

		)
}

export default Card;  
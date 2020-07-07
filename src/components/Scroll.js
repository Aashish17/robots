import React from 'react'


const Scroll=(props)=>{
	return(
		<div style={{overflow :'scroll' ,border:'5px solid black',height : '550px' }}>
		{props.children}
		</div>
		)
}

export default Scroll 
import React from 'react';
import Card from './Card'


 const Cardlist=({robots})=>{
 	const component=robots.map((a,i)=>
 	{
 		return <Card key={i} id={robots[i].id} Name={robots[i].name} username={robots[i].username} email={robots[i].email } />
 	}
 	)
 	
	return(
		<div>
			{component}
			
			</div>
		)
}

export default Cardlist;
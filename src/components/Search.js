import React from 'react'

const Search=({ searchchange})=>{

	return(
		<div >

			<input type='search' className=" shadow-5 pa3 ba b--blue  bg-lightest-blue" 
			 placeholder=' Search Robots'
			 onChange={searchchange}/>
		
		</div>
		)
}

export default Search;
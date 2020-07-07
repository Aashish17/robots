import React from 'react';
import Cardlist from'../components/Cardlist'
import Search from '../components/Search'
import Scroll from '../components/Scroll'
// import Errorboundary from '../components/Errorboundary'
 


import './App.css'


class  App extends React.Component{
	constructor(){
	super()
	this.state={
	robots :[],
	searchfield:''

	}
}

componentDidMount(){

	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response=>  response.json()).then(user=>{
		this.setState({robots:user})
	})
}
onsearchchange=(event)=>
{
	this.setState({searchfield: event.target.value})
	
	
}

	render()
	{
		const {robots, searchfield}= this.state;

		const filterrobots=robots.filter((robot)=>{

		return robot.name.toLowerCase().includes(searchfield.toLowerCase())
	})
		
		if(robots.length===0)
		{
			return <h1 class="a">LOADING</h1>
		}
		else
		{		
			return (
			<div className="tc">
				<h1>ROBOFRIENDS</h1>
				<Search searchchange={this.onsearchchange}/>
				<Scroll>
					
					<Cardlist robots={filterrobots} />
					
				</Scroll>
		
			</div>
			)
		}
		
	}
}

	


export default App;
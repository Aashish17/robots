import React from 'react';
import Cardlist from'../components/Cardlist'
import Search from '../components/Search'
import Scroll from '../components/Scroll'
// import Errorboundary from '../components/Errorboundary'
import {setSearchfield , dorequestRobots} from '../actions'
import './App.css'
import {connect} from 'react-redux'



const mapStatetoProps=(state)=>{
	return {

		searchfield: state.Searchrobots.searchfield,
		robots : state.requestRobots.robots,
		error : state.requestRobots.error,
		ispending : state.requestRobots.ispending,
	}
}  

const mapDispatchtoProps=(dispatch)=>{

	return {

		onsearchchange:(event)=>dispatch(setSearchfield(event.target.value)),
		onRequestrobots :()=>dorequestRobots(dispatch)
	}
}


class  App extends React.Component{
	
componentDidMount(){
		this.props.onRequestrobots();
	}
	

 

	render()
	{
		
		const {searchfield , onsearchchange,robots , ispending}= this.props;

		const filterrobots=robots.filter((robot)=>{

		return robot.name.toLowerCase().includes(searchfield.toLowerCase())
	})
		
		if(ispending)
		{
			return <h1 className="a">LOADING</h1>
		}
		else
		{		
			return ( 
			<div className="tc">
				<h1>ROBOFRIENDS</h1>
				<Search searchchange={onsearchchange}/>
				<Scroll>
					
					<Cardlist robots={filterrobots} />
									
				</Scroll>
		
			</div>
			)
		}
		
	}
}

	


export default connect(mapStatetoProps , mapDispatchtoProps)(App);
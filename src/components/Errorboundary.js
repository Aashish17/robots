import React from 'react'


class Errorboundary extends React.component{

	constructor(props)
	{
		super(props)
		this.state={

			hasError: false


		}
	}

	componentDidCatch(error,info)
	{
		this.setState({hasError:true})
	}

	render()
	{
		if(this.state.hasError){

			return <h1>OOPS</h1>
		} 
		return this.props.children
	}
}

export default Errorboundary;
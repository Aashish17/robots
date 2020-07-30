import {CHANGE_SEARCH_FIELD} from './constants.js'
import {REQUEST_ROBOTS_PENDING,REQUEST_ROBOTS_SUCCESS,REQUEST_ROBOTS_FAILED} from './constants.js'


const initialstate=
{
	searchfield :''
}
const intialstaterobots={

	ispending :false,
	robots :[],
	error :''
	
}

export const Searchrobots=(state=initialstate,action={})=>{

	switch(action.type)
	{
		case  CHANGE_SEARCH_FIELD :
			return Object.assign({},state,{searchfield: action.payload});

		default :
			return state;	
	}
}

export const requestRobots=(state=intialstaterobots , action={})=>{

	switch(action.type)
	{

		case REQUEST_ROBOTS_PENDING :
			return Object.assign({},state, {ispending :true} )

		case REQUEST_ROBOTS_SUCCESS :
				return Object.assign({}, state,{robots : action.payload, ispending :false})	

		case REQUEST_ROBOTS_FAILED :
			return Object.assign({}, state ,{error : action.payload , ispending : true })	

		default:
		 return state;			
	}
}


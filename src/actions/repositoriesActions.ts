import axios from 'axios';
import {ActionType, Action} from './types';
import {Dispatch} from 'redux'

const searchRepositories = (term: string) => {
return async (dispatch : Dispatch<Action>) => {
    dispatch({
        type: ActionType.SEARCH_REPOSITORIES
    })
    try{
        const {data} = await axios.get(`http://registry.npmjs.org/-/v1/search?text=${term}`)
        const names = data.objects.map((result : any) => {
            return result.package.name
        } )
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
            payload: names
        })
    }catch(err){
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES_ERROR,
            payload: err.message
        })
    }
}
}
import { ActionsT, ActionType, RepositoriesState } from "./types";

export const reducer = (state: RepositoriesState, action:ActionsT): RepositoriesState =>{
switch(action.type){
    case ActionType.search_repositories:
        return {loading: true, error: null, data: []}
    case ActionType.search_repositories_success:
        return {loading: false, error: null, data: action.payload}
    case ActionType.search_repositories_error:
        return {loading: false, error: action.payload, data: []}
    default:
        return state;
}
}
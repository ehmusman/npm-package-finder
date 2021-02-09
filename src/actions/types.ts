export interface RepositoriesState {
    loading: boolean;
    error: string | null ;
    data: string[];
}
export enum ActionType { 
    SEARCH_REPOSITORIES,
    SEARCH_REPOSITORIES_ERROR, 
    SEARCH_REPOSITORIES_SUCCESS}

export type Actions   = ActionType.SEARCH_REPOSITORIES | ActionType.SEARCH_REPOSITORIES_ERROR | ActionType.SEARCH_REPOSITORIES_SUCCESS

export interface searchRepositoriesAction {
    type: ActionType.SEARCH_REPOSITORIES
}

export interface searchRepositoriesSuccessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
    payload: string[]
}
export interface searchRepositoriesErrorAction {
    type: ActionType.SEARCH_REPOSITORIES_ERROR,
    payload: string
}
export type Action = searchRepositoriesAction | searchRepositoriesErrorAction | searchRepositoriesSuccessAction


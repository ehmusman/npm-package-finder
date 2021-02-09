export interface RepositoriesState {
    loading: boolean;
    error: string | null ;
    data: string[];
}
export enum ActionType { search_repositories,search_repositories_error, search_repositories_success}

export type Actions   = ActionType.search_repositories | ActionType.search_repositories_error | ActionType.search_repositories_success

export interface searchRepositoriesAction {
    type: ActionType.search_repositories
}

export interface searchRepositoriesSuccessAction {
    type: ActionType.search_repositories_success,
    payload: string[]
}
export interface searchRepositoriesErrorAction {
    type: ActionType.search_repositories_error,
    payload: string
}
export type ActionsT = searchRepositoriesAction | searchRepositoriesErrorAction | searchRepositoriesSuccessAction


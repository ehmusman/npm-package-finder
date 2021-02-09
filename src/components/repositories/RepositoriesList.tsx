import React, { FormEvent, useState } from 'react'
import {useDispatch} from 'react-redux'
import {searchRepositories} from '../../actions/repositoriesActions'
import { useSelector } from '../../hooks/useTypedSelector'
const RepositoriesList : React.FC = () => {
    const [term, setTerm] = useState<string>('')
    const {loading, error, data} = useSelector(state => state.repositories)
    const dispatch = useDispatch()
    const handleOnSubmit = (event : FormEvent<HTMLFormElement>) =>{
        event.preventDefault(); 
        dispatch(searchRepositories(term))
    }
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type="text" value={term} onChange={e => setTerm(e.target.value)}/>
                <button type='submit'>Search List</button>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            <ol>
            {!error && !loading && data.map((name) => <li key={name}>{name}</li>)}
            </ol>
        </div>
    )
}

export default RepositoriesList

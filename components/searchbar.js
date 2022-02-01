// goal is to redirect to /movies route
// which is file index.js in movies folder
// sending the contents of searchParam to that route
// google redirect to route, sending parameter. next.js
import {useState} from 'react'
import {useRouter} from 'next/router'

function SearchBar(){
    const [searchParam, setSearchParam] = useState('')
    const router = useRouter()
    
    const handleClick = (e) => {
        e.preventDefault()
        router.push(`/movies?query=${searchParam}`)
    }   
    
    return (
        <form className="d-flex">
            <input
                className="form-control me-2"
                type="search"
                placeholder="Search" 
                aria-label="Search"
                onChange={(e)=>{setSearchParam(e.target.value)}}
                value={searchParam}/>
            <button
                className="btn btn-outline-success"
                onClick={handleClick}>Search</button>
        </form>
    )
}

export default SearchBar
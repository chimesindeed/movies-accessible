import {useState} from 'react'

function SearchBar(){
    
    const [searchParam, setSearchParam] = useState('')
    
    function handleClick(e){
        e.preventDefault()
        console.log(searchParam)
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
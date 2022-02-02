
function Movie({poster, name}){

    return (
        <li>
            <img src={poster}/>
            <h2>{name}</h2>
        </li>
    )
}
export default Movie
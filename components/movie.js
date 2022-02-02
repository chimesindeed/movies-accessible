import {useRouter} from 'next/router'

function Movie({poster, name, id}){

    const router = useRouter();

    function handleClick(){
        router.push({
            pathname: `/movies/${id}`,
            query: {poster: poster, name: name}
        })
    }
    return (
        <li onDoubleClick={handleClick}>
            <img src={poster}/>
            <h2>{name}</h2>
        </li>
    )
}
export default Movie
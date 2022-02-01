import { useContext } from 'react'
import ApiData from '../../context'

function Movies({movies}){

    const [apiData, setApiData] = useContext(ApiData)
    return (<h1>Movies</h1>)
}
export default Movies


export async function getServerSideProps(context){
    console.log(context.query.query)
    console.log(process.env.API_HOST)
    const response = await fetch("https://imdb8.p.rapidapi.com/auto-complete?q=" + context.query.query, {
        "method": "GET",
        "headers": {
                "x-rapidapi-host": process.env.API_HOST,
                "x-rapidapi-key": process.env.API_KEY
        }
    })
    const data = await response.json()
    
    return {
        props: {
            movies: data
        }
    }
}
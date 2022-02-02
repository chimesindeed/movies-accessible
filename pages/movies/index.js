import styles from './movies.module.css'
import ApiData from '../../context'
import Movie from '../../components/movie'

function Movies({movies}){
    const list = movies.d
    return (

        <div id="movies" className={styles.movies}>
            {
                list.map(item => {
                    try {
                        const name = item.l;
                        const poster = item.i.imageUrl;
                        return (
                            <Movie
                                key = {item.id}
                                id = {item.id}
                                name = {name}
                                poster = {poster}
                            />
                        )
                    } catch(e){console.log(e)}
                })
            }
        </div>
        )
}
export default Movies

export async function getServerSideProps(context){
    const response = await fetch("https://imdb8.p.rapidapi.com/auto-complete?q=" + context.query.query, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": process.env.API_HOST,
            "x-rapidapi-key": process.env.API_KEY
        }
    })
    
        const data = await response.json()
        context.query.query = null
        return {
            props: {
                movies: data
            }
        }    
    }
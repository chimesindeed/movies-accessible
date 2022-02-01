import styles from './movies.module.css'
import {useRouter} from 'next/router'
import ApiData from '../../context'

function Movies({movies}){
    const router = useRouter();
    
    const list = movies.d
    return (

        <div id="movies" className={styles.movies}>
            {
                list.map(item => {
                    const name = item.l;
                    const poster = item.i.imageUrl;
                    return (
                        <li key={item.id}>
                            <img src={poster}/>
                            <h2>{name}</h2>
                        </li>
                    )
                })
            }
        </div>
        )
}
export default Movies

export async function getServerSideProps(context){
    if (context.query.query){ 
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
}
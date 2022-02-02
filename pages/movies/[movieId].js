import styles from './movies.module.css'
import {useRouter} from 'next/router'

function Movie(){
    const router = useRouter();
    
    console.log(router.query.name)
    
    return (
        <div className={styles.movie}>
            <h2>{router.query.name}</h2>
            <img src={router.query.poster}/>
        </div>

    )

}

export default Movie
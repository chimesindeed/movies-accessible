<<<<<<< HEAD
import styles from './movies.module.css'
=======
>>>>>>> 6205366619be416997d94f76f1dc97366f696eb8
import {useRouter} from 'next/router'

function Movie(){
    const router = useRouter();
    
    console.log(router.query.name)
<<<<<<< HEAD
    return (
        <div className={styles.movie}>
            <h2>{router.query.name}</h2>
            <img src={router.query.poster}/>
        </div>
        )
=======
    return <h1>hello</h1>
>>>>>>> 6205366619be416997d94f76f1dc97366f696eb8
}

export default Movie
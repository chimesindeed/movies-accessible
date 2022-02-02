import {useRouter} from 'next/router'

function Movie(){
    const router = useRouter();
    
    console.log(router.query.name)
    return <h1>hello</h1>
}

export default Movie
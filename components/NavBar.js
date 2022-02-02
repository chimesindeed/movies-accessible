import Link from 'next/link'
import SearchBar from './searchbar'

function NavBar(){
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container-fluid">
               
                <a className="navbar-brand" href="#">Movies</a>
               
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href='/about'>
                                <a className="nav-link">About</a>
                            </Link>
                        </li>
                    </ul>

                    <SearchBar />
                </div>
            </div>
        </nav>
    )
}
export default NavBar

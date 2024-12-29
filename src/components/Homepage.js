import Movies from './../images/movie.jpg'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return(
        <div className="text-center ">
            <h2> Find a movie to watch </h2>
            <hr/>
            <Link to="/movies">
            <img  src={Movies} class="w-50 w-md-45 w-lg-25" alt="movies image"/>
            </Link>
            

        </div>
    )
}

export default Homepage
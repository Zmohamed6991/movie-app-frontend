import Movies from './../images/movie.jpg'

const Homepage = () => {
    return(
        <div className="text-center">
            <hr/>
            <h2> Find a movie to watch </h2>
            <hr/>
            <img  src={Movies} class="w-50 w-md-45 w-lg-25" alt="movies image"/>

        </div>
    )
}

export default Homepage
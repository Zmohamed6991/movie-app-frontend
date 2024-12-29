import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


const Movie = () => {
    const [movie, setMovie]= useState([]);

    let { id } = useParams();

    useEffect(() => {
        let myMovie = {
                id: 1,
                title: "Think Like a Man",
                release_date: "22-06-2012",
                runtime: 116,
                rating: "15",
                description:"Will be here"
           }
           
           setMovie(myMovie);
    }, [id])


    return(
        <div className="text-center">
            <h2> Movie: {movie.title} </h2>
            <p><em>{movie.release_date}, {movie.runtime} minutes, Rated {movie.rating}</em></p>
            <hr/>
            <p> {movie.description}</p>
        </div>
    )
}

export default Movie
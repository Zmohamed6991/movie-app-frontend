import { useEffect, useState } from "react"
import { Link } from "react-router-dom";



const Movies = () => {

    const [movies, setMovies] = useState([]);

    useEffect( () => {
        let movieList = [
            {
                id: 1,
                title: "Think Like a Man",
                release_date: "22-06-2012",
                runtime: 116,
                rating: "15",
                description:"Will be here"
            },
            {
                id: 2,
                title: "Big Momma's House",
                release_date: "22-06-2000",
                runtime: 116,
                rating: "15",
                description:"Will be here"
            }
        ];

        setMovies(movieList)
       
    }, []);

    return(
        <div className="text-center">
            <h2> Choose a movie to watch </h2>
            <hr/>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Movie Title</th>
                        <th>Release Date</th>
                        <th>Rating</th>
                        <th>Runtime</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((m) => (
                        <tr key={m.id}>
                            <td>
                                <Link to={`/movies/${m.id}`}>
                                {m.title}                                
                                </Link>
                            </td>

                            <td>{m.release_date}</td>
                            <td>{m.rating}</td>
                            <td>{m.runtime}</td>
                        </tr>

                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default Movies
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";



const Movies = () => {

    const [movies, setMovies] = useState([]);

    useEffect( () => {
        const headers = new Header();
            headers.append("Content-type", "application/json");

            const requestedOptions = {
                method: "GET",
                headers: headers,
            }

            fetch(`http://localhost:8080/movies`,  requestedOptions)
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error(error));
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
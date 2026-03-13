import MovieCard from '../components/MovieCard'
import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { getPopularMovies, searchMovies } from '../services/api'
import '../css/Home.css'

function Home() {
    const [movies, setMovies] = useState([]);
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        if (query) {
            searchMovies(query).then((data) => {
                setMovies(data);
                setLoading(false);
            });
        }
        else {
            getPopularMovies().then((data) => {
                setMovies(data.results);
                setLoading(false);
            });
        }
    }, [query])

    return (
        <>
            <main className="main-container">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    movies.map((movie: any) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                )}
            </main>
        </>
    )
}
export default Home;
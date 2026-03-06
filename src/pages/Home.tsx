import NavBar from '../components/NavBar'
import MovieCard from '../components/MovieCard'
import { useState, useEffect } from "react"
import { getPopularMovies } from '../services/api'
import '../css/Home.css'

function Home() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getPopularMovies().then((data) => {
            setMovies(data.results);
        });
    }, []);
    return (
        <>
            <NavBar />
            <main className="main-container">
                {movies.map((movie: any) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </main>
        </>
    )
}
export default Home;
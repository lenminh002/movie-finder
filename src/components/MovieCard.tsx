import "../css/MovieCard.css"

interface MovieProps {
    id: number;
    title: string;
    description: string;
    release_date: string;
    poster_path: string;
}



function MovieCard({ movie }: { movie: MovieProps }) {
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
                <p>{movie.release_date}</p>
            </div>
        </div>
    )
}

export default MovieCard
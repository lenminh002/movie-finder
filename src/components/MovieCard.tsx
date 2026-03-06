import "../css/MovieCard.css"

interface MovieProps {
    id: number;
    title: string;
    description: string;
    releaseDate: string;
    posterPath: string;
}



function MovieCard(movie: MovieProps) {
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`} alt={movie.title} />
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
                <p>{movie.releaseDate}</p>
            </div>
        </div>
    )
}

export default MovieCard
import NavBar from '../components/NavBar'
import MovieCard from '../components/MovieCard'
import '../css/Home.css'

function Home() {
    return (
        <>
            <NavBar />
            <main className="main-container">
                <MovieCard id={1} title="Movie 1" description="Description 1" releaseDate="2022-01-01" posterPath="https://image.tmdb.org/t/p/w500/1.jpg" />
                <MovieCard id={2} title="Movie 2" description="Description 2" releaseDate="2022-01-02" posterPath="https://image.tmdb.org/t/p/w500/2.jpg" />
                <MovieCard id={3} title="Movie 3" description="Description 3" releaseDate="2022-01-03" posterPath="https://image.tmdb.org/t/p/w500/3.jpg" />
                <MovieCard id={4} title="Movie 4" description="Description 4" releaseDate="2022-01-04" posterPath="https://image.tmdb.org/t/p/w500/4.jpg" />
                <MovieCard id={5} title="Movie 5" description="Description 5" releaseDate="2022-01-05" posterPath="https://image.tmdb.org/t/p/w500/5.jpg" />
                <MovieCard id={6} title="Movie 6" description="Description 6" releaseDate="2022-01-06" posterPath="https://image.tmdb.org/t/p/w500/6.jpg" />
                <MovieCard id={7} title="Movie 7" description="Description 7" releaseDate="2022-01-07" posterPath="https://image.tmdb.org/t/p/w500/7.jpg" />
                <MovieCard id={8} title="Movie 8" description="Description 8" releaseDate="2022-01-08" posterPath="https://image.tmdb.org/t/p/w500/8.jpg" />
                <MovieCard id={9} title="Movie 9" description="Description 9" releaseDate="2022-01-09" posterPath="https://image.tmdb.org/t/p/w500/9.jpg" />
                <MovieCard id={10} title="Movie 10" description="Description 10" releaseDate="2022-01-10" posterPath="https://image.tmdb.org/t/p/w500/10.jpg" />
                <MovieCard id={11} title="Movie 11" description="Description 11" releaseDate="2022-01-11" posterPath="https://image.tmdb.org/t/p/w500/11.jpg" />
                <MovieCard id={12} title="Movie 12" description="Description 12" releaseDate="2022-01-12" posterPath="https://image.tmdb.org/t/p/w500/12.jpg" />
                <MovieCard id={13} title="Movie 13" description="Description 13" releaseDate="2022-01-13" posterPath="https://image.tmdb.org/t/p/w500/13.jpg" />
                <MovieCard id={14} title="Movie 14" description="Description 14" releaseDate="2022-01-14" posterPath="https://image.tmdb.org/t/p/w500/14.jpg" />
                <MovieCard id={15} title="Movie 15" description="Description 15" releaseDate="2022-01-15" posterPath="https://image.tmdb.org/t/p/w500/15.jpg" />
                <MovieCard id={16} title="Movie 16" description="Description 16" releaseDate="2022-01-16" posterPath="https://image.tmdb.org/t/p/w500/16.jpg" />
                <MovieCard id={17} title="Movie 17" description="Description 17" releaseDate="2022-01-17" posterPath="https://image.tmdb.org/t/p/w500/17.jpg" />
                <MovieCard id={18} title="Movie 18" description="Description 18" releaseDate="2022-01-18" posterPath="https://image.tmdb.org/t/p/w500/18.jpg" />
                <MovieCard id={19} title="Movie 19" description="Description 19" releaseDate="2022-01-19" posterPath="https://image.tmdb.org/t/p/w500/19.jpg" />
                <MovieCard id={20} title="Movie 20" description="Description 20" releaseDate="2022-01-20" posterPath="https://image.tmdb.org/t/p/w500/20.jpg" />
            </main>
        </>
    )
}
export default Home;
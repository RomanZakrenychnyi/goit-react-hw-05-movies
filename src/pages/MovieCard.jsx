import { getMovieFullInfo } from 'Service/API';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import style from './MovieCard.module.css';

const MovieCard = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const movieFetch = async () => {
      const movieInfo = await getMovieFullInfo(movieId);
      setMovie(movieInfo);
    };
    movieFetch();
  }, [movieId]);

  const savedLocation = useRef(location.state?.from);

  const { title, poster_path, overview, genres, vote_average } = movie;
  return (
    <>
      <button className={style.btn}>
        <Link to={savedLocation.current ?? '/'}>&larr; Go back</Link>
      </button>
      <div className={style.container}>
        <div>
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
        </div>
        <div>
          <h1>{title}</h1>
          <p>User Score: {Math.round(vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres?.map(el => el.name)}</p>
        </div>
      </div>
      <div className={style.info}>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Review</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieCard;
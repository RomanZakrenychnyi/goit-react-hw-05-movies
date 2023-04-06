import { Link } from 'react-router-dom';
import { getTrandingMoviesPerDay } from '../../Service/API';
import { useEffect, useState } from 'react';

export const TrandingList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const awaiting = async () => {
      const tradingList = await getTrandingMoviesPerDay();
      setMovies(tradingList);
    };
    awaiting();
  }, []);

  return (
    <ul>
      {movies?.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${+id}`}>{title}</Link> 
          </li>
        );
      })}
    </ul>
  );
};

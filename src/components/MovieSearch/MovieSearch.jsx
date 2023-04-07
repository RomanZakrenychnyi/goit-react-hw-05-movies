import { useEffect, useState } from 'react';
import { searchMovieByName } from '../../Service/API';
import style from './MovieSearch.module.css';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

export const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query !== null) {
      const fetchQuery = async () => {
        const result = await searchMovieByName(query);
        setMovies(result);
      }
      fetchQuery();
    }
    return;
  }, [query, searchParams])

  const handleSearchFilms = async event => {
    event.preventDefault();

    const inputSearch = event.target.children.input.value;
    const result = await searchMovieByName(inputSearch);
    setSearchParams({ query: inputSearch });
    setMovies(result);
    event.target.children.input.value = '';
  };

  return (
    <>
      <form className={style.form} action="" onSubmit={handleSearchFilms}>
        <input name="input" type="text" />
        <button>Search</button>
      </form>
      {movies.length > 0 ? (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        ''
      )}
    </>
  );
};

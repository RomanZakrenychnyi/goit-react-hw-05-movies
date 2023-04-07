import { getMovieActorsDetail } from 'Service/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './MovieCast.module.css';

const MovieCast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const actorsFetch = async () => {
      const movieCast = await getMovieActorsDetail(movieId);
      setActors(movieCast);
    };
    actorsFetch();
  }, [movieId]);


  return (
    <ul>
      {actors.map(({ name, character, profile_path, id }) => {
        return (
          <li key={id}>
            <img className={style.imgActor}
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt=""
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieCast;
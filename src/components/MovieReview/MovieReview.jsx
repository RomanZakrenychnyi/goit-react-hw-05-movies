import { getMovieReviews } from 'Service/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './MovieReview.module.css';

const MovieReview = () => {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const actorsFetch = async () => {
      const movieCast = await getMovieReviews(movieId);
      setReview(movieCast);
    };
    actorsFetch();
  }, [movieId]);

  return (
    <>
      {review.length > 0 ? (
        review.map(({ id, author, content }) => {
          return (
            <dl key={id}>
              <dt>
                <b>Author: {author}</b>
              </dt>
              <dd className={style.descrElement}>{content}</dd>
            </dl>
          );
        })
      ) : (
        <p>We dont have any reviews for this film</p>
      )}
    </>
  );
};

export default MovieReview;
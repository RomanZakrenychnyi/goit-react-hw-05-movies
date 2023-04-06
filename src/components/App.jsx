import { HomePage } from 'pages/HomePage';
import { MovieCard } from 'pages/MovieCard';
import { Route, Routes } from 'react-router-dom';
import { MovieCast } from './MovieCast/MovieCast';
import { MovieReview } from './MovieReview/MovieReview';
import { MoviePage } from 'pages/MoviePage';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:movieId" element={<MovieCard />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReview />} />
        </Route>
        <Route path="/movies" element={<MoviePage />} />
      </Routes>
    </div>
  );
};

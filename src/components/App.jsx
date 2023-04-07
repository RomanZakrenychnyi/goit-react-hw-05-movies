import { HomePage } from 'pages/HomePage';
import { MovieCard } from 'pages/MovieCard';
import { NavLink, Route, Routes } from 'react-router-dom';
import { MovieCast } from './MovieCast/MovieCast';
import { MovieReview } from './MovieReview/MovieReview';
import { MoviePage } from 'pages/MoviePage';
import { NotFound } from 'pages/NotFound';

export const App = () => {
  return (
    <div>
      <header>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/movies'>Movies</NavLink>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:movieId" element={<MovieCard />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReview />} />
        </Route>
        <Route path="/movies" element={<MoviePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

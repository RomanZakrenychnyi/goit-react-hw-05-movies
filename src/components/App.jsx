import { NavLink, Route, Routes } from 'react-router-dom';
import style from '../components/App.module.css';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('../pages/HomePage'));
const MovieCard = lazy(() => import('../pages/MovieCard'));
const MoviePage = lazy(() => import('../pages/MoviePage'));
const NotFound = lazy(() => import('../pages/NotFound'));
const MovieCast = lazy(() => import('./MovieCast/MovieCast'));
const MovieReview = lazy(() => import('./MovieReview/MovieReview'))

export const App = () => {
  return (
    <div>
      <div className={style.container}>
        <NavLink to="/" className={style.nav}>
          Home
        </NavLink>
        <NavLink to="/movies" className={style.nav}>
          Movies
        </NavLink>
      </div>
      <Suspense fallback={<p>...Loading</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:movieId" element={<MovieCard />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReview />} />
          </Route>
          <Route path="/movies" element={<MoviePage />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

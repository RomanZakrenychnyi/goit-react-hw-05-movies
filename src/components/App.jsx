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
      <Suspense fallback={<p>...Loading</p>}></Suspense>
        <Routes>
          <Route path="/" element={<Suspense fallback={<p>...Loading</p>}><HomePage /></Suspense>} />
          <Route path="/movies/:movieId" element={<Suspense fallback={<p>...Loading</p>}><MovieCard /></Suspense>}>
            <Route path="cast" element={<Suspense fallback={<p>...Loading</p>}><MovieCast /></Suspense>} />
            <Route path="reviews" element={<Suspense fallback={<p>...Loading</p>}><MovieReview /></Suspense>} />
          </Route>
          <Route path="/movies" element={<Suspense fallback={<p>...Loading</p>}><MoviePage /></Suspense>}></Route>
          <Route path="*" element={<Suspense fallback={<p>...Loading</p>}><NotFound /></Suspense>} />
        </Routes>
      
    </div>
  );
};

import axios from 'axios';
import { toast } from "react-toastify";


axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'a78f00a7379230bfb7a39dfb77750ae2';

export const getTrandingMoviesPerDay = async () => {
  try {
      const promise = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
      return promise.data.results
  } catch (error) {
      toast('Movie not found');
  }
};

export const searchMovieByName = async (id) => {
  try {
    const promise = await axios.get(`/search/movie?query=${id}&api_key=${API_KEY}`);
    console.log(promise.data.results);
      return promise.data.results
  } catch (error) {
      toast('Movie not found');
  }
};

export const getMovieFullInfo = async (id) => {
  try {
    const promise = await axios.get(`movie/${id}?api_key=${API_KEY}`);
      return promise.data
  } catch (error) {
      toast('Sorry, no info');
  }
};

export const getMovieActorsDetail = async (id) => {
  try {
      const promise = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
      return promise.data.cast
  } catch (error) {
      toast('Sorry, no info');
  }
};

export const getMovieReviews = async (id) => {
  try {
      const promise = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
      return promise.data.results
  } catch (error) {
      toast('Sorry, no info');
  }
};
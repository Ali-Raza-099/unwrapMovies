import axios from "axios";

const apiURL = "https://api.themoviedb.org/3";
const apiKey = "api_key=57fb61b462152bba2a90e862bda0fbeb";
// Get popular movies
export const getPopularMovies = async () => {
  const resp = await axios.get(`${apiURL}/movie/popular?${apiKey}`);
  return resp.data.results;
};
// Get upcoming movies
export const getUpcomingMovies = async () => {
  const resp = await axios.get(`${apiURL}/movie/upcoming?${apiKey}`);
  return resp.data.results;
};
//Get popular Tv
export const getPopularTv = async () => {
  const resp = await axios.get(`${apiURL}/tv/popular?${apiKey}`);
  return resp.data.results;
};
// Get Family Movies
export const getFamilyMovies = async () => {
  const resp = await axios.get(
    `${apiURL}/discover/movie?${apiKey}&with_genres=10751`
  );
  return resp.data.results;
};

// Get Documnetary Movies
export const getDocumentaryMovies = async () => {
  const resp = await axios.get(
    `${apiURL}/discover/movie?${apiKey}&with_genres=99`
  );
  return resp.data.results;
};

export const getMovieDetail = async (movie_id) => {
  const resp = await axios.get(
    `${apiURL}/movie/${movie_id}?${apiKey}`
  );
  return resp.data;
};

export const searchMovieTv = async (query, type) => {
  const resp = await axios.get(
    `${apiURL}/search/${type}?${apiKey}&query=${query}`,
  );
  return resp.data.results;
};
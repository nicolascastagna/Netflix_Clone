export const API_KEY = process.env.NEXT_PUBLIC_MOVIE_API_KEY;
export const BASE_URL = "https://api.themoviedb.org/3/";

export const fetchTrending = async () => {
  const res = await fetch(
    `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=fr-FR`
  );
  const data = await res.json();
  return data.results;
};
export const fetchTopRated = async () => {
  const res = await fetch(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=fr-FR`
  );
  const data = await res.json();
  return data.results;
};
export const fetchNetflixOriginals = async () => {
  const res = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_networks=213`
  );
  const data = await res.json();
  return data.results;
};
export const fetchFamily = async () => {
  const res = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=10751`
  );
  const data = await res.json();
  return data.results;
};
export const fetchMovie = async (id: string) => {
  const res = await fetch(
    `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=fr-FR`
  );
  const data = await res.json();
  return data.results;
};

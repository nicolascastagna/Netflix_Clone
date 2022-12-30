export const API_KEY = process.env.NEXT_PUBLIC_MOVIE_API_KEY;
export const BASE_URL = "https://api.themoviedb.org/3/";

export const fetchTrending = async () => {
  const res = await fetch(
    `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=fr-FR`
  );
  const data = await res.json();
  return data.results;
};

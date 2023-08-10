export const TRENDING_URL = `https://api.themoviedb.org/3/trending/all/day?language=en-US?api_key=${import.meta.env.VITE_API_KEY}`
export const MOVIES_URL = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`
export const TV_SERIES_URL = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc'

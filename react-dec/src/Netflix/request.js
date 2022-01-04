const API_KEY="6b691c341d2d60c77826bf032ca8d4a4";

const requests={

    fetchTrending:`/trending/all/week?api_key=${API_KEY}&Language=en-us`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`movie/top_rated?api_key=${API_KEY}&Language=en-us`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchcomdeyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentraries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}
export default requests
///trending/all/week?api_key=$6b691c341d2d60c77826bf032ca8d4a4&Language=en-us
///discover/tv?api_key=6b691c341d2d60c77826bf032ca8d4a4&with_networks=213
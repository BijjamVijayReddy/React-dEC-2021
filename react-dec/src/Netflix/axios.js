import axios from"axios";

const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3"
})
export default instance;
//https://api.themoviedb.org/3/discover/tv?api_key=6b691c341d2d60c77826bf032ca8d4a4&with_networks=213
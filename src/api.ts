const API_KEY = "778d39aaf8c2143365c243aeff8ca00f";
const BASE_PATH ="https://api.themoviedb.org/3";

export interface IGetMoviesResult {
    
}
export function getMovies(){
    return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
        (response) => response.json()
    );
}
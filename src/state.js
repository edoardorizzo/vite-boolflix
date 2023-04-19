import axios from 'axios';
import { reactive } from 'vue';

export const state = reactive({
    searchText: '',
    movies: [],
    URL_API: 'https://api.themoviedb.org/3/search/movie?api_key=d94700216696537359e360c15ede3654&query=',
    callApi(url) {
        axios
            .get(url)
            .then((response) => {
                console.log(response);
                this.movies = response.data.results
            })
            .catch((error) => {
                console.log(error);
            });
    },
}) 
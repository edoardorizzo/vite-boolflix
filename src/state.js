import axios from 'axios';
import { reactive } from 'vue';

export const state = reactive({
    searchText: '',
    movies: null,
    coverUrl: "https://image.tmdb.org/t/p/w342",
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
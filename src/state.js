import axios from 'axios';
import { reactive } from 'vue';

export const state = reactive({
    searchText: '',
    movies: null,
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
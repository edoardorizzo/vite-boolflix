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
    searchMovies() {
        console.log(this.searchText);
        const url = `https://api.themoviedb.org/3/search/multi?api_key=d94700216696537359e360c15ede3654&language=en-US&query=${this.searchText}&page=1&include_adult=falsea`
        this.callApi(url)
    },
    getLanguageName(language) {
        const languageMap = {
            en: '🇬🇧',
            es: '🇪🇸',
            fr: '🇫🇷',
            it: '🇮🇹',
            ja: '🇯🇵',
            pt: '🇵🇹'

        }
        return languageMap[language] || '//'
    },
    roundNumber(rating) {
        return Math.ceil(rating / 2);
    },
}) 
<script>
import { state } from './state.js'
export default {
  data() {
    return {
      state
    }
  },
  methods: {
    searchMovies() {
      console.log(this.state.searchText);
      const url = `https://api.themoviedb.org/3/search/multi?api_key=d94700216696537359e360c15ede3654&-US&query=?name=${this.state.searchText}&page=1&include_adult=false`
      this.state.callApi(url)
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
      return languageMap[language] || 'Sconosciuto'
    },
    roundNumber(rating) {
      return Math.ceil(rating / 2);
    },
  },
}
</script>
    
<template>
  <div>
    <input @keyup.enter="searchMovies" type="text" v-model="state.searchText" placeholder="Insert movie o Tv Show...">
    <button @click="searchMovies">Search</button>
    <ul>
      <li v-for="movie in state.movies">

        <h4 v-if="movie.title">{{ movie.title }}</h4>
        <h4 v-else>{{ movie.name }}</h4>

        <img :src="`${state.coverUrl}${movie.poster_path}`" alt="">

        <p v-if="movie.original_title">{{ movie.original_title }}</p>
        <p>{{ getLanguageName(movie.original_language) }}</p>
        <p>{{ roundNumber(movie.vote_average) }} ⭐️</p>
      </li>
    </ul>
  </div>
</template>
    
<style lang="scss" scoped></style>
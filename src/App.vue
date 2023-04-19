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
      const url = this.state.URL_API + `?name=${this.state.searchText}`
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

    }
  }
}
</script>
    
<template>
  <div>
    <input @keyup.enter="searchMovies" type="text" v-model="state.searchText" placeholder="Search movie title...">
    <button @click="searchMovies">Search</button>
    <ul>
      <li v-for="movie in state.movies">
        <h4>{{ movie.title }}</h4>
        <p>{{ movie.original_title }}</p>
        <p>{{ getLanguageName(movie.original_language) }}</p>
        <p>{{ movie.vote_average }}</p>
      </li>
    </ul>
  </div>
</template>
    
<style lang="scss" scoped></style>
<script>
import { state } from './state.js'
export default {
  data() {
    return {
      state
    }
  },
  methods: {

  }
}
</script>
    
<template>
  <div>
    <input @keyup.enter="searchMovies" type="text" v-model="state.searchText" placeholder="Search movie title...">
    <button @click="searchMovies">Search</button>
    <ul>
      <li v-for="movie in state.movies" :key="movie.id">
        <h4>{{ movie.title }}</h4>
        <p>{{ movie.original_title }}</p>
        <p>{{ movie.original_language }}</p>
      </li>
    </ul>
  </div>
</template>
    
<style lang="scss" scoped></style>
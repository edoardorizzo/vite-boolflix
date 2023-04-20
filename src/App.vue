<script>
import { state } from './state.js'
import SiteHeader from './components/SiteHeader.vue'
import SiteHero from './components/SiteHero.vue'
export default {
  components: {
    SiteHeader,
    SiteHero,
  },
  data() {
    return {
      state,
    }
  },
}
</script>
    
<template>
  <div>
    <SiteHeader></SiteHeader>

    <SiteHero></SiteHero>


    <ul>
      <li v-for="movie in state.movies">

        <h4 v-if="movie.title">{{ movie.title }}</h4>
        <h4 v-else>{{ movie.name }}</h4>

        <img :src="`${state.coverUrl}${movie.poster_path}`" alt="">

        <p v-if="movie.original_title">{{ movie.original_title }}</p>
        <p>{{ state.getLanguageName(movie.original_language) }}</p>
        <p>{{ state.roundNumber(movie.vote_average) }} ⭐️</p>
      </li>
    </ul>
  </div>
</template>
    
<style lang="scss" scoped></style>
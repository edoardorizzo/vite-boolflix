<script>
import { state } from '../state'
export default {
    name: 'SiteMovie',
    props: {
        movie: Object
    },
    data() {
        return {
            state
        }
    }
}
</script>

<template>
        <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card col-12-sm">
                <h4 v-if="movie.title">{{ movie.title }}</h4>
                <h4 v-else>{{ movie.name }}</h4>

                <img :src="`${state.coverUrl}${movie.poster_path}`" alt="">

                <p v-if="movie.original_title">{{ movie.original_title }}</p>
                <p>{{ state.getLanguageName(movie.original_language) }}</p>
                <p>{{ state.roundNumber(movie.vote_average) }} ⭐️</p>
            </div>
        </div>
</template>


<style lang="scss" scoped>
@use '../assets/partials/partials.scss' as *;
</style>
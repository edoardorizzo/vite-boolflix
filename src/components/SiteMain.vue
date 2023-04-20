<script>
import { state } from '../state';
import SiteMovie from '../components/SiteMovie.vue';
export default {
    name: 'SiteMain',
    components: {
        SiteMovie,
    },
    data() {
        return {
            state
        }
    },
    methods: {
        getResults() {
            return this.state.movies.length
        }
    }
}
</script>


<template>
    <div class="container">
        <div class="site_main row">
            <h6 v-if="state.movies">Risultati di ricerca: {{ getResults() }}</h6>
            <SiteMovie :movie="movie" v-for="movie in state.movies"></SiteMovie>
        </div>

    </div>
</template>



<style lang="scss" scoped>
@use '../assets/partials/partials.scss' as *;

.site_main {
    margin-top: 3rem;

    h6 {
        color: $white;

    }
}
</style>
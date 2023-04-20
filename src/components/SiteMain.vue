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
    }
}
</script>


<template>
    <div class="container">
        <div class="row">
            <SiteMovie :movie="movie" v-for="movie in state.movies"></SiteMovie>
        </div>
    </div>

    
</template>



<style lang="scss" scoped></style>
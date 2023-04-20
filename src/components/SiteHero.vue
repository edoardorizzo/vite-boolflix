<script>
import { state } from '../state.js';
export default {
    name: 'SiteHero',
    data() {
        return {
            state
        }
    },
    methods: {
        
    },

}
</script>

<template>
    <input @keyup.enter="state.searchMovies" type="text" v-model="state.searchText" placeholder="Insert movie o Tv Show...">
    <button @click="state.searchMovies">Search</button>
</template>


<style lang="scss" scoped>
@use '../assets/partials/partials.scss' as *;
</style>
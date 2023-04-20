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
    <div class="hero">
        <div class="hero_elements">
            <h1>Scopri un mondo fantastico!</h1>
            <p>Goditi i migliori <strong>Film</strong> e <strong>Serie Tv</strong> grazie al servizio <strong>BoolFlix</strong>, servizio streaming <strong>completamente gratuito</strong>  ed indipendente che nulla ha a che fare con un noto servizio di streaming con un nome simile ma non troppo!</p>
            <div class="input_container">
                <input  @keyup.enter="state.searchMovies" type="text" v-model="state.searchText"
                    placeholder="Insert movie o Tv Show...">
                <button @click="state.searchMovies">Search</button>
            </div>
        </div>


    </div>
</template>


<style lang="scss" scoped>
@use '../assets/partials/partials.scss' as *;

.hero {
    background-image: url(/img/hero_bg.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 400px;
    padding: 6rem 4rem;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        color: $white;
        margin-bottom: 1rem;
    }

    p{
        color: $white;
        font-size: 14px;
        margin-bottom: 2rem;
    }

    .input_container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        max-width: 600px;
    }

    input {
        border-radius: 1rem;
        border: 2px solid $dark-blue;
        width: 70%;
        padding: 0.25rem;
        margin-right: 1rem;
    }

    button {
        border-radius: 1rem;
        border: none;
        background-color: $green;
        width: 30%;
        color: $white;
        padding: 0.25rem;
    }
}
</style>
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
    <div class="card_container col-sm-6 col-md-4 col-lg-3">
        <div class="card col-12-sm">
            <div class="img_container">
                <img :src="`${state.coverUrl}${movie.poster_path}`" alt="">
            </div>
            <div class="text_container">
                <h4 v-if="movie.title">{{ movie.title }}</h4>
                <h4 v-else>{{ movie.name }}</h4>
                <p v-if="movie.original_title">{{ movie.original_title }}</p>
                <div class="vote_language">
                    <span> Lingua: {{ state.getLanguageName(movie.original_language) }}</span>
                    <div>{{ state.roundNumber(movie.vote_average) }} ⭐️</div>
                </div>
            </div>


        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/partials/partials.scss' as *;


.card_container {
    margin-bottom: 1.5rem;
    height: 100%;
}

.card {
    background-color: transparent;
    color: $white;
    border: none;

    .img_container {
        margin-bottom: 1rem;

        img {
            width: 100%;
            border-radius: 1rem;
            filter: drop-shadow(0px 0px 5px $shadow-blue);

            &:hover {
                filter: drop-shadow(0px 0px 10px $white);
            }
        }


    }

    .text_container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h4 {
            font-size: 16px;
            font-weight: bold;
        }

        p {
            font-size: 12px;
        }

        .vote_language {
            display: flex;
            justify-content: space-between;

            span,
            div {
                font-size: 12px;
            }
        }
    }
}
</style>
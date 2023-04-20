<script>
import {state} from '../state'
export default {
    name: 'SiteCards',
    data(){
        return{
            state
        }
    }
}
</script>


<template>
    <div class="site_card_component container">
        <h3>I titoli del momento</h3>
        <div class="row">
            <div class="col col-6 col-sm-6 col-md-3">
                <div class="card">
                    <img src="/img/movie1.jpeg" alt="">
                    <h4>Avenger, End-Game</h4>
                </div>
            </div>
            <div class="col col-6 col-sm-6 col-md-3">
                <div class="card">
                    <img src="/img/movie2.jpeg" alt="">
                    <h4>Wall-E</h4>
                </div>
            </div>
            <div class="col col-6 col-sm-6 col-md-3">
                <div class="card">
                    <img src="/img/movie3.jpeg" alt="">
                    <h4>Bastardi Senza Gloria</h4>
                </div>
            </div>
            <div class="col col-6 col-sm-6 col-md-3">
                <div class="card">
                    <img src="/img/movie4.jpeg" alt="">
                    <h4>Friends</h4>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/partials/partials.scss' as *;

.site_card_component{
    margin-top: 3rem;

    .col{
        margin-top: 1rem;
    }

    h3{
        color: $white;
    }

    .card{
        background-color: transparent;
        border: none;
        color: $white;
        
        img{
            border-radius: 1rem;
            margin-bottom: 0.5rem;
            filter: drop-shadow(0px 0px 5px $shadow-blue);
            height: 200px;
        }

        h4{
            font-size: 16px;
        }
    }
}
</style>
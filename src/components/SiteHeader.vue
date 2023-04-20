<script>
export default {
    name: 'SiteHeader'

}
</script>
<template>
    <header>
        <div class="logo_container">
            <img src="/img/boolflix_logo.svg" alt="">
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/partials/partials.scss' as *;

header{
    height: 40px;
    padding: 0.5rem;
    background-color: $dark-blue;

    .logo_container{
        width: 160px;
        margin: auto;

        img{
            width: 100%;
        }
    }
}


</style>
<script>
import { state } from './state.js'
import SiteHeader from './components/SiteHeader.vue'
import SiteHero from './components/SiteHero.vue'
import SiteMain from './components/SiteMain.vue'
import SiteCards from './components/SiteCards.vue'
export default {
  components: {
    SiteHeader,
    SiteHero,
    SiteMain,
    SiteCards,
  },
  data() {
    return {
      state,
    }
  },
}
</script>
    
<template>
  <SiteHeader></SiteHeader>
  <SiteHero></SiteHero>
  <SiteCards></SiteCards>
  <SiteMain></SiteMain>
</template>
    
<style lang="scss" scoped></style>
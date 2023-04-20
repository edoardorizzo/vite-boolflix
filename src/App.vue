<script>
import { state } from './state.js'
import SiteHeader from './components/SiteHeader.vue'
import SiteHero from './components/SiteHero.vue'
import SiteMain from './components/SiteMain.vue'
export default {
  components: {
    SiteHeader,
    SiteHero,
    SiteMain
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
  <SiteMain></SiteMain>
</template>
    
<style lang="scss" scoped></style>
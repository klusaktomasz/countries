<template>
  <div id="app" class="app">
    <CountriesHeader></CountriesHeader>
  </div>
</template>

<script>
import CountriesHeader from '@/components/CountriesHeader.vue';

export default {
  name: 'App',
  components: {
    CountriesHeader,
  },
};
</script>

<style lang="scss">
*,
*:before,
*:after {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}

body {
  background: $whiteSoft;
  color: $blackSoft;
  font-family: 'Roboto', sans-serif;
}

.app {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

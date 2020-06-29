<template>
  <div id="app" class="app">
    <CountriesHeader class="app__header"></CountriesHeader>
    <CountryForm class="app__form"></CountryForm>
  </div>
</template>

<script>
import CountriesHeader from '@/components/CountriesHeader.vue';
import CountryForm from '@/components/CountryForm.vue';

export default {
  name: 'App',
  components: {
    CountriesHeader,
    CountryForm,
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
  flex-direction: column;
  padding: 0 16px;
  margin: 0 auto;
  max-width: 420px;
}

.app__header {
  margin-bottom: 2em;
  width: 100%;
}

.app__form {
  width: 100%;
}
</style>

<template>
  <div id="app" class="app">
    <CountriesHeader class="app__header" ref="header"></CountriesHeader>
    <CountryForm class="app__form" @country="toggleHeaderVisibility"></CountryForm>
  </div>
</template>

<script>
import gsap from 'gsap';

import CountriesHeader from '@/components/CountriesHeader.vue';
import CountryForm from '@/components/CountryForm.vue';

export default {
  name: 'App',
  components: {
    CountriesHeader,
    CountryForm,
  },
  methods: {
    toggleHeaderVisibility() {
      const header = this.$refs.header.$el;

      gsap.to(header, {
        opacity: 0,
        duration: 0.200,
        onComplete: () => gsap.set(header, { display: 'none' }),
      });
    },
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
  padding: 0 1em;
}

.app__header {
  margin-bottom: 2em;
  width: 100%;
  max-width: 420px;
}

.app__form {
  width: 100%;
  max-width: 420px;
}
</style>

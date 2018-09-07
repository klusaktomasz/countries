<template>
  <div id="app" class="app">
    <c-header></c-header>
    <c-search-input></c-search-input>
  </div>
</template>

<script>
import CHeader from '@/components/CHeader.vue';
import CSearchInput from '@/components/CSearchInput.vue';

export default {
  name: 'app',
  components: {
    CHeader,
    CSearchInput,
  },
};
</script>

<style lang="scss">
html {
  height: 100%;
  font-family: 'Roboto', sans-serif;
}

body {
  background: #f0f3f4;
  margin: 0;
  height: 100%;
}

.app {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 0 20px;
}
</style>

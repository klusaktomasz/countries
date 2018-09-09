<template>
  <div id="app" class="app">
    <transition name="fade">
      <c-header v-if="searchCountry.length === 0"
                class="header"></c-header>
    </transition>

    <c-search-input ref="input"
                    v-model="searchCountry"
                    @input="handleInput"
                    class="input"></c-search-input>
  </div>
</template>

<script>
import axios from 'axios';
import { debounce } from 'lodash';
import anime from 'animejs';

import CHeader from '@/components/CHeader.vue';
import CSearchInput from '@/components/CSearchInput.vue';

const API_LINK = 'https://restcountries.eu/rest/v2';

export default {
  name: 'app',
  data() {
    return {
      searchCountry: '',
      loading: false,
      fetchData: null,
    };
  },
  components: {
    CHeader,
    CSearchInput,
  },
  watch: {
    searchCountry: function () {
      const top = this.searchCountry.length === 0 ? '55%' : 0;

      anime({
        targets: this.$refs.input.$el,
        top: top,
        duration: 250,
        easing: [0.165, 0.84, 0.44, 1],
      });
    },
  },
  methods: {
    handleInput: debounce(async function () {
      if (this.searchCountry.length === 0) {
        return;
      }

      this.loading = true;

      const response = await axios.get(`${API_LINK}/name/${this.searchCountry}`);
      console.log(response);
    }, 200),
  },
};
</script>

<style lang="scss">
@import 'assets/scss/animations';

html {
  height: 100%;
  font-family: 'Roboto', sans-serif;
}

body {
  background: #f0f3f4;
  margin: 0;
  height: 100%;
}
</style>

<style scoped lang="scss">
.app {
  height: 100%;
  width: 100%;
  position: absolute;
}

.header {
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
}

.input {
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
}
</style>

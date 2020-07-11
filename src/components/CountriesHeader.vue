<template>
  <header class="header">
    <h1 class="header__heading">Countries</h1>
    <p class="header__subheading">Get essential information about any country!</p>
  </header>
</template>

<script>
export default {
  name: 'CountriesHeader',
};
</script>

<style lang="scss" scoped>
.header {
  text-align: center;
  position: relative;
  padding: 2em;
  box-shadow: 1px 2px 5px $blackSoft;

  &:before,
  &:after {
    content: '';
    position: absolute;
    pointer-events: none;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(55deg, rgba($blackSoft, 0.2) 0%, transparent 30%);
    border: 1px solid $black;
  }

  &:after {
    transform: rotate(180deg);
  }
}

.header__heading {
  margin: 0;
  font-size: 2.25em;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1.5em;
}

.header__subheading {
  margin: 0;
}
</style>

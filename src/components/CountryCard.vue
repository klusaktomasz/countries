<template>
  <article class="country">
    <header class="country__header">
      <h1 class="country__name">{{ name }}</h1>
      <p class="country__full-name">{{ fullName }}</p>
    </header>
  </article>
</template>

<script>
export default {
  name: 'CountryCard',
  props: {
    name: { type: String, required: true },
    fullName: { type: String, required: true },
    code: { type: String, required: true },
    capital: { type: String, required: true },
    region: { type: String, required: true },
    population: { type: String, required: true },
    domain: { type: String, required: true },
    languages: { type: Array, required: true },
    currencies: { type: Array, required: true },
  },
};
</script>

<style lang="scss" scoped></style>

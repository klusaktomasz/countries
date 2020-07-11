<template>
  <article class="country">
    <header class="country__header">
      <h1 class="country__name">{{ name }}</h1>
      <p class="country__full-name">
        {{ fullName }}
        [{{ code }}]
      </p>
    </header>

    <div class="country__details">
      <p class="country__detail">Population: {{ formattedPopulation }}</p>
      <p class="country__detail">Capital: {{ capital }}</p>
      <p class="country__detail">Languages: {{ languagesNames }}</p>
      <p class="country__detail">Currencies: {{ currenciesNames }}</p>
      <p class="country__detail">Domain: {{ domain }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'CountryCard',
  props: {
    name: { type: String, required: true },
    fullName: { type: String },
    code: { type: String, required: true },
    capital: { type: String, required: true },
    region: { type: String, required: true },
    population: { type: Number, required: true },
    domain: { type: String, required: true },
    languages: { type: Array, required: true },
    currencies: { type: Array, required: true },
  },
  computed: {
    languagesNames() {
      return this.languages.map((lang) => lang.name).join(', ').toLocaleLowerCase();
    },
    currenciesNames() {
      return this.currencies.map((currency) => currency.code).join(', ');
    },
    formattedPopulation() {
      return this.population.toLocaleString('pl');
    },
  },
};
</script>

<style lang="scss" scoped>
.country {
  background: rgba($white, 0.96);
  padding: 1em;
  border-radius: 4px;
  box-shadow: 1px 2px 5px rgba($black, 0.8);
}

.country__name {
  margin: 0;
  font-size: 2em;
  line-height: 1.5em;
}

.country__full-name {
  margin: 0;
}

.country__details {
  margin: 1.5em 0 0;
}

.country__detail {
  margin: 0;
  line-height: 1.5em;
}
</style>

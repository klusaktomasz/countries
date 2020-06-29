<template>
  <form class="form" @submit.prevent="">
    <LabeledInput
      class="form__input"
      v-model="countryName"
      id="country-name"
      @input ="handleNameChange"
    >
      Country name:
    </LabeledInput>

    <output class="form__output">
      <country-card
        v-if="data"
        :name="data.nativeName"
        :fullName="data.altSpellings[2]"
        :code="data.alpha3Code"
        :capital="data.capital"
        :region="data.region"
        :population="data.population"
        :domain="data.topLevelDomain[0]"
        :languages="data.languages"
        :currencies="data.currencies"
      ></country-card>
    </output>
  </form>
</template>

<script>
import _debounce from 'lodash.debounce';

import LabeledInput from '@/components/LabeledInput.vue';
import CountryCard from '@/components/CountryCard.vue';

import { RESTCOUNTRIES_GET_BY_NAME } from '@/utils/apiEndpoints';

export default {
  name: 'CountryForm',
  components: {
    LabeledInput,
    CountryCard,
  },
  data: () => ({
    countryName: '',
    data: null,
    isLoading: false,
  }),
  methods: {
    async fetchCountryData(name) {
      this.isLoading = true;
      const res = await fetch(`${RESTCOUNTRIES_GET_BY_NAME}/${name}`);
      this.isLoading = false;

      if (!res.ok) {
        return null;
      }

      return res.json();
    },
    changeBgToFlag(flagLink) {
      document.body.style.background = `no-repeat center/cover url(${flagLink})`;
    },
    handleNameChange: _debounce(async function () {
      if (this.countryName.length === 0) {
        return;
      }

      const fetchedData = await this.fetchCountryData(this.countryName);
      if (fetchedData === null) {
        // TODO(Tomasz Kłusak): Handle no data (e.g. no country for given name) - show message.
        return;
      }
      [this.data] = fetchedData;

      this.changeBgToFlag(this.data.flag);
    }, 400),
  },
};
</script>

<style lang="scss" scoped>
.form {
  width: 100%;
}

.form__input {
  width: 100%;
}
</style>

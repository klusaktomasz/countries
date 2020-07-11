<template>
  <form class="form" @submit.prevent="">
    <LabeledInput
      type="text"
      spellcheck="false"
      autocomplete="off"
      autofocus
      class="form__input"
      :class="{ 'form__input--fixed': fixedInput }"
      v-model="countryName"
      id="country-name"
      ref="input"
    >
      Country name:
    </LabeledInput>

    <output class="form__output">
      <transition mode="out-in" @enter="animEnterCard" @leave="animLeaveCard">
        <country-card
          v-if="data"
          :key="data.nativeName"

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
      </transition>

    <transition mode="out-in" @enter="animEnterFlag" @leave="animLeaveFlag">
      <img
        v-if="data"
        :key="data.flag"

        :src="data.flag"
        alt=""
        class="form__output-bg">
    </transition>
    </output>
  </form>
</template>

<script>
import _debounce from 'lodash.debounce';
import gsap from 'gsap';

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
    fixedInput: false,
  }),
  watch: {
    countryName() {
      if (this.countryName.length === 0) {
        this.data = null;
        return;
      }

      this.positionElements();
      this.debouncedGetCountry();
    },
    // data() {
    //   if (this.data?.flag) {
    //     document.body.style.background = `no-repeat center/100% url(${this.data.flag}) #f1f3f5`;
    //   } else {
    //     document.body.style.background = 'unset';
    //   }
    // },
  },
  methods: {
    setInputPosition() {
      const input = this.$refs.input.$el;
      this.fixedInput = true;
      // Animate top, bcs calculations of y would take too much (hiding header changes everything).
      gsap.to(input, {
        top: 16,
        duration: 1,
        ease: 'power3.out',
      });
    },
    positionElements() {
      this.$emit('country', true);
      this.setInputPosition();
    },
    async fetchCountryData(name) {
      this.isLoading = true;
      const res = await fetch(`${RESTCOUNTRIES_GET_BY_NAME}/${name}`);
      this.isLoading = false;

      if (!res.ok) {
        return null;
      }

      return res.json();
    },
    async getCountry() {
      const fetchedData = await this.fetchCountryData(this.countryName);
      if (fetchedData === null) {
        // TODO(Tomasz Kłusak): Handle no data (e.g. no country for given name) - show message.
        this.data = null;
        return;
      }
      [this.data] = fetchedData;
    },
    animEnterCard(el, done) {
      gsap.from(el, {
        y: '10%',
        opacity: '0',
        ease: 'power1.out',
        duration: 0.4,
        onComplete: done,
      });
    },
    animLeaveCard(el, done) {
      gsap.to(el, {
        y: '-10%',
        opacity: 0,
        ease: 'power1.out',
        duration: 0.2,
        onComplete: done,
      });
    },
    animEnterFlag(el, done) {
      gsap.from(el, {
        opacity: 0,
        ease: 'power1.out',
        duration: 0.4,
        onComplete: done,
      });
    },
    animLeaveFlag(el, done) {
      gsap.to(el, {
        opacity: 0,
        ease: 'power1.out',
        duration: 0.2,
        onComplete: done,
      });
    },
  },
  created() {
    this.debouncedGetCountry = _debounce(this.getCountry, 400);
  },
};
</script>

<style lang="scss" scoped>
.form__input {
  will-change: top;
  width: 100%;
  max-width: 420px;

  &--fixed {
    position: absolute;
  }
}

.form__output-bg {
  position: fixed;
  z-index: -1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
}

@media (max-width: 420px) {
  .form__input--fixed {
    left: 1em;
    width: calc(100% - 2em);
  }
}
</style>

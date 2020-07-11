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
        <div
          v-else-if="noCountry"
          class="form__error-message">
          There is no country with given name
        </div>
        <div
          v-else-if="apiError"
          class="form__error-message">
          There is problem with searching country (API Error).<br>
          Try later.
        </div>
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
    apiError: false,
    noCountry: false,
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
    async getCountry() {
      // Fetch data
      this.isLoading = true;
      const res = await fetch(`${RESTCOUNTRIES_GET_BY_NAME}/${this.countryName}`);
      this.isLoading = false;

      // Handle error (no country or api error)
      if (!res.ok) {
        this.data = null;

        if (res.status === 404) {
          this.noCountry = true;
        } else {
          this.apiError = true;
        }

        return;
      }

      // Manage data
      [this.data] = await res.json();
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

.form__error-message {
  background: $white;
  border-radius: 4px;
  box-shadow: 1px 2px 5px rgba($black, 0.8);
  padding: 2em 1em;
  text-align: center;
  color: $redDark;
  font-size: 1.15em;
  letter-spacing: 1px;
}

@media (max-width: 420px) {
  .form__input--fixed {
    left: 1em;
    width: calc(100% - 2em);
  }
}
</style>

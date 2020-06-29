<template>
  <form class="form">
    <LabeledInput
      class="form__input"
      v-model="countryName"
      id="country-name"
    >
      Country name:
    </LabeledInput>
  </form>
</template>

<script>
import LabeledInput from '@/components/LabeledInput.vue';

export default {
  name: 'CountryForm',
  components: {
    LabeledInput,
  },
  data: () => ({
    countryName: '',
  }),
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

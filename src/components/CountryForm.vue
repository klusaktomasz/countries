<template>
  <form class="form">
    <LabeledInput v-model="countryName" id="country-name">Country name:</LabeledInput>
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

</style>

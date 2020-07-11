<template>
  <label
    :for="id"
    class="labeled-input"
    :class="{
      'labeled-input--focus': isFocused
    }"
  >
    <slot></slot>
    <input class="labeled-input__input"
           v-bind="$attrs"
           :value="value"
           :id="id"
           @focus="isFocused = true"
           @blur="isFocused = false"
           @input="$emit('input', $event.target.value)"
    >
  </label>
</template>

<script>
export default {
  name: 'LabeledInput',
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      required: true,
    },
    value: {},
  },
  data: () => ({
    isFocused: false,
  }),
};
</script>

<style lang="scss" scoped>
.labeled-input {
  display: block;
  background: $white;
  border: 1px solid $blackSoft;
  color: $blackSoft;
  padding: 0.75em 0.5em;
  border-radius: 4px;
  margin-top: 8px;
  font-family: 'Roboto', sans-serif;
  cursor: text;

  &.labeled-input--focus {
    outline: 3px solid $oceanicBlue;
    outline-offset: -2px;
    box-shadow: 1px 2px 5px $oceanicBlue;
  }
}

.labeled-input__input {
  border: 0;
  font-family: 'Roboto', sans-serif;
  color: $black;
  margin-left: 0.5em;

  &:focus {
    outline: none;
  }
}
</style>

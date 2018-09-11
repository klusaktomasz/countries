<template>
  <div class="box">
    <input type="text"
           aria-label="Country name"
           placeholder="Country name"
           :value="searchCountry"
           @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  name: 'CSearchInput',
  data() {
    return {
      searchCountry: '',
    };
  },
};
</script>

<style scoped lang="scss">
.box {
  margin-top: 40px;
  max-width: 360px;
  width: 100%;

  &.focus {
    top: 0;
    position: absolute;
  }
}

input {
  background: #fff;
  border: none;
  border-radius: 4px;
  font-family: 'Roboto', sans-serif;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.24),
              0px 0px 8px rgba(0, 0, 0, 0.12);

  width: 100%;
  min-height: 48px;
  box-sizing: border-box;
  padding: 13px;
  position: relative;
}
</style>

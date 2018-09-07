<template>
  <header>
    <h1>Countries</h1>
    <p>Get some information about any country</p>
  </header>
</template>

<script>
export default {
  name: 'CHeader',
};
</script>

<style scoped lang="scss">
header {
  text-align: center;
  position: relative;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 50%;
    height: 60%;
    pointer-events: none;
  }

  &:before {
    left: -20px;
    top: -20px;
    border-left: 1px solid #000;
    border-top: 1px solid #000;
    border-top-left-radius: 10%;
  }

  &:after {
    right: -20px;
    bottom: -20px;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    border-bottom-right-radius: 10%;
  }
}

h1 {
  text-transform: uppercase;
  margin: 0;
  font-size: 2.6rem;
}

p {
  font-weight: 300;
  margin: 0;
  font-size: 0.9rem;
}
</style>

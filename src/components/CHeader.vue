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
  padding: 20px;
  box-sizing: border-box;

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
    left: 0;
    top: 0;
    border-left: 1px solid #000;
    border-top: 1px solid #000;
    border-top-left-radius: 10%;
  }

  &:after {
    right: 0;
    bottom: 0;
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

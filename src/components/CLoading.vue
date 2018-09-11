<template>
  <div></div>
</template>

<script>
export default {
  name: 'CLoading',
};
</script>

<style scoped lang="scss">
@keyframes bar {
  0% {
    transform: scaleX(0);
    transform-origin: 0%;
  }
  50% {
    transform: scaleX(0.5);
    transform-origin: 50%;
  }
  100% {
    transform: scaleX(0);
     transform-origin: 100%;
  }
}

div {
  position: absolute;
  left: 0;
  top: 0;
  display: block;

  width: 100%;
  height: 2px;
  background: #ff9d9d;
  transform-origin: 0;
  animation: bar 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
}
</style>

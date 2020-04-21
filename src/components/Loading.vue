<template>
  <div id="loading">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="30px" viewBox="0 0 30 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
      <rect x="0" y="0" width="4" height="20">
        <animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
      </rect>
      <rect x="7" y="0" width="4" height="20">
        <animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0.2s" dur="0.6s" repeatCount="indefinite"></animate>
      </rect>
      <rect x="14" y="0" width="4" height="20">
        <animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0.4s" dur="0.6s" repeatCount="indefinite"></animate>
      </rect>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style scoped>
#loading {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0, 0, 0);
  opacity: 1;
  transition-duration: 0.6s;
  z-index: 10000;
  fill: rgb(255, 255, 255);
}
svg {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -12px;
  margin-top: -15px;
}
</style>

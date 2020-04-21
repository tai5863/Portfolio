<template>
  <div class="footer_comp">
    <div class="footer_container">
      <h2 class="me_name"><router-link to="/" class="home">Taichi Uchida</router-link></h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
.footer_comp {
  width: 100vw;
  position: fixed;
  bottom: 20px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
}
.me_name {
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 35px;
  margin: 0 auto;
  cursor: pointer;
  min-width: 120px;
}
.home {
  text-decoration: none;
  color: white;
}
</style>
<template>
  <div class="footer_comp">
    <div class="footer_container">
      <h1 class="me_name"><router-link to="/" class="home_nav">Taichi Uchida</router-link></h1>
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
  bottom: 80px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
}
.me_name {
  font-family: 'Segoe UI';
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  margin: 0 auto;
  cursor: pointer;
  min-width: 120px;
}
.home_nav {
  text-decoration: none;
  color: black;
}
</style>
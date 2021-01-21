<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <div class="home_container">
      <div class="name_container">
        <h1 class="name">Taichi Uchida</h1>
        <div id="load"></div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue'

export default {
  neme: 'Home',
  components: {
    HomeHeader
  },
}
</script>

<style scoped>
.home_container {
  min-height: 500px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
.home_container .name_container {
  position: absolute;
  width: 100%;
  height: 95px;
  bottom: 12.5%;
}
.home_container .name {
  position: relative;
  
  font-family: 'Kiona', 'Yu Gothic', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: min(40px, 9vw);
  line-height: 98px;
  text-align: center;
  
  margin: 0;
}
</style>

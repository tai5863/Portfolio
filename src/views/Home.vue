<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <div class="home_container">
      <div class="background-wrapper">
        <video src="@/assets/photos/out.mp4" type="video/mp4" class="background" autoplay muted loop playsinline></video>
      </div>
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
  background-color: black;
  min-height: 500px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
.background {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
}
.home_container .name_container {
  position: absolute;
  width: 100%;
  height: 95px;
  bottom: 12.5%;
}
.home_container .name {
  position: relative;
  color: white;
  
  font-family: 'Kiona', 'Yu Gothic', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: min(40px, 9vw);
  line-height: 98px;
  text-align: center;
  
  margin: 0;
}

@media screen and (max-width: 957px) {
  .background {
    width: auto;
  }
}
</style>

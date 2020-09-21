<template>
  <div class="home">
    <WebGL></WebGL>
    <HomeHeader></HomeHeader>
    <div class="name_container">
      <h1 class="name">Taichi Uchida</h1>
    </div>
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue'
import WebGL from '@/components/WebGL.vue'

export default {
  neme: 'Home',
  components: {
    HomeHeader,
    WebGL
  },
}
</script>

<style scoped>

.home {
  width: 100vw;
  height: 100vh;
}
.name_container {
  position: absolute;
  width: 100%;
  height: 95px;
  left: 10%;
  bottom: 10%;
}
.name {
  position: relative;
  
  font-family: Sarpanch;
  font-style: normal;
  font-weight: normal;
  font-size: 70px;
  line-height: 98px;
  text-align: left;

  color: #C9C9C9;
}
</style>

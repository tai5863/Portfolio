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
  mounted() {
    let load = document.getElementById('load');
    for (let i = 0; i < this.src.length; i++) {
      let element = document.createElement('img');
      element.src = this.src[i];
      element.style.visibility = 'hidden';
      load.appendChild(element);
    }
  },
  data() {
  }
}
</script>

<style scoped>
.home_container {
  position: relative;
  width: 100vw;
  height: 100vh;
}
.name_container {
  position: absolute;
  width: 100%;
  height: 95px;
  bottom: max(150px, 15%);
}
.name {
  position: relative;
  
  font-family: 'Kiona', 'Yu Gothic', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: min(50px, 9vw);
  line-height: 98px;
  text-align: center;
  
  margin: 0;
}
</style>

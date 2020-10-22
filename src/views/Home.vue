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
    return {
      src: [
        require('@/assets/works/playing_tokyo01.' + localStorage.format),
        require('@/assets/works/playing_tokyo02.' + localStorage.format),
        require('@/assets/works/playing_tokyo03.' + localStorage.format),
        require('@/assets/works/playing_tokyo04.' + localStorage.format),
        require('@/assets/works/unperpendiculaire_mesdemoiselle01.' + localStorage.format),
        require('@/assets/works/staying_tokyo01.' + localStorage.format),
        require('@/assets/works/staying_tokyo02.' + localStorage.format),
        require('@/assets/works/kasuga_shinkan01.' + localStorage.format),
        require('@/assets/works/kasuga_shinkan02.' + localStorage.format),
        require('@/assets/photos/MyProfile.' + localStorage.format),
        require('@/assets/photos/DSC_0312.' + localStorage.format),
        require('@/assets/photos/DSC_0487.' + localStorage.format),
        require('@/assets/photos/DSC_0583.' + localStorage.format),
        require('@/assets/photos/DSC_0467.' + localStorage.format),
        require('@/assets/photos/DSC_0469.' + localStorage.format),
        require('@/assets/photos/DSC_0355.' + localStorage.format),
        require('@/assets/photos/DSC_0300.' + localStorage.format),
        require('@/assets/photos/DSC_0306.' + localStorage.format),
        require('@/assets/photos/DSC_0342.' + localStorage.format),
        require('@/assets/photos/DSC_0255.' + localStorage.format),
        require('@/assets/photos/DSC_0337.' + localStorage.format),
        require('@/assets/photos/DSC_0279.' + localStorage.format),
        require('@/assets/photos/DSC_0278.' + localStorage.format),
        require('@/assets/photos/DSC_0280.' + localStorage.format),
        require('@/assets/photos/DSC_0241.' + localStorage.format),
        require('@/assets/photos/DSC_0334.' + localStorage.format),
        require('@/assets/photos/DSC_0335.' + localStorage.format),
        require('@/assets/photos/DSC_0514.' + localStorage.format),
      ]
    }
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
  
  font-family: 'Kiona';
  font-style: normal;
  font-weight: normal;
  font-size: min(50px, 9vw);
  line-height: 98px;
  text-align: center;
  
  margin: 0;
}
</style>

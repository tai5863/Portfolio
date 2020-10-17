<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <!--<ScaledMixedColorNoise></ScaledMixedColorNoise>-->
    <div class="home_container">
      <div class="name_container">
        <h1 class="name">Taichi Uchida</h1>
        <div class="load" v-for="img in images" :key="img.key" style="display: none;">
          <img :src="img"/>
        </div>
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
  data() {
    return {
      images: [
        require('@/assets/works/playing_tokyo01.png'),
        require('@/assets/works/unperpendiculaire_mesdemoiselle01.jpg'),
        require('@/assets/works/staying_tokyo01.png'),
        require('@/assets/works/kasuga_shinkan01.png'),
        require('@/assets/photos/DSC_0312.jpg'),
        require('@/assets/photos/DSC_0487.jpg'),
        require('@/assets/photos/DSC_0583.jpg'),
        require('@/assets/MyProfile.jpg'),
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
  
  font-family: Sarpanch;
  font-style: normal;
  font-weight: normal;
  font-size: min(70px, 9vw);
  line-height: 98px;
  text-align: center;
  
  margin: 0;
}
</style>

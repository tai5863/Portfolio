<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <ScaledMixedColorNoise></ScaledMixedColorNoise>
    <div class="home_container">
      <div class="name_container">
        <h1 class="name">Taichi Uchida</h1>
      </div>
    </div>
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue'
import ScaledMixedColorNoise from '@/components/ScaledMixedColorNoise.vue'

export default {
  neme: 'Home',
  components: {
    HomeHeader,
    ScaledMixedColorNoise
  },
}
</script>

<style scoped>
.home_container {
  background: rgba(0, 0, 0, 0.5);
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

  color: #FFFFFF;
  
  margin: 0;
}
</style>

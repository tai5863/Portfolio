<template>
  <div id="app">
    <Header></Header>
    <WebGL></WebGL>
    <transition name="trans">
      <router-view></router-view>
    </transition>
    <div class="photos_loader">
      <ul>
        <span v-for="(image, index) in images" :key="image"><img class="img" :id="'img' + index" :src="image"></span>
      </ul>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import WebGL from '@/components/WebGL.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    WebGL,
    Footer
  },
  data(){
    return {
      images: [ 
        require('@/assets/DSC_0312.jpg'),
        require('@/assets/DSC_0487.jpg'),
        require('@/assets/DSC_0583.jpg'),
        require('@/assets/DSC_0467.jpg'),
        require('@/assets/DSC_0469.jpg'),
        require('@/assets/DSC_0355.jpg'),
        require('@/assets/DSC_0300.jpg'),
        require('@/assets/DSC_0306.jpg'),
        require('@/assets/DSC_0341.jpg'),
        require('@/assets/DSC_0255.jpg'),
        require('@/assets/DSC_0337.jpg'),
        require('@/assets/DSC_0032.jpg'),
        require('@/assets/DSC_0278.jpg'),
        require('@/assets/DSC_0280.jpg'),
        require('@/assets/DSC_0188.jpg'),
        require('@/assets/DSC_0334.jpg'),
        require('@/assets/DSC_0335.jpg'),
        require('@/assets/DSC_0514.jpg'),
        require('@/assets/MyProfile.jpg')
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
}
.trans-enter {
  opacity: 0;
}
.trans-enter-to {
  opacity: 1;
}
.trans-enter-active {
  transition: all 1s 0s;
}
.trans-leave {
  opacity: 1;
}
.trans-leave-to {
  opacity: 0;
}
.trans-leave-active {
  transition: all 1s 0s;
}

.photos_loader {
  display: none;
}
</style>

<template>
  <div class="picture">
    <Header></Header>
    <div class="picture_container">
      <div class="container">
        <ul>
          <span v-for="(image, index) in images" :key="image"><img class="img" :id="'img' + index" :src="image"></span>
        </ul>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Picture',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      images: [ 
        require('@/assets/photos/DSC_0312.jpg'),
        require('@/assets/photos/DSC_0487.jpg'),
        require('@/assets/photos/DSC_0583.jpg'),
        require('@/assets/photos/DSC_0467.jpg'),
        require('@/assets/photos/DSC_0469.jpg'),
        require('@/assets/photos/DSC_0355.jpg'),
        require('@/assets/photos/DSC_0300.jpg'),
        require('@/assets/photos/DSC_0306.jpg'),
        require('@/assets/photos/DSC_0341.jpg'),
        require('@/assets/photos/DSC_0255.jpg'),
        require('@/assets/photos/DSC_0337.jpg'),
        require('@/assets/photos/DSC_0032.jpg'),
        require('@/assets/photos/DSC_0278.jpg'),
        require('@/assets/photos/DSC_0280.jpg'),
        require('@/assets/photos/DSC_0188.jpg'),
        require('@/assets/photos/DSC_0334.jpg'),
        require('@/assets/photos/DSC_0335.jpg'),
        require('@/assets/photos/DSC_0514.jpg'),
      ]
    }
  },
  destroyed () {
    window.scroll(0, 0);
  }
}
</script>

<style scoped>
.picture_container ul {
  list-style: none;
  display: flex;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  margin: 30px 9.5vw 0;
  padding: 0;
}
.picture_container span {
  display: flex;
  width: 33.333333333%;
  height: auto;
}
img {
  width: 100%;
  height: 100%;
}
</style>

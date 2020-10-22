<template>
  <div class="gallery">
    <Header></Header>
    <div class="gallery_container">
      <div class="container">
        <ul>
          <span v-for="(image, index) in src" :key="image"><v-lazy-image class="img" :id="'img' + index" :src="image" /></span>
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
  name: 'Gallery',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      src: [ 
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
  },
  destroyed () {
    window.scroll(0, 0);
  }
}
</script>

<style scoped>
.gallery_container ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  margin: 0 9.5vw 30px;
  padding: 0;
}
.gallery_container span {
  border: solid 8px black;
  background-color: black;
  margin: 10px 0;
  width: 30%;
  height: auto;
}
.img {
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 800px) {
  .gallery_container span {
    border: solid 5px black;
    width: 100%;
  }
}
</style>

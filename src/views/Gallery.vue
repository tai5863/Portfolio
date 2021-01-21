<template>
  <div class="gallery">
    <Header></Header>
    <div class="gallery_container">
      <div class="container">
        <div class="item-wrapper" id="reel-wrapper">
          <h1 class="title">2020 Showreel - TouchDesigner</h1>
          <div class="iframe-wrapper">
            <iframe src="https://player.vimeo.com/video/502608124" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen class="reel"></iframe>
          </div>
        </div>
        <div class="item-wrapper">
          <!-- <h1 class="title">Photography</h1> -->
          <ul>
            <span v-for="(image, index) in src" :key="image"><v-lazy-image class="img" :id="'img' + index" :src="image" width="1920" height="1080" /></span>
          </ul>
        </div>
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
  mounted() {
    let titles = document.getElementsByClassName('title');
  
    titles.forEach((title) => {
      let txt_array = title.innerHTML.split('');
      
      title.innerHTML = '';

      txt_array.forEach((value, index) => {
        let new_element = document.createElement('span');
        new_element.innerHTML = value;
        new_element.style.color = "rgba(0, 0, 0, 0.0)";
        title.appendChild(new_element);
        let animation = new_element.animate([
          { color: "rgba(0, 0, 0, 0.0)", backgroundColor: 'rgb(' + Math.random(index) * 255 + ', ' + Math.random(index + 1) * 255 + ', ' + Math.random(index + 2) * 255 + ')' },
          { color: "rgba(0, 0, 0, 1.0)" }
        ], {
          duration: 200,
          delay: index * 20,
        })
        animation.onfinish = function() {
          new_element.style.color = "rgba(0, 0, 0, 1.0)";
        }
      })
    })
  },
  destroyed () {
    window.scroll(0, 0);
  }
}
</script>

<style scoped>
.gallery_container .container {
  margin: 0 9.5vw;
}
.item-wrapper {
  padding-top: 2vw;
}
#reel-wrapper {
  padding-bottom: 20vw;
}
.item-wrapper .title {
  font-family: Kiona;
  margin: 2vw auto;
  font-style: normal;
  font-weight: normal;
  font-size: min(30px, 3vw);
  text-align: left;

  color: #000000;  

}
.iframe-wrapper {
  position: relative;
}
.iframe-wrapper::before {
  content: "";
  display: inline-block;
  padding-top: 56.25%;
}
.iframe-wrapper .reel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
}
.gallery_container ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  margin: 0;
  padding: 0;
}
.gallery_container span {
  border: solid 8px black;
  background-color: black;
  margin: 0 0 20px 0;
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

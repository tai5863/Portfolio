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
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Picture',
  components: {
    Header,
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
      ]
    }
  },
  mounted: function(){

    let timer = null;

    let height = document.documentElement.offsetHeight;
      
    try { 
      window.addEventListener('scroll', addText, false);
    } catch (e) { 
      window.attachEvent('onscroll', addText);
    } 

    function addText(){
      
      clearTimeout(timer);

      timer = setTimeout(function() {
        
        let scrollHeight = document.documentElement.scrollHeight;

        let scrollTop = document.documentElement.scrollTop;

        let scrollPosition = height + scrollTop;

        let proximity = 0;

        console.log((scrollHeight - scrollPosition) / scrollHeight);

        if ((scrollHeight - scrollPosition) / scrollHeight <= proximity) {
          let isMessageEnd = document.getElementById('message_end') == null;
          if (isMessageEnd == false) {
            let message_end = document.getElementById('message_end');
            message_end.style.opacity = 1;
          } else {
            return;
          }
        }
      }, 300);
    }
  },
  destroyed: function(){
    window.scroll(0, 0);
  }
}
</script>

<style scoped>
.picture_container {
  background-color: #101011;
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  scrollbar-width: none;
}
.picture_container::-webkit-scrollbar {
  display: none;
}
.picture_container .container {
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  margin: auto;
}
.picture_container ul {
  list-style: none;
  display: flex;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  margin: 0 auto;
  padding: 0;
}
.picture_container span {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  min-width: 0;
  width: 33.33333%;
  transition-duration: 0.35s;
  transform: scale(0.9);
  text-align: -webkit-match-parent;
}
img {
  width: 100%;
  height: auto;
}

@media screen and (max-width: 800px) {
 .picture_container .container {
   top: 15%;
 } 
}
</style>

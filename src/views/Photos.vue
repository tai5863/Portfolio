<template>
  <div id="photos">
    <h2 class="photos_title">Photos</h2>
    <div class="message_container begin">
      <p class="message begin">これは、僕が好きな景色たちです。</p>
    </div>
    <div id="photos_container">
      <ul>
        <span v-for="(image, index) in images" :key="image"><img class="img" :id="'img' + index" :src="image"></span>
      </ul>
    </div>
    <div class="message_container end">
      <h3 class="message end" id="message_end">And more...</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Photos',
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
    console.log(this.images);
    
    try { 
      window.addEventListener('scroll', addText, false);
    } catch (e) { 
      window.attachEvent('onscroll', addText);
    }
    
    let timer = null;

    let height = document.documentElement.offsetHeight;

    function addText(){
      clearTimeout(timer);
      timer = setTimeout(function() {
        
        let scrollHeight = document.documentElement.scrollHeight;

        let scrollTop = document.documentElement.scrollTop;

        let scrollPosition = height + scrollTop;

        let proximity = 0;

        if ((scrollHeight - scrollPosition) / scrollHeight <= proximity) {
          let message_end = document.getElementById('message_end');
          message_end.style.opacity = 1;
        }
      }, 200 );
    }
  }
}
</script>

<style scoped>
@keyframes show {
	0% {
		transform: translate(0, 2em);
		opacity: 0;
  }
	100% {
		transform: translate(0, 0);
		opacity: 1;
	}
}
#photos {
  width: 100vw;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 20%;
}
.photos_title {
  animation: show 0.6s both;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
  font-size: 30px;
  text-align: center;
}
.message_container.begin {
  margin-top: 50px;
}
.message.begin::before {
  opacity: 1;
}
.message.begin {
  animation: show 0.6s both;
  animation-delay: 0.2s;
  color: white;
  font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif;
  font-weight: 1000;
}
#photos_container {
  animation: show 0.6s both;
  animation-delay: 0.4s;
  margin-top: 50px;
  padding: 0 8.5%;
}
#photos_container ul {
  list-style: none;
  display: flex;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  margin: 0 auto;
  padding: 0;
}
#photos_container span {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  min-width: 0;
  width: 33.33333%;
  transition-duration: 0.35s;
  transform: scale(0.9);
  text-align: -webkit-match-parent;
  cursor: pointer;
}
#photos_container span:hover {
  transform: scale(0.975);
}
img {
  width: 100%;
  height: auto;
}
.message_container.end {
  margin: 0;
  min-height: 150px;
}
#message_end {
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 22px;
  font-weight: 700;
  opacity: 0;
  transition-duration: 0.6s;
}

@media screen and (max-width: 800px){
  #photos_container ul {
    justify-content: center;
  }
  #photos_container span {
    width: 90%;
  }
  .img {
    margin: 50px 0;
  }
}
</style>

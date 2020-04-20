<template>
  <div class="works">
    <h2 class="works_title">Works</h2>
    <div class="message_container begin">
      <p class="message begin">これは、僕の作品たちです。</p>
    </div>
    <div class="works_container">
      <ul style="padding: 0; list-style: none;">
        <li v-for="work in works" :key="work.key">
          <h2 class="work_title">{{ work.name }}</h2>
          <div class="message_container work">
            <p class="message work">{{ work.message1 }}</p>
            <p class="message work" v-if="work.message2">{{ work.message2 }}</p>
          </div>
          <div class="img_container">
            <ul style="padding: 0; list-style: none;">
              <li><img :src="work.image" class="img" @click="openLink(work.url)"></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Works',
  data(){
    return {
      works: [
        { 
          name: '春日新歓2020情報Web', 
          message1: '筑波大学春日エリアをメインの活動場所とする情報メディア創成学類と図書館情報学類が行った春日新歓のWebサイト。', 
          message2: 'デザインとフロントエンドの実装を担当し、委員会用ページの制作も行った。', 
          image: require('@/assets/春日新歓情報Web.png'),
          url: 'https://kasugashinkan.com/?#/'
        },
        {
          name: 'TouchDesigner Works', 
          message1: 'TouchDesignerで制作した映像。', 
          image: require('@/assets/TD1.png'),
          url: ''
        },
        // {
        //   name: 'WebGL Demos', 
        //   message1: 'WebGLを用いたデモ。', 
        //   message2: 'Chromeでご覧ください。', 
        //   image: require('@/assets/WebGL1.png'),
        //   url: 'https://tai5863.github.io/Particle_Transition/Particle_Transition.html'
        // },
      ]
    }
  },
  methods: {
    openLink: function(link){
      if (link != '') {
        window.open(link);
      }
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
.works {
  position: absolute;
  top: 20%;
  width: 100vw;
}
.works_title {
  animation: show 0.6s both;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
  font-size: 30px;
  text-align: center;
}
.message_container.begin {
  margin-top: 50px;
}
.message.begin {
  animation: show 0.6s both;
  animation-delay: 0.2s;
  color: white;
  font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif;
  font-weight: 1000;
}
.works_container {
  animation: show 0.6s both;
  animation-delay: 0.4s;
  margin-top: 50px;
  text-align: center; 
}
.works_container li {
  padding-bottom: 50px;
}
.work_title {
  color: white;
  font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif;
  font-weight: 1000;
}
.message_container.work {
  margin-top: 50px;
  margin-left: 100px;
  margin-right: 100px;
}
.message.work {
  animation: show 0.6s both;
  animation-delay: 0.2s;
  color: white;
  font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif;
  font-weight: 1000;
}
.img_container {
  margin-top: 50px;
}
.img {
  width: 50%; 
  min-width: 500px;
  cursor: pointer;
}
@media screen and (max-width: 979px) {
  .works_container {
    display: block;
  }
  .message_container.work {
    margin-left: 70px;
    margin-right: 70px;
  }
  .img {
    min-width: 300px;
  } 
}
</style>


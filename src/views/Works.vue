<template>
  <div class="works">
    <MixedColorNoise :colors="colors"></MixedColorNoise>
    <Header></Header>
    <div class="works_container">
      <div class="container">
        <div v-for="work in works" :key="work.key" class="work" :id="work.name">
          <h1 class="work_title">{{ work.name }}</h1>
          <p class="work_date">{{ work.date }}</p>
          <div class="img_container">
            <img :src="work.image" class="img first" @click="openLink(work.url)">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import MixedColorNoise from '@/components/MixedColorNoise.vue'

export default {
  name: 'Works',
  components: {
    Header,
    MixedColorNoise
  },
  data(){
    return {
      colors: [[0.0, 0.0902, 0.498], [0.0, 0.7333, 1.0]],
      works: [
        { 
          name: 'Kasuga Shinkan 2020 Information', 
          message1: '筑波大学春日エリアをメインの活動場所とする情報メディア創成学類と図書館情報学類が行った春日新歓のWebサイト。', 
          message2: 'デザインとフロントエンドの実装を担当し、委員会用ページの制作も行った。', 
          image: require('@/assets/春日新歓情報Web1.png'),
          date: '2020.04',
          url: 'https://kasugashinkan.com/?#/',
        },
        { 
          name: 'Snap Photos', 
          message1: '筑波大学春日エリアをメインの活動場所とする情報メディア創成学類と図書館情報学類が行った春日新歓のWebサイト。', 
          message2: 'デザインとフロントエンドの実装を担当し、委員会用ページの制作も行った。', 
          image: require('@/assets/DSC_0337.jpg'),
          date: '2019 - 2020',
          url: '',
        },
        {
          name: 'WebGL Demos', 
          message1: 'WebGLを用いたデモ。', 
          message2: '「Instancing with TransformFeedback」や「Particle Transition」などがある。', 
          image: require('@/assets/WebGL1.png'),
          date: '2019 - 2020',
          url: 'https://tai5863.github.io/ParticleTransition/',
        },
      ]
    }
  },
  destroyed: function(){
    window.scroll(0, 0);
  },
  methods: {
    openLink: function(link){
      if (link != '') {
        window.open(link);
      }
    },
  }
}
</script>

<style scoped>
.works_container {
  background-color: rgba(0, 0, 0, 0.6);
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  scrollbar-width: none;
}
.works_container::-webkit-scrollbar {
  display: none;
}
.works_container .container {
  position: absolute;
  top: 30%;
}
.work {
  padding-bottom: 300px;
}
.work_title {
  font-family: Sarpanch;
  font-style: normal;
  font-weight: normal;
  font-size: min(46px, 4vw);
  line-height: min(64px, 3vh);
  text-align: center;

  color: #FFFFFF;
}
.work_date {
  position: relative;
  text-align: right;
  margin: 0;
  right: 25%;

  font-family: Sarpanch;
  font-style: normal;
  font-weight: normal;
  font-size: min(25px, 2.5vw);
  line-height: 36px;

  color: #E0E0E0;
}
.img_container {
  text-align: center;
}
.img {
  margin: 0 auto;
  width: 50%; 
  min-width: 300px;
  cursor: pointer;
}

@media screen and (max-width: 1200px) {
  .work {
    padding-bottom: 70px;
  }
}

@media screen and (max-width: 600px) {
  .work_date {
    right: calc((100vw - 300px) / 2);
  }
}
</style>


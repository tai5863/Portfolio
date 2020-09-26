<template>
  <div class="works">
    <router-view></router-view>
    <MixedColorNoise :colors="colors"></MixedColorNoise>
    <Header></Header>
    <div class="works_container" id="works_container">
      <div class="container">
        <div v-for="work in works" :key="work.key" class="_work">
          <h1 class="work_title">{{ work.name }}</h1>
          <p class="work_date">{{ work.date }}</p>
          <div class="img_container">
            <img :src="work.images[0]" class="img first" @click="openWork(work)">
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
  data () {
    return {
      colors: [[0.0, 0.0902, 0.498], [0.0, 0.7333, 1.0]],
      works: [
        { 
          name: 'Playing Tokyo', 
          tag: 'playing_tokyo',
          messages: [
            ' - RhizomatiksによるオンラインイベントPlayingTokyoにてVJを担当した。', 
            '', 
          ],
          images: [
            require('@/assets/works/playing_tokyo01.png'),
            require('@/assets/works/playing_tokyo02.png'),
            require('@/assets/works/playing_tokyo03.png'),
            require('@/assets/works/playing_tokyo04.png'),
          ],
          date: '2020.09.25',
          url: 'https://playing.super-flying.tokyo/',
        },
        { 
          name: 'Unperpendiculaire mesdemoiselle', 
          tag: 'unperpendiculaire_mesdemoiselle',
          messages: [
            ' - Objet αによるエレクトロアコースティックライブのVJ・映像制作を担当した。', 
            '', 
          ],  
          images: [
            require('@/assets/works/unperpendiculaire_mesdemoiselle01.jpg'),
          ],
          date: '2020.06.06',
          url: 'https://youtu.be/XqVY7cO24AU',
        },
        { 
          name: 'Staying Tokyo', 
          tag: 'staying_tokyo',
          messages: [
            ' - ゲストVJ参加募集に応募し, RhizomatiksによるオンラインイベントStayingTokyoにてVJを担当した。', 
            '', 
          ],
          images: [
            require('@/assets/works/staying_tokyo01.png'),
            require('@/assets/works/staying_tokyo02.png'),
          ],
          date: '2020.05.22',
          url: 'https://staying.super-flying.tokyo/',
        },
        { 
          name: 'Kasuga Shinkan 2020 Information', 
          tag: 'kasuga_shinkan_2020_information',
          messages: [
            ' - 筑波大学春日エリアをメインの活動場所とする情報メディア創成学類と図書館情報学類が行った春日新歓のWebサイト。', 
            ' - デザインとフロントエンドの実装を担当し、委員会用ページの制作も行った。', 
          ],
          images: [
            require('@/assets/works/kasuga_shinkan01.png'),
            require('@/assets/works/kasuga_shinkan02.png'),
          ],
          cooperators: [{
            name: 'Kazuki Yamaura',
            'direction': 'Backend',
            url: 'https://twitter.com/kzkymur',
          }],
          date: '2020.04',
          url: 'https://kasugashinkan.com/?#/',
        }
      ]
    }
  },
  mounted () {
    this.$nextTick(function() {
      if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
        const vh = window.innerHeight;
        document.getElementsByClassName('works_container')[0].style.height = vh + 'px';
      }
    });
  },
  destroyed: function() {
    window.scroll(0, 0);
  },
  methods: {
    openLink: function(link) {
      if (link != '') {
        window.open(link);
      }
    },
    openWork: function(work) {
      this.$router.props = work;
      this.$router.push({ path: '/works/' + work.tag });
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
._work {
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
  ._work {
    padding-bottom: 70px;
  }
}

@media screen and (max-width: 600px) {
  .work_date {
    right: calc((100vw - 300px) / 2);
  }
}
</style>


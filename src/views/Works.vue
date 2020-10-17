<template>
  <div class="works">
    <router-view></router-view>
    <!--<MixedColorNoise :colors="colors"></MixedColorNoise>-->
    <Header></Header>
    <div class="works_container" id="works_container">
      <div class="container">
        <div v-for="work in works" :key="work.key" class="_work">
          <h1 class="work_title">{{ work.name }}</h1>
          <p></p>
          <div class="img_container">
            <img :src="work.images[0]" class="img first" @click="openWork(work)">
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
// import MixedColorNoise from '@/components/MixedColorNoise.vue'

export default {
  name: 'Works',
  components: {
    Header,
    Footer,
    // MixedColorNoise
  },
  data () {
    return {
      colors: [[0.0, 0.0902, 0.498], [0.0, 0.7333, 1.0]],
      works: [
        { 
          name: 'Playing TOKYO - DJ VJ Session', 
          tag: 'playing_tokyo',
          messages: [
            'RhizomatiksによるオンラインイベントPlayingTOKYOにてVJを担当した.', 
          ],
          images: [
            require('@/assets/works/playing_tokyo01.png'),
            require('@/assets/works/playing_tokyo02.png'),
            require('@/assets/works/playing_tokyo03.png'),
            require('@/assets/works/playing_tokyo04.png'),
          ],
          tools: 'TouchDesigner',
          date: '2020.09.25',
          url: 'https://playing.super-flying.tokyo/',
        },
        { 
          name: 'Unperpendiculaire mesdemoiselle', 
          tag: 'unperpendiculaire_mesdemoiselle',
          messages: [
            'Objet αによるエレクトロアコースティックライブのVJ・映像制作を担当した.', 
          ],  
          images: [
            require('@/assets/works/unperpendiculaire_mesdemoiselle01.jpg'),
          ],
          cooperators: [{
            name: 'Hiroshi Nakamura',
            direction: 'Saxophone and Electronics',
            url: '',
          },{
            name: 'Wataru Iwata',
            direction: 'Piano and Electronics',
            url: '',
          }, {
            name: 'Kosaku Namikawa (TParty)',
            direction: 'LiveStreaming',
            url: 'https://twitter.com/73_ch',
          }, {
            name: 'Yuga Tsukuda (TParty)',
            direction: '3D Modeling',
            url: 'https://yuga-tsukuda.amebaownd.com/',
          }],
          tools: 'TouchDesinger',
          date: '2020.06.06',
          url: 'https://youtu.be/XqVY7cO24AU',
        },
        { 
          name: 'Staying TOKYO - DJ VJ Session', 
          tag: 'staying_tokyo',
          messages: [
            '若手VJ参加募集に応募し, RhizomatiksによるオンラインイベントStayingTOKYOにてVJを担当した.', 
          ],
          images: [
            require('@/assets/works/staying_tokyo01.png'),
            require('@/assets/works/staying_tokyo02.png'),
          ],
          tools: 'TouchDesinger',
          date: '2020.05.22',
          url: 'https://staying.super-flying.tokyo/',
        },
        { 
          name: 'Kasuga Shinkan 2020 Information', 
          tag: 'kasuga_shinkan_2020_information',
          messages: [
            '筑波大学春日エリアをメインの活動場所とする情報メディア創成学類と図書館情報学類が行った春日新歓2020のWebサイト.', 
            'COVID-19の影響で学校に来られない新入生が学校生活に関わる様々な情報を得られるようにと作成を始めた.', 
            'デザインとフロントエンドの実装を担当し、委員会用ページの制作も行った.', 
          ],
          images: [
            require('@/assets/works/kasuga_shinkan01.png'),
            require('@/assets/works/kasuga_shinkan02.png'),
          ],
          cooperators: [{
            name: 'Kazuki Yamaura (University of Tsukuba)',
            direction: 'Backend',
            url: 'https://twitter.com/kzkymur',
          }],
          tools: 'Vue.js, Adobe.XD', 
          date: '2020.04',
          url: 'https://kasugashinkan.com/?#/',
        }
      ]
    }
  },
  mounted() {
    let titles = document.getElementsByClassName('work_title');
  
    titles.forEach((title) => {
      let txt_array = title.innerHTML.split('');
      
      title.innerHTML = '';

      txt_array.forEach((value, index) => {
        let new_element = document.createElement('span');
        new_element.innerHTML = value;
        new_element.style.color = "rgba(0, 0, 0, 0.0)";
        title.appendChild(new_element);
        let animation = new_element.animate([
          { color: "rgba(0, 0, 0, 0.0)", backgroundColor: 'rgb(0, 0, 0)' },
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
.works_container .container {
  margin: 0 5%;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
}
._work {
  width: 50%;
  margin-top: 5%;
}
.work_title {
  width: 80%;
  margin: 0 auto;
  font-family: Sarpanch;
  font-style: normal;
  font-weight: normal;
  font-size: min(35px, 2vw);
  text-align: center;
}
.img_container {
  text-align: center;
}
.img {
  margin: 0 auto;
  width: 80%; 
  min-width: 300px;
  cursor: pointer;
}

.img_container :hover {
  opacity: 0.8;
  transition-duration: 0.5s;
}

@media screen and (max-width: 1200px) {
  ._work {
    width: 100%;
  }
  .work_title {
    font-size: 3vw;
  }
  .img {
    width: 90%;
  }
}
</style>


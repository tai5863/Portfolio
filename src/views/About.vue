<template>
  <div class="about">
    <Header></Header>
    <MixedColorNoise :colors="colors"></MixedColorNoise>
    <div class="about_container">
      <div class="container">
        <div class="photo_container"><img class="photo" src="@/assets/MyProfile.jpg"></div>
        <div class="intro_container">
          <h1 class="name">Taichi Uchida</h1>
          <h2 class="position">Visual Artist / Programmer</h2>
          <p class="intro">2001年、京都府出身。2019年より筑波大学情報メディア創成学類に所属。目に見える何かを作ることが好き。プログラミングを用いた映像表現やWebフロント、写真などに興味を持つ。</p>
          <p class="skills">WebGL / TouchDesigner / GLSL</p>
          <nav class="accounts">
            <ul class="footer_ul">
              <li v-for="item in items" :key="item.id"><a><img class="icon" :src="item.icon" border="0" width="25" @click="openLink(item.link)"></a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script> 
import Header from '@/components/Header.vue'
import MixedColorNoise from '@/components/MixedColorNoise.vue'

export default {
  name: 'About',
  components: {
    Header,
    MixedColorNoise
  },
  data () {
    return {
      colors: [[1.0, 0.0, 0.0], [1.0, 1.0, 1.0]],
      items: [
        { icon: require('@/assets/twitter-icon.png'), link: 'https://twitter.com/_t_ai__' }, 
        { icon: require('@/assets/instagram-icon.png'), link: 'https://www.instagram.com/_t_ai__/'}, 
        { icon: require('@/assets/git-icon.png'), link: 'https://github.com/tai5863/' }
      ]
    }
  },
  destroyed: function(){
    window.scroll(0, 0);
  },
  methods: {
    openLink: function(link){
      window.open(link);
    }
  }
}
</script>

<style scoped>
.about_container {
  background-color: rgba(0, 0, 0, 0.6);
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  scrollbar-width: none;
}
.about_container::-webkit-scrollbar {
  display: none;
}
.about_container .container {
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  margin: auto;
  width: 70vw;
  display: flex;
  justify-content: space-between;
}
.photo_container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.photo {
  width: 50%;
}
.intro_container {
  background-color: rgba(0, 0, 0, 0.6);
  width: 50%;
  padding: 30px 50px;
}
.about_container .name {
  text-align: left;

  font-family: Sarpanch;
  font-style: normal;
  font-weight: normal;
  font-size: min(50px, 3vw);
  line-height: 70px;

  color: #FFFFFF;

  margin: 0;
}
.position {
  text-align: left;

  font-family: Sarpanch;
  font-style: normal;
  font-weight: normal;
  font-size: min(39px, 1.8vw);
  line-height: 55px;

  color: #FFFFFF;
}
.intro {
  text-align: left;

  font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: min(20px, 1vw);
  line-height: 36px;

  color: #FFFFFF;
}
.skills {
  font-family: Sarpanch;
  font-style: normal;
  font-weight: normal;
  font-size: min(27px, 1.5vw);
  line-height: 38px;

  color: #FFFFFF;
}
.accounts {
  margin: 0 auto;
  max-width: 200px;
}
.footer_ul {
  display: flex;
  justify-content: space-between;
  padding: 0;
  list-style: none;
}
.icon {
  cursor: pointer;
}
</style>


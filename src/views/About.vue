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
        { icon: require('@/assets/icons/twitter-icon.png'), link: 'https://twitter.com/_t_ai__' }, 
        { icon: require('@/assets/icons/instagram-icon.png'), link: 'https://www.instagram.com/_t_ai__/'}, 
        { icon: require('@/assets/icons/git-icon.png'), link: 'https://github.com/tai5863/' }
      ]
    }
  },
  destroyed () {
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
  font-size: min(50px, 4.5vw);
  line-height: min(70px, 5vw);

  color: #FFFFFF;

  margin: 0;
}
.position {
  text-align: left;

  font-family: Sarpanch;
  font-style: normal;
  font-weight: normal;
  font-size: min(32px, 3.5vw);
  line-height: min(55px, 4vw);

  color: #FFFFFF;
}
.intro {
  text-align: left;

  font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: min(20px, 2vw);
  line-height: min(36px, 4vw);

  color: #FFFFFF;
}
.skills {
  font-family: Sarpanch;
  font-style: normal;
  font-weight: normal;
  font-size: min(27px, 2.5vw);
  line-height: 38px;

  color: #FFFFFF;

  margin: 50px 0;
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

@media screen and (max-width: 1620px) {
  .intro_container {
    width: 80%;
    margin: 100px auto; 
  }
}
@media screen and (max-width: 800px) {  
  .about_container .container {
    display: block;
    top: 20%;
  }
  .photo {
    width: 40%;
    max-width: 300px;
  }
  .intro_container {
    margin: 60px auto; 
    padding: 20px 30px;
  }
  .skills {
    margin: auto;
  }
  .icon {
    transform: scale(0.8);
  }
  .accounts {
    width: 70%;
  }
}
</style>


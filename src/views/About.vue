<template>
  <div class="about">
    <Header></Header>
    <div class="about_container">
      <div class="container">
        <div class="photo_container"><img class="photo" :src=src width="1280" height="1280"></div>
        <div class="intro_container">
          <div style="display: block">
            <h1 class="name">Taichi Uchida / 内田 大智</h1>
            <h2 class="position">Visual Artist / Programmer</h2>
            <p class="intro"> - Affiliation : University of Tsukuba, Media Arts, Science and Technology</p>
            <p class="intro"> - Skills : WebGL / TouchDesigner / GLSL / JS / Vue.js</p>
            <p class="intro"> - Interests : Creative Coding / Visual Production / Web / Machine Learning</p>
            <p class="intro"> - Accounts : 
              <span v-for="item in items" :key="item.id" @click="openLink(item.url)"><span class="account">{{ item.name }}</span><span v-if="item.cut"> / </span></span>
            </p>
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

export default {
  name: 'About',
  components: {
    Header,
    Footer,
  },
  data () {
    return {
      colors: [[1.0, 0.0, 0.0], [1.0, 1.0, 1.0]],
      items: [
        { name: 'Twitter', url: 'https://twitter.com/_t_ai__', cut: 1 }, 
        { name: 'Instagram', url: 'https://www.instagram.com/_t_ai__/', cut: 1 }, 
        { name: 'GitHub', url: 'https://github.com/tai5863/', cut: 0 }
      ],
      src: require('@/assets/photos/MyProfile.' + localStorage.format)
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
.about_container .container {
  margin: 4vw auto;
  width: 81vw;
  display: flex;
  height: 100%;
}
.about_container .photo_container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}
.about_container .photo {
  width: 50%;
  height: auto;
}
.intro_container {
  display: flex;
  justify-content: left;
  align-items: center;
}
.about_container .name {
  text-align: left;

  font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: min(40px, 3vw);

  margin: 0;
}
.position {
  text-align: left;

  font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: min(22px, 2.3vw);

  color: rgb(140, 140, 140);
}
.intro {
  text-align: left;

  font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: min(18px, 2vw);
}
.skills {
  font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: min(18px, 2vw);
  line-height: 38px;
}
.account {
  cursor: pointer;
  text-decoration: underline black;
}

@media screen and (max-width: 1200px) {  
  .about_container .container {
    display: block;
    margin: 10% auto 0;
  }
  .about_container .photo_container {
    width: 100%;
  }
  .about_container .photo {
    margin: 0 0 20%;
    width: 40%;
  }
  .intro_container {
    width: 100%;
    margin: 0 auto; 
  }
  .skills {
    margin: auto;
  }
}
</style>


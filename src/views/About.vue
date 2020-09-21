<template>
  <div class="about">
    <h1 class="about_title">About</h1>
    <div class="message_container begin">
      <p class="message begin">これは、僕の自己紹介です。</p>
    </div>
    <div id="about_container">
      <div class="content" id="photo_container"><img class="me_photo" src="@/assets/MyProfile.jpg"></div>
      <div class="content">
        <h2>Taichi Uchida</h2>
        <div class="intro_container"><p class="me_intro">2001年、京都府出身。2019年より筑波大学情報メディア創成学類に所属。</p></div>
        <div class="intro_container"><p class="me_intro">目に見える何かを作ることが好き。プログラミングを用いた映像表現やWebフロント、写真などに興味を持つ。</p></div>
        <div class="skills_container">
          <p class="me_skills">WebGL, TouchDesigner, Vue.js, javascript, python</p>
        </div>
        <nav class="me_accounts">
          <ul class="footer_ul">
            <li v-for="item in items" :key="item.id"><a><img class="icon" :src="item.icon" border="0" width="25" @click="openLink(item.link)"></a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
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
.about {
  position: absolute;
  top: 20%;
  width: 100vw;
}
.about_title {
  animation: show 0.6s both;
  -webkit-animation: show 0.6s both;
  font-family: 'Segoe UI';
  color: black;
  font-size: 30px;
  text-align: center;
}
.message_container.begin {
  margin-top: 50px;
}
.message.begin {
  animation: show 0.6s both;
  -webkit-animation: show 0.6s both;
  animation-delay: 0.2s;
  -webkit-animation-delay: 0.2s;
  font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif;
  font-weight: 1000;
}
#about_container {
  animation: show 0.6s both;
  -webkit-animation: show 0.6s both;
  animation-delay: 0.4s;
  -webkit-animation-delay: 0.4s;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 0.8em;
  padding: 50px 8.5%;
  margin: 0;
}
#about_container > .content {
  overflow: auto;
  padding: 1em;
}
#photo_container {
  display: flex;
  justify-content: center;
  align-items: center;
}
h2 {
  font-size: 30px;
}
.me_photo {
  width: 50%;
  max-width: 250px;
  text-align: center;
  border-radius: 1px;
  margin: 0 auto;
}
.me_intro {
  font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif;
  font-weight: 1000;
  text-align: center;
}
.intro_container {
  margin-top: 30px;
  text-align: center;
}
.skills_container {
  margin-top: 3%;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
h3 {
  margin-top: 30px;
  color: black;
}
.me_skills {
  margin-top: 30px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
}
.me_accounts {
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
@media screen and (max-width: 979px) {
  .me_intro {
    display: inline-block;
  }
  #about_container {
    display: block;
    padding: 8% 8.5%;
  }
  #about_container > .content {
    overflow: auto;
    padding: 3%;
  }
  .me_photo {
    width: 60%;
  }
}
@media screen and (max-width: 480px) {
  #about_container {
    margin-bottom: 70px;
  }
  #about_container > .content {
    overflow: auto;
    padding: 5%;
  }
  .me_photo {
    width: 70%;
  }
}
</style>


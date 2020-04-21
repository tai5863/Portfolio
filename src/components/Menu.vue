<template>
  <div id="menu">
    <img src="@/assets/batu-icon.png" id="batu" width="15px" @click="closeMenu">
    <div id="menu_container">
      <h2 class="menu_title">Menu</h2>
      <div id="item_container">
        <ul class="header_ul">
          <li v-for="section in sections" :key="section.id" @click="closeMenu"><router-link :to="'/' + section" class="navs">{{ section }}</router-link></li>
        </ul>
      </div>
    </div>
    <div class="footer_comp">
      <div class="footer_container">
        <h2 class="me_name" @click="closeMenu"><router-link to="/" class="home_nav">Taichi Uchida</router-link></h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      sections: ['photos', 'works', 'about']
    }
  },
  mounted: function(){
    document.addEventListener("mousewheel", this.scroll_control, { passive: false });
    document.addEventListener("touchmove", this.scroll_control, { passive: false });
    
  },
  methods: {
    openLink: function(link){
      window.open(link);
    },
    closeMenu: function(){
      let eMenu = document.getElementById('menu');
      eMenu.style.opacity = 0;

      document.removeEventListener("mousewheel", this.scroll_control, { passive: false });
      document.removeEventListener('touchmove', this.scroll_control, { passive: false });
      this.$emit('close');
    },
    scroll_control: function(event){
      event.preventDefault();
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
#menu {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.95);
  transition-duration: 0.6s;
  -webkit-transition-duration: 0.6s;
  z-index: 1000;
}
#batu {
  position: fixed;
  top: 30px;
  right: 30px; 
}
#menu_container {
  width: 100vw;
  position: absolute;
  top: 20%;
}
.menu_title {
  animation: show 0.6s both;
  -webkit-animation: show 0.6s both;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
  font-size: 30px;
  text-align: center;
}
#item_container {
  animation: show 0.6s both;
  -webkit-animation: show 0.6s both;
  animation-delay: 0.4s;
  -webkit-animation-delay: 0.4s;
  margin-top: 30px;
  padding: 0 8.5%;
}
#item_container .header_ul {
  padding: 0;
  display: inline-block;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 21px;
  list-style: none;
}
#item_container .header_ul li {
  margin: 0 auto;
  margin-bottom: 50px;
}
#item_container .navs {
  width: 100%;
  text-decoration: none;
  color: rgba(255, 255, 255, 1);
  transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
}
#item_container .me_accounts {
  margin: 0 auto;
}
#menu .home_nav {
  display: block;
}
</style>

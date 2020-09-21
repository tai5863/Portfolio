<template>
  <div class="header_comp">
    <div class="header_container">
      <nav class="nav_for_sections">
        <ul class="header_ul">
          <li v-for="section in sections" :key="section.id"><router-link :to="'/' + section" :id="section + '_nav'">{{ section }}</router-link></li>
        </ul>
      </nav>
      <img src="@/assets/menu-icon.png" width="25px" class="menu" @click="pushMenu">
    </div>
    <transition name="fade">
      <Menu v-if="isMenu" @close="closeMenu"></Menu>
    </transition>
  </div>
</template>

<script>
import Menu from '@/components/Menu'

export default {
  name: 'Header',
  components: {
    Menu
  },
  data () {
    return {
      isMenu: false,
      sections: ['works', 'about', 'picture'],
      items: [
        { icon: require('@/assets/twitter-icon.png'), link: 'https://twitter.com/_t_ai__' }, 
        { icon: require('@/assets/instagram-icon.png'), link: 'https://www.instagram.com/_t_ai__/'}, 
        { icon: require('@/assets/git-icon.png'), link: 'https://github.com/tai5863/' }
      ]
    }
  },
  watch: {
    '$route' (to) {
      let route_list = ['/works', '/about', '/picture'];
      let route_names = [];

      for (let i = 0; i < route_list.length; i++) {
        route_names.push(route_list[i].slice(1));
      }

      if (to.path != '/') {

        let to_name = to.path.slice(1);
        let result = route_names.filter(route_name => route_name != to_name);

        let eRoute = document.getElementById(to_name + '_nav');
        eRoute.style.color = 'black';
        
        for (let i = 0; i < result.length; i++) {
          let eElse = document.getElementById(result[i] + '_nav');
          eElse.style.color = 'rgba(0, 0, 0, 0.3)';
        }

      } else {

        for (let i = 0; i < route_names.length; i++) {
          let result = document.getElementById('photos_nav');
          if (result) {
            let eEach = document.getElementById(route_names[i] + '_nav');
            eEach.style.color = 'rgba(0, 0, 0, 0.3)';
          }
        }
      }
    }
  },
  methods: {
    openLink: function(link){
      window.open(link);
    },
    pushMenu: function(){
      this.isMenu = true;
    },
    closeMenu: function(){
      this.isMenu = false;
    }
  }
}
</script>

<style>
.header_comp {
  width: 100vw;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0);
}
.header_container .header_ul {
  font-family:'Segoe UI';
  font-weight: bold;
  font-size: 21px;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
  height: 50px;
}
.header_container .header_ul li {
  margin-right: calc(5% - 30px);
}
#photos_nav {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.3);
  transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
}
#works_nav {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.3);
  transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
}
#about_nav {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.3);
  transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
}
.menu {
  display: none;
}
#menu {
  display: none;
}
@media screen and (max-width: 480px) {
  .header_container .header_ul {
    display: none;
  }
  .menu {
    position: fixed;
    top: 25px;
    right: 25px;
    display: block;
    cursor: pointer;
  }
  #menu {
  display: block;
}
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
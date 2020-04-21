<template>
  <div class="header_comp">
    <div class="header_container">
      <nav class="nav_for_sections">
        <ul class="header_ul">
          <li v-for="section in sections" :key="section.id"><router-link :to="'/' + section" :id="section + '_nav'">{{ section }}</router-link></li>
        </ul>
      </nav>
      <nav class="nav_for_small">
        <input id="nav-input" type="checkbox" class="nav-unshown">
        <label id="nav-open" for="nav-input"><span></span></label>
        <label class="nav-unshown" id="nav-close" for="nav-input"></label>
        <div id="nav-content">
          <ul class="header_ul">
            <li v-for="section in sections" :key="section.id" @click="closeNav"><router-link :to="'/' + section" :id="section + '_nav_for_small'">{{ section }}</router-link></li>
          </ul>
          <nav class="me_accounts">
          <ul class="footer_ul">
            <li v-for="item in items" :key="item.id"><a><img class="icon" :src="item.icon" border="0" width="25" @click="openLink(item.link)"></a></li>
          </ul>
        </nav>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      sections: ['photos', 'works', 'about'],
      items: [
        { icon: require('@/assets/twitter-icon.png'), link: 'https://twitter.com/_t_ai__' }, 
        { icon: require('@/assets/instagram-icon.png'), link: 'https://www.instagram.com/_t_ai__/'}, 
        { icon: require('@/assets/git-icon.png'), link: 'https://github.com/tai5863/' }
      ]
    }
  },
  watch: {
    '$route' (to) {
      let route_list = ['/photos', '/works', '/about'];
      let route_names = [];

      for (let i = 0; i < route_list.length; i++) {
        route_names.push(route_list[i].slice(1));
      }

      if (to.path != '/') {

        let to_name = to.path.slice(1);
        let result = route_names.filter(route_name => route_name != to_name);

        let eRoute = document.getElementById(to_name + '_nav');
        eRoute.style.color = 'white';
        
        for (let i = 0; i < result.length; i++) {
          let eElse = document.getElementById(result[i] + '_nav');
          eElse.style.color = 'rgba(255, 255, 255, 0.3)';
        }

      } else {

        for (let i = 0; i < route_names.length; i++) {
          let result = document.getElementById('photos_nav');
          if (result) {
            let eEach = document.getElementById(route_names[i] + '_nav');
            eEach.style.color = 'rgba(255, 255, 255, 0.3)';
          }
        }
      }

    }
  },
  methods: {
    openLink: function(link){
      window.open(link);
    },
    closeNav: function(){
      console.log('close');
      let eInput = document.getElementById('nav-input');
      eInput.checked = false;
    }
  }
}
</script>

<style>
.header_container {
  position: fixed;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0);
  overflow: hidden;
  z-index: 1000;
}
.home {
  text-decoration: none;
  color: white;
}
.header_ul {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 21px;
  list-style: none;
  display: flex;
  margin-top: 50px;
  height: 50px;
  padding-left: 30px;
}
.header_ul li {
  margin-left: calc(25% - 48px);
}
router_link {
  cursor: pointer;
}
#photos_nav {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.3);
  transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
}
#works_nav {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.3);
  transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
}
#about_nav {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.3);
  transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
}
.nav_for_small {
  display: none;
}
@media screen and (max-width: 480px) {
  .header_ul {
    display: none;
  }
  .nav_for_small {
    width: 20px;
    position: fixed;
    top: 30px;
    right: 30px;
    display: block;
    z-index: 5000;
  }
  .nav-unshown {
    display: none;
  }
  #nav-open {
    display: inline-block;
    width: 30px;
    height: 22px;
    vertical-align: middle;
  }
  #nav-open span, #nav-open span:before, #nav-open span:after {
    position: absolute;
    height: 3px;
    width: 25px;
    border-radius: 3px;
    background: rgb(255, 255, 255);
    display: block;
    content: '';
    cursor: pointer;
  }
  #nav-open span:before {
    bottom: -8px;
  }
  #nav-open span:after {
    bottom: -16px;
  }
  #nav-close {
    display: none;
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0;
    transition: .3s ease-in-out;
    -webkit-transition: .3s ease-in-out;
  }
  #nav-content {
    overflow: auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 90%;
    max-width: 330px;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    transition: .3s ease-in-out;
    -webkit-transform: translateX(135%);
    transform: translateX(135%);
  }
  #nav-content .header_ul {
    width: 100px;
    display: block;
    margin-top: 70px;
    position: absolute;
    left: 35%;
  }
  #nav-content .header_ul li {
    margin-top: 30px;
  }
  #nav-content #photos_nav_for_small {
    width: 100%;
    display: block;
    text-decoration: none;
    color: rgba(255, 255, 255, 1);
    transition-duration: 0.5s;
    -webkit-transition-duration: 0.5s;
  }
  #nav-content #works_nav_for_small {
    width: 100%;
    display: block;
    text-decoration: none;
    color: rgba(255, 255, 255, 1);
    transition-duration: 0.5s;
    -webkit-transition-duration: 0.5s;
  }
  #nav-content #about_nav_for_small {
    width: 100%;
    display: block;
    text-decoration: none;
    color: rgba(255, 255, 255, 1);
    transition-duration: 0.5s;
    -webkit-transition-duration: 0.5s;
  }
  #nav-input:checked ~ #nav-close {
    display: block;
    opacity: .5;
  }
  #nav-input:checked ~ #nav-content {
    -webkit-transform: translateX(35%);
    transform: translateX(35%);
  }
  #nav-content .me_accounts {
    width: 50%;
    margin: 0 auto;
    position: absolute;
    left: 18%;
    top: 93vh;
  }
  #nav-content .footer_ul {
    display: flex;
    justify-content: space-between;
    padding: 0;
    list-style: none;
  }
  #nav-content .icon {
    cursor: pointer;
  }
}
</style>
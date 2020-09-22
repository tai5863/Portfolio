<template>
  <div class="home_header_comp">
    <div class="home_header_container">
      <nav class="nav_for_sections">
        <ul class="header_ul">
          <li v-for="section in sections" :key="section.id"><router-link :to="'/' + section" :id="section + '_nav'">{{ section }}</router-link></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeHeader',
  components: {
  },
  data () {
    return {
      sections: ['works', 'about', 'picture'],
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
}
</script>

<style>
.home_header_comp {
  position: absolute;
  width: 100vw;
  top: 5%;
}
.home_header_container .header_ul {
  position: relative;
  margin: 0 20%;
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
}
li {
  font-family: Sarpanch;
  font-style: normal;
  font-weight: normal;
  font-size: 45px;
  line-height: 63px;
  text-align: center;

  color: #C9C9C9;
}
#picture_nav {
  text-decoration: none;
  color: #C9C9C9;
  transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
}
#works_nav {
  text-decoration: none;
  color: #C9C9C9;
  transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
}
#about_nav {
  text-decoration: none;
  color: #C9C9C9;
  transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
}
</style>
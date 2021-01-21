<template>
  <div class="home_header_comp">
    <div class="home_header_container">
      <nav class="nav_for_sections">
        <ul class="header_ul">
          <li v-for="section in sections" :key="section.id"><router-link :to="'/' + section" :id="'home_' + section + '_nav'">{{ section }}</router-link></li>
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
      sections: ['works', 'about', 'gallery'],
    }
  },
}
</script>

<style>
.home_header_comp {
  position: absolute;
  width: 100vw;
  top: 50%;
  left: 0%;
  transform: translateY(-50%);
  z-index: 1000;
}
.home_header_container .header_ul {
  position: relative;
  margin: 0 20%;
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
}
.home_header_container li {
  font-family: 'Kiona';
  font-style: normal;
  font-weight: normal;
  font-size: min(30px, 7vw);
  line-height: 63px;
  text-align: center;

  margin: 0 auto;
}
#home_gallery_nav {
  text-decoration: none;
  color: white;
}
#home_works_nav {
  text-decoration: none;
  color: white;
}
#home_about_nav {
  text-decoration: none;
  color: white;
}

@media screen and (max-width: 900px) {
  .home_header_comp {
    top: 45%;
    left: 0%;
    transform: translateY(-50%);
  }
  .home_header_container .header_ul {
    display: block;
  }
  .home_header_container li {
    line-height: 90px;
  }
}
</style>
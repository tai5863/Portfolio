<template>
  <div class="header_comp">
    <div class="header_container">
      <h1 class="name"><router-link to="/" style="text-decoration: none; color: #FFFFFF">Taichi Uchida</router-link></h1>
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
  name: 'Header',
  components: {
  },
  data () {
    return {
      sections: ['works', 'about', 'picture'],
    }
  }
}
</script>

<style>
.header_comp {
  position: absolute;
  top: 100px;
  width: 100vw;
  z-index: 1;
}
.header_container {
  width: 85%;
  height: 87px;
  border-bottom: solid #FFFFFF;
  float: right;
  padding: 0 0 0 100px;
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.8);
}
.header_container .name {
  font-family: Sarpanch;
  font-style: normal;
  font-weight: normal;
  font-size: min(60px, 4vw);
  line-height: 84px;
  text-align: center;

  color: #FFFFFF;
  
  margin: 0;
}
.header_container .nav_for_sections {
  position: relative; 
  width: 60%;
  margin: 0 auto 0 0;
}
.header_container .header_ul {
  position: relative;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  padding: 0;
}
.header_container li {
  font-family: Sarpanch;
  font-style: normal;
  font-weight: normal;
  font-size: min(35px, 2.5vw);
  line-height: 49px;
  text-align: center;

  color: #FFFFFF;

  margin-left: calc(15% + 15px);
}
#picture_nav {
  text-decoration: none;
  color: #FFFFFF;
}
#works_nav {
  text-decoration: none;
  color: #FFFFFF;
}
#about_nav {
  text-decoration: none;
  color: #FFFFFF;
}

@media screen and (max-width: 800px) {
  .header_comp {
    top: 0;
  } 
  .header_container {
    width: 90%;
    padding: 0 0 0 80px;
  }
  .header_container li {
    line-height: 55px;
    margin-left: 15%;
  }
}
</style>
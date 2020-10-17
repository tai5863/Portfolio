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
  margin-top: 100px;
  z-index: 1;
}
.header_container {
  margin: 0 9.5vw;
  height: 87px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1d1d1d;
  padding-left: min(130px, 8vw);
}
.header_container .name {
  font-family: Sarpanch;
  font-style: normal;
  font-weight: normal;
  font-size: min(45px, 3vw);
  text-align: center;

  color: #FFFFFF;
  
  margin: 0;
}
.header_container .nav_for_sections {
  position: relative; 
  width: 65%;
  margin: 0 auto 0 0;
}
.header_container .header_ul {
  height: 100%;
  margin: 0;
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
  font-size: min(27px, 2vw);
  text-align: center;
  border-bottom: solid 3px white;

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
    margin: 0;
  } 
  .header_container {
    margin: 0;
    padding-left: 40px;
  }
  .header_container .name {
    font-size: 4vw;
  }
  .header_container li {
    margin-left: 15%;
    border-bottom: solid 1px white;
    font-size: 3vw;
  }
}
</style>
<template>
  <div class="work">
    <div class="border_container"></div>
    <div class="work_container">
      <router-link to="/works" class="batsu">×</router-link>
      <div class="container">
        <div class="exp_container">
          <div class="title_container">
            <h1 class="work_name">{{ work.name }}</h1>
            <h2 class="date">{{ work.date }}</h2>
          </div>
          <p class="message" v-for="message in work.messages" :key="message.key">{{ message }}</p>
          <p class="message url" v-if="work.url" @click="openLink(work.url)"> - Information : {{ work.url }}</p>
          <p class="message cooperator" v-for="cooperator in work.cooperators" :key="cooperator.key"  @click="openLink(cooperator.url)"> - {{ cooperator.direction }} : {{ cooperator.name }}</p>
        </div>
        <div class="photo_container">
          <img class="photo" v-for="image in work.images" :key="image.key" :src="image">
        </div>
      </div>
    </div>
  </div>
</template>

<script> 

export default {
  name: 'Work',
  data: function() {
    return {
      work: this.$router.props
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
        const vh = window.innerHeight;
        document.getElementsByClassName('work_container')[0].style.height = vh + 'px';
      }
    });
  },
  destroyed: function() {
    window.scroll(0, 0);
  },
  methods: {
    openLink: function(link) {
      window.open(link);
    }
  }
}
</script>

<style scoped>
.batsu {
  position: absolute;
  top: 0px;
  left: 30px;

  color: #FFFFFF;
  font-size: 60px;

  text-decoration: none;
}
.batsu:hover {
  cursor: pointer;
}
.work_container {
  z-index: 1000;
  box-shadow: 0px 0px 100px 40px rgba(0, 0, 0, 0.5) inset;
  background-color: #131313;
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  scrollbar-width: none;  
}
.work_container::-webkit-scrollbar {
  display: none;
}
.work_container .container {
  position: relative;
  top: 10%;
  left: 0;
  right: 0;
  margin: auto;
  width: 50vw;
}
.work_container .exp_container {
  margin: 30px 0;
}
.work_container .title_container {
  text-align: left;
}
.work_container .work_name {
  font-family: Sarpanch;
  font-style: normal;
  font-weight: normal;
  font-size: min(50px, 4.5vw);
  line-height: min(70px, 5vw);

  color: #FFFFFF;

  margin: 0;
  display: inline;
}
.work_container .date {
  font-family: Sarpanch;
  font-style: normal;
  font-weight: normal;
  font-size: min(31px, 3vw);
  line-height: min(43px, 4vw);

  color: #FFFFFF;
  display: inline;
  margin-left: 40px;
}
.message {
  text-align: left;

  font-family: Sarpanch, "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: min(25px, 3vw);
  line-height: min(38px, 4vw);

  color: #FFFFFF;
  margin: 30px 0;
}
.url:hover {
  text-decoration: underline solid #FFFFFF;
  cursor: pointer;
}
.cooperator:hover {
  text-decoration: underline solid #FFFFFF;
  cursor: pointer;
}
.photo_container {
  text-align: center;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
}
.photo {
  width: 100%;
  min-width: 300px;
  margin: 80px 0;
}

@media screen and (max-width: 600px) {
 .work_container .container {
   width: 70vw;
 } 
 .photo {
   margin: 30px 0;
 }
}
</style>

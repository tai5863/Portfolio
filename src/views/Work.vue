<template>
  <div class="work">
    <div class="border_container"></div>
    <div class="work_container">
      <div style="width: 60px; height: 60px; text-align: center;"><router-link to="/works" class="batsu">←back</router-link></div>
      <div class="container">
        <div class="exp_container">
          <div class="title_container">
            <h1 class="work_name">{{ work.name }}</h1>
            <h2 class="date">{{ work.date }}</h2>
          </div>
          <div class="photo_container">
            <v-lazy-image class="photo" :src="work.images[0]" />
            <v-lazy-image class="photo" :src="work.images[1]" v-if="work.images[1]" width="1920" height="1080" />
            <v-lazy-image class="photo" :src="work.images[2]" v-if="work.images[2]" width="1920" height="1080" />
            <v-lazy-image class="photo" :src="work.images[3]" v-if="work.images[3]" width="1920" height="1080" />
          </div>
          <p class="message_wrapper" v-for="message in work.messages" :key="message.key"><span class="message main">{{ message }}</span></p>
          <p class="message_wrapper" v-if="work.tools"> - Tools : <span class="message tools">{{ work.tools }}</span></p>
          <p class="message_wrapper" v-if="work.url"> - Information : <span class="message url"  @click="openLink(work.url)">{{ work.url }}</span></p>
          <p class="message_wrapper" v-for="cooperator in work.cooperators" :key="cooperator.key"> - {{ cooperator.direction }} : <span class="message coop" >{{ cooperator.name }}</span></p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script> 
import Footer from '@/components/Footer.vue'

export default {
  name: 'Work',
  components: {
    Footer
  },
  data: function() {
    return {
      work: this.$router.props,
      color: 'rgb(0, 0, 0)'
    }
  },
  mounted () {
    if (!this.work) {
      this.$router.push('/works')
    }
    let name = Array.from(document.getElementsByClassName('work_name'));
    let message = Array.from(document.getElementsByClassName('message'));
    let elements = name.concat(message);
  
    elements.forEach((element) => {
      let txt_array = element.innerHTML.split('');
      
      element.innerHTML = '';

      txt_array.forEach((value, index) => {
        let new_element = document.createElement('span');
        new_element.innerHTML = value;
        new_element.style.color = "rgba(0, 0, 0, 0.0)";
        element.appendChild(new_element);
        this.color = 'rgb(' + Math.random(index) * 255 + ', ' + Math.random(index + 1) * 255 + ', ' + Math.random(index + 2) * 255 + ')';
        let animation = new_element.animate([
          { color: "rgba(0, 0, 0, 0.0)", backgroundColor: this.color },
          { color: "rgba(0, 0, 0, 1.0)" }
        ], {
          duration: 200,
          delay: index * 20,
        })
        animation.onfinish = function() {
          new_element.style.color = "rgba(0, 0, 0, 1.0)";
        }
      })
    })
  },
  methods: {
    openLink: function(link) {
      window.open(link);
    }
  }
}
</script>

<style>
.batsu {
  margin: 0 0 0 10vw;
  color: black;
  font-family: Kiona;
  font-size: min(20px, 2vw);
  line-height: 100px;

  text-decoration: none;
}
.batsu:hover {
  cursor: pointer;
}
.work_container {
  z-index: 1000;
  position: absolute;
  background: white;
  top: 0;
  left: 0;
  right: 0;
}
.work_container .container {
  margin: auto;
  padding-top: 30px;
  width: 65vw;
}
.work_container .exp_container {
  margin: 30px 0;
}
.work_container .title_container {
  text-align: left;
  margin-bottom: 70px;
}
.work_container .work_name {
  font-family: 'Kiona';
  font-style: normal;
  font-weight: normal;
  font-size: min(30px, 3vw);

  margin: 0;
  display: inline;
}
.work_container .date {
  font-family: 'Kiona';
  font-style: normal;
  font-weight: normal;
  font-size: min(20px, 2vw);

  display: inline;
  margin-left: 50px;
  color: rgb(140, 140, 140);
}
.message_wrapper {
  text-align: left;

  font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: min(18px, 2vw);

  margin: 30px 0;
}
.url:hover {
  text-decoration: underline solid black;
  cursor: pointer;
}
.work_container .photo_container {
  text-align: center;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
}
.work_container .photo {
  width: 100%;
  height: auto;
  min-width: 300px;
  margin: 0 0 70px 0;
}

@media screen and (max-width: 600px) {
 .work_container .container {
    width: 80vw;
    padding: 0;
 } 
 .work_container .title_container {
   margin: 10px 0;
 }
.work_container .photo {
  width: 100%;
  min-width: 300px;
  margin: 10px 0;
}
}
</style>

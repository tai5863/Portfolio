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
          <p class="message tools" v-if="work.tools"> - Tools : {{ work.tools }}</p>
          <p class="message url" v-if="work.url" @click="openLink(work.url)"> - Information : {{ work.url }}</p>
          <p class="message cooperator" v-for="cooperator in work.cooperators" :key="cooperator.key"> - {{ cooperator.direction }} : {{ cooperator.name }}</p>
        </div>
        <div class="photo_container">
          <v-lazy-image class="photo" :src="work.images[0]" />
          <v-lazy-image class="photo" :src="work.images[1]" v-if="work.images[1]" />
          <v-lazy-image class="photo" :src="work.images[2]" v-if="work.images[2]" />
          <v-lazy-image class="photo" :src="work.images[3]" v-if="work.images[3]" />
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
  position: absolute;
  top: 0px;
  left: 30px;

  color: black;
  font-size: 60px;

  text-decoration: none;
}
.batsu:hover {
  cursor: pointer;
}
.work_container {
  z-index: 1000;
  position: absolute;
  background: rgba(245, 245, 255, 1.0);
  top: 0;
  left: 0;
  right: 0;
}
.work_container .container {
  margin: auto;
  padding-top: 10%;
  width: 65vw;
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
  font-size: min(35px, 4.5vw);

  margin: 0;
  display: inline;
}
.work_container .date {
  font-family: Sarpanch;
  font-style: normal;
  font-weight: normal;
  font-size: min(22px, 3vw);

  display: inline;
  margin-left: 40px;
  color: rgb(140, 140, 140);
}
.message {
  text-align: left;

  font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: min(18px, 3vw);

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
  min-width: 300px;
  margin: 80px 0;
}

@media screen and (max-width: 600px) {
 .work_container .container {
    padding-top: 15%;
    width: 80vw;
 } 
 .photo {
    margin: 30px 0;
 }
}
</style>

<template>
  <div class="works_container">
    <ul style="text-align: center; padding: 0;">
      <span v-for="work in works" :key="work.key">
        <h2 class="work_title">{{ work.name }}</h2>
        <div class="message_container work">
          <p class="message work">{{ work.message1 }}</p>
          <p class="message work">{{ work.message2 }}</p>
        </div>
        <div class="img_container">
          <img :src="work.image" class="img">
        </div>
      </span>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Work',
  data(){
    return {
      works: [
        { 
          name: '春日新歓2020情報Web', 
          message1: '筑波大学春日エリアをメインの活動場所とする情報メディア創成学類と図書館情報学類が行った春日新歓のWebサイト。', 
          message2: 'デザインとフロントエンドの実装を担当し、委員会用ページの制作も行った。', 
          image: require('@/assets/春日新歓情報Web.png') 
        },
        {
          name: '春日新歓2020情報Web', 
          message1: '筑波大学春日エリアをメインの活動場所とする情報メディア創成学類と図書館情報学類が行った春日新歓のWebサイト。', 
          message2: 'デザインとフロントエンドの実装を担当し、委員会用ページの制作も行った。', 
          image: require('@/assets/春日新歓情報Web.png') 
        }
      ]
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
.works {
  position: absolute;
  top: 20%;
  width: 100%;
}
.works_title {
  animation: show 0.6s both;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
  font-size: 30px;
  text-align: center;
}
.message_container.begin {
  margin-top: 50px;
}
.message.begin {
  animation: show 0.6s both;
  animation-delay: 0.2s;
  color: white;
  font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif;
  font-weight: 1000;
}
.works_container {
  animation: show 0.6s both;
  animation-delay: 0.4s;
  margin-top: 50px;
}
.work_title {
  color: white;
  font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif;
  font-weight: 1000;
}
.message_container.work {
  margin-top: 50px;
  margin-left: 100px;
  margin-right: 100px;
}
.message.work {
  animation: show 0.6s both;
  animation-delay: 0.2s;
  color: white;
  font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif;
  font-weight: 1000;
}
.img_container {
  margin-top: 50px;
}
.img {
  width: 50%; 
  min-width: 500px;
}
@media screen and (max-width: 979px) {
  .works_container {
    display: block;
  }
  .message_container.work {
    margin-left: 70px;
    margin-right: 70px;
  }
  .img {
    min-width: 300px;
  } 
}
@media screen and (max-width: 480px) {
  #about_container > .content {
    overflow: auto;
    padding-top: 5%;
  }
  .message.work {
    padding-top: 20px;
  }
  .me_photo {
    width: 70%;
  }
}
</style>


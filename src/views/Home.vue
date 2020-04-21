<template>
  <div class="home">
    <h2 class="home_title">Portfolio</h2>
    <div class="message_container begin">
      <p class="message begin">これは、僕のポートフォリオです。</p>
    </div>
  </div>
</template>

<script>
export default {
  neme: 'Home',
  destroyed: function(){
    window.scroll(0, 0);
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
.home {
  width: 100vw;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 20%;
}
.home_title {
  animation: show 0.6s both;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
  font-size: 30px;
  text-align: center;
}
.message_container.begin {
  margin-top: 50px;
}
.message.begin::before {
  opacity: 1;
}
.message.begin {
  animation: show 0.6s both;
  animation-delay: 0.2s;
  color: white;
  font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif;
  font-weight: 1000;
}
</style>

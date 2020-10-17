<template>
  <div class="footer_comp">
    <div class="footer_container">
      <p class="copy">@2020 Taichi Uchida</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
.footer_container {
  margin-top: 30px;
}
.copy {
  color: rgb(140, 140, 140);
  text-align: center;
  font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: min(15px, 2vw);
}
</style>
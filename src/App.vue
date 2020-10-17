<template>
  <transition mode="out-in">
    <router-view></router-view>
  </transition>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.v-enter {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: all 1.0s 0s ease;
}
.v-leave {
  opacity: 1;
}
.v-leave-to {
  opacity: 0;
}
.v-leave-active {
  transition: all .5s 0s ease;
}
</style>
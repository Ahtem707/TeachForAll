<template>
  <header>
    <NavBar />
  </header>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>

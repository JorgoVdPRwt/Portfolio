<template>
  <AppNavBar></AppNavBar>
  <HomePageView></HomePageView>
</template>

<script>
import HomePageView from './Views/HomePageView.vue';
import AppNavBar from './Components/AppNavBar.vue';


export default {
  name: 'App',
  components: {
    HomePageView,
    AppNavBar,
  }
}
</script>

<style scoped>

</style>

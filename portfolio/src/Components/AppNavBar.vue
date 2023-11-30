<template>
  <nav id="navbar">
    <a href="">Home</a>
    <a href="">CV</a>
    <a href="">Info</a>
    <a href="">Opdrachten</a>
    <a href="">Reflectie</a>
  </nav>
</template>
  
  <script>
  
  export default {
    name: 'AppNavbar',
    components: {
      
    }
  }
  </script>
  
  <style scoped lang="scss">
  #navbar{
      height: 20%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;    
      a {
        color: green;
      }
  }
  </style>
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  created () {
    this.$store.dispatch('playlist/getAllSongs')
  }
}
</script>

<style lang="scss">
     @import 'https://fonts.googleapis.com/css2?family=Rambla:wght@400;700&display=swa';

  *, :after, :before {
    box-sizing: border-box;
  }

  body{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-image: url('assets/background.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-family: 'Rambla', sans-serif;
  }

  #app{
    background-color: $bg-basic-color;
    border-radius: 30px;
    width: 100%;
    height: 100%;
    max-width: 370px;
    max-height: 520px;
  }

</style>
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
    .btn:focus,.btn:active:focus,
    .btn.active:focus,.btn.focus,
    .btn:active.focus,.btn.active.focus { 
        outline: none!important;  
        border-color: transparent!important;  
        box-shadow:none!important;
    }
</style>

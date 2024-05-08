<template>
  <!-- <SignUp /> -->
  <router-view />
</template>

<script>
// import SignUp from './components/SignUp.vue'

export default {
  name: 'App',
  // components: {
  //   SignUp
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  padding: 0;
  margin: 10;
}
.logo {
    width: 250px;
}

.register input, .login input ,.add input{
    width: 300px;
    height: 10px;
    padding: 15px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid navy;
}

.register button, .login button, .add button{
    width: 320px;
    height: 40px;
    text-align: center;
    border: 1px solid black;
    background: gray;
    color: black;
    cursor: pointer;
}
</style>

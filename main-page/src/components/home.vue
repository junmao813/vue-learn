<template>
  <div class="main-content">
    <img class="nav-item" src="../assets/logo.png">
    <ul class="nav-item">
        <router-link tag="li" class="func1" to="/func1">功能1</router-link>
        <router-link tag="li" class="func2" to="/func2">功能2</router-link>
        <router-link tag="li" class="func3" to="/func3">功能3</router-link>
        <router-link tag="li" class="func4" to="/func4">功能4</router-link>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-content .nav-item{
  display:inline-block;
  height:60px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  cursor:pointer
}
a {
  color: #42b983;
}
ul.nav-item li.router-link-active{
  font-weight:bold;
}
</style>

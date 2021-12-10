<template>
  <div id="nav">
    <router-link to="/" class="router-link">Home</router-link>
    <router-link to="/posts" class="router-link">Posts</router-link>
    
    <div class="router-link">
      <label>Sql injection:</label>
      <input type="checkbox">
    </div>
    <div class="router-link">
      <label>XSS:</label>
      <input type="checkbox">
    </div>
    <div class="router-link">
      <label>CSRF:</label>
      <input type="checkbox">
    </div>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.router-link {
  margin: 15px;
  display: inline;
}
</style>

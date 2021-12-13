<template>
  <div id="nav">
    <router-link to="/" class="router-link">Home</router-link>
    <router-link to="/posts" class="router-link">Posts</router-link>
    
    <div class="checkbox-container">
      <div class="router-link">
        <label>Sql injection:</label>
        <input type="checkbox" v-model="sql" @change="switchSQL">
      </div>
      <div class="router-link">
        <label>XSS:</label>
        <input type="checkbox" v-model="xss" @change="switchXSS">
      </div>
      <div class="router-link">
        <label>CSRF:</label>
        <input type="checkbox" v-model="csrf" @change="switchCSRF">
      </div>
    </div>
    
  </div>
  <router-view/>
</template>

<script>
export default {
  data () {
    return {
      sql: false,
      xss: false,
      csrf: false,
    }
  },

  methods: {
    switchSQL() {
      this.$store.commit("switchSql")
    },
    switchXSS() {
      this.$store.commit("switchXSS")
    },
    switchCSRF() {
      this.$store.commit("switchCRSF")
    }
  },

  created: function() {
    this.sql = this.$store.state.sql
    this.xss = this.$store.state.xss
    this.csrf = this.$store.state.csrf
  }
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

.checkbox-container {
  margin-top: 15px;
}
</style>

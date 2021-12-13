<template>
  <div>
    <h1>View posts</h1>

    <form>
      <input v-model="q" placeholder="Query by content"/>
      <button @click="getPosts">Query</button>
    </form>

    <table>
      <tr>
        <th>Username</th>
        <th>Content</th>
      </tr>
      <tr v-for="post in posts" :key="post.id">
        <td>{{ post.username }}</td>
        <td v-if="!$store.state.xss">{{ post.content }}</td>
        <td v-if="$store.state.xss" v-html="post.content"></td>
      </tr>
    </table>
  </div>
</template>

<script>
import postsService from '../services/postsService'

export default {
  name: 'Posts',

  data () {
    return {
      q: null,
      posts: [],
    }
  },

  methods: {
    async getPosts() {
      this.posts = (await postsService.getPosts(this.q, this.$store.state.sqlInjection)).data
    }
  },

  created: function () {
    this.getPosts()
  }

}
</script>

<style scoped>
table {
  margin-top: 30px;
}

form {
  display:flex;
  flex-direction:row;
  
  border:1px solid grey;

  padding:2px;
}

input {
  flex-grow:2;
  border:none;
}

input:focus {
  outline: none;
}

button {
  background:blue;
  color:white;
}
</style>
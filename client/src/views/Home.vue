<template>
  <div class="home">
    <h1>Create a post</h1>
    <p>
      Webpage contains a form to create posts and a site to view and filter posts.
      <br> Vulnerabilities can be turned on and off in the checkboxes above.
      <br><br> SQL injection can be tested in the filter of the posts site.
      <br> XSS can be inserted here and checked in the posts site.
      <br> CSRF TODO
      <br><br> You can create a post below.
    </p>

    <p class="error" v-show="errorMessage != null">{{errorMessage}}</p>
    <p class="message" v-show="message != null">{{message}}</p>


    <form>
      <label>User:</label><br>
      <input v-model="username" type="text"><br>
      <label>Content:</label><br>
      <textarea v-model="content" cols="30" rows="10"></textarea><br>
      <button @click="createPost">Submit</button>
    </form>

  </div>
</template>

<script>
import postsService from '../services/postsService'

export default {
  name: 'Home',

  data () {
    return {
      username: null,
      content: null,
      errorMessage: null,
      message: null,
    }
  },

  methods: {
    async createPost() {
      this.message = null

      if(this.username == null) {
        this.errorMessage = "User's name must be set."
        return
      }
      
      if(!this.content) {
        this.errorMessage = "Content must not be empty."
        return
      }
        

      this.message = 
        (await postsService.createPost(this.username, this.content))
        .data

      this.errorMessage = null
      this.username = null
      this.content = null
    } 
  }

}
</script>

<style scoped>
.error {
  color: orange;
}

.message {
  color: green;
}
</style>
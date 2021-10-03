<template>
  <div id="app">
    <div class="wrapper">
      <h1>Feed of posts</h1>
      <PostForm/>
      <div class="posts" v-for="post in validPosts" :key="post.id">
        <h2>{{post.title}}</h2>
        <p>{{post.body}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'App',
  data() {
    return {
      posts: []
    }
  },
  computed: mapGetters(['validPosts', 'postsCount']),
  methods: mapActions(['fetchPosts']),
  created() {
    this.fetchPosts()
  }
}
</script>

<style lang="sass">
  body
    background-color: #05ff7a
  h1
    color: #fff2e2
    font-size: 36px
    text-shadow: 2px 2px 1px rgba(0, 150, 150, 0.5)
  #app
    font-family: Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    margin: 60px auto
    width: 400px
    border-radius: 25px
    background-color: #ff4dad
  .wrapper
    padding: 20px
  .posts
    border-radius: 10px
    margin-top: 1rem
    padding: 10px
    background: #ffd7a7
</style>

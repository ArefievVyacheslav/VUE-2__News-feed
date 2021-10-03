<template>
    <form @submit.prevent="submit">
        <input type="text" placeholder="title" v-model="title">
        <input type="text" placeholder="body" v-model="body">
        <button type="submit">Create Post</button>
    </form>
</template>

<script>
import { mapMutations } from 'vuex'
    export default {
        name: "PostForm",
        data() {
            return {
                title: '',
                body: '',
            }
        },
        methods: {
            ...mapMutations(['createPost']),
            submit() {
                this.createPost({
                    title: this.title,
                    body: this.body,
                    id: Date.now()
                })
                this.title = this.body = ''
            }
        }
    }
</script>

<style scoped lang="sass">
    input
        background: #ffd7a7
        background: -webkit-gradient(linear, left top, right top, color-stop(29%, #ffd7a7), color-stop(45%, #ffd7a7), color-stop(75%, #96e894), to(#05ff7a))
        background: -o-linear-gradient(left, #ffd7a7 29%, #ffd7a7 45%, #96e894 75%, #05ff7a 100%)
        background: linear-gradient(90deg, #ffd7a7 29%, #ffd7a7 45%, #96e894 75%, #05ff7a 100%)
        border-radius: 5px
        border: none
        font-size: 15px
        color: #242424
        width: 105%
        margin-bottom: 10px
        outline: none
        display: block
        padding: 10px
    button
        padding: 8px 20px
        outline: none
        background-color: #05ff7a
        border-top: 1px solid #131313
        border-right: 2px solid #000
        border-left: 1px solid #131313
        border-bottom: 2px solid #000
</style>
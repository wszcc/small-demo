<template>
  <div>
    
    <router-link to='/home' tag="button">首页</router-link>
    <router-link to='/about' tag="button">关于</router-link>
    <!-- <router-link to="'/user'+userId" tag="button">用户</router-link> -->
    <router-view></router-view>
   <!-- <button @click='btnClick1'>首页</button>
   <button @click='btnClick2'>关于</button> -->
  </div>
</template>

<script>
  export default {
    // methods: {
    //   btnClick1(){
    //     this.$router.push('/home')
    //   },
    //   btnClick2(){
    //     this.$router.push('/about')
    //   }
    // },
    // data() {
    //   return {
    //     userId:'zhangsan'
    //   }
    // },
  }
</script>

<style>
  .router-link-active{
    color: red;
  }
</style>
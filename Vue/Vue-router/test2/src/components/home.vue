<template>
    <div>
        <h3>我是主页</h3>
        <p>我是主页里面的内容，哈哈哈！</p>
        <router-link to="/home/new">新闻</router-link>
        <router-link to="/home/message">消息</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'home'
}
</script>
<style>
    .router-line-active{
        color: red;
    }
    h3{
        color: red;
    }
</style>
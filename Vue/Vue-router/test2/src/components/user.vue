<template>
    <div>
        <h3>我是用户</h3>
        <p>我是用户里面的内容，嘿嘿嘿！</p>
        <p>{{userId}}</p>
    </div>
</template>
<script>
export default {
    name:'user',
    data() {
        return {
            userId:this.$route.params.userId
        }
    },
}
</script>
<style>
    h3{
        color: blueviolet;
    }
</style>
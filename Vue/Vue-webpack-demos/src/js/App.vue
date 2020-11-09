<template>
    <div>
        <h1 class="tittle">{{tittle}}</h1>
        <p>{{contain}}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tittle:'我是App里面的标题',
            contain:'我是App里面的内容，哈哈哈！'
        }
    },
}
</script>
<style>
    .tittle{
        color: red;
    }
</style>
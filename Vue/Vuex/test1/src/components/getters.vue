<template>
    <div>
        <h3>getters的基本使用</h3>
        <p>{{$store.getters.mul}}</p>
        <p>{{$store.getters.getstu1}}</p>
        <p>{{$store.getters.getstu2}}</p>
        <p>{{$store.getters.getstu3(12)}}</p>
        <p>响应式原理</p>
        <p>{{$store.state.info}}</p>
    </div>
</template>
<script>
export default {
    name:'getters'

}
</script>
<style>

</style>
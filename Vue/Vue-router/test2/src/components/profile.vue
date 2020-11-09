<template>
    <div>
        <h3>我是profile组件</h3>
        <p>{{$route.query.name}}</p>
        <p>{{$route.query.age}}</p>
        <p>{{$route.query.height}}</p>
    </div>
</template>
<script>
export default {
    name:'profile'
}
</script>
<style>

</style>
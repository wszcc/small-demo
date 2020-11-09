<template>
    <div>
        <h4>{{message}}</h4>
        <h3>{{$store.state.counter}}</h3>
        <button @click='add'>+</button>
        <button @click='sub'>-</button>
    </div>
</template>
<script>
export default {
    name:'learnvue',
    data() {
        return {
            message:'我是组件2'
        }
    },
    methods: {
                add(){
                    this.$store.commit('inment')
                },
                sub(){
                    this.$store.commit('dement')
                }
            },
}
</script>
<style>

</style>
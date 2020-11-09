<template>
    <div>
        <h4>{{message}}</h4>
        <h3>{{$store.state.counter}}</h3>
        <button @click='add'>+</button>
        <button @click='sub'>-</button>
        <button @click='addcounter(5)'>+5</button>
        <button @click='addcounter(10)'>+10</button>
        <button @click='addstudent(student)'><span>add student</span></button>        
        <button @click='addstudent1(student)'><span>add student1</span></button>        
        <button @click='update'>update</button>
        <button @click='del'>delete</button>
        <button @click='delpeople'>syncdeletepeople</button>
    </div>
</template>
<script>
export default {
    name:'learnvue',
    data() {
        return {
            message:'我是组件1',
            student:{id:113,name:'zc',age:15}
        }
    },
    methods: {
                add(){
                    this.$store.commit('inment')
                },
                sub(){
                    this.$store.commit('dement')
                },
                addcounter(counter){
                    this.$store.commit('addcounter',counter)
                },
                addstudent(student){
                    this.$store.commit('addstudent',student)
                },
                addstudent1(student){
                    this.$store.commit({
                        type:'addstudent1',
                        student:student
                    })
                },
                update(){
                    this.$store.commit({
                        type:'update',
                        address:'American'
                    })
                },
                del(){
                    this.$store.commit('del')
                },
                delpeople(){
                    this.$store.dispatch('delpeople','succed delete!')
                }
            },
}
</script>
<style>

</style>
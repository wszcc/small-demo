import Vue from 'vue'
export default{
    inment(state){
        state.counter++
    },
    dement(state){
        state.counter--
    },
    addcounter(state,counter){
        state.counter+=counter
    },
    addstudent(state,student){
        state.students.push(student)
    },
    addstudent1(state,payload){
        state.students.push(payload.student)
    },
    update(state,payload){
        Vue.set(state.info,'address',payload.address)
    },
    del(state){
        Vue.delete(state.info,'name')
    },
    delpeople(state){
        Vue.delete(state.people,'name')
    }
}
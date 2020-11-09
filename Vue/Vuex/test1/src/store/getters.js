export default {
    mul(state){
        return state.counter*state.counter
    },
    getstu1(state){
        return state.students.filter(s=>s.age>11)
    },
    getstu2(state,getters){
        return getters.getstu1.length
    },
    getstu3(state){
        return function(age){
            return state.students.filter(s=>s.age>age)
        }
    }
}
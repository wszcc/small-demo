import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import modules from './modules'

Vue.use(Vuex)
const state={
    counter:11,
    students:[
        {id:110,name:'孙悟空',age:10},
        {id:111,name:'猪八戒',age:11},
        {id:112,name:'沙悟净',age:12},
        {id:113,name:'蹦波霸',age:13}
    ],
    info:{name:'zc'},
    people:{id:12,name:'ljr',age:12}
}
const store = new Vuex.Store({
    // ...
    state,
    mutations,
    actions,
    getters,
    modules
})
export default store
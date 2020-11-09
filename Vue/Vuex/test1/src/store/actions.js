export default {
    delpeople(context,payload){
        setTimeout(() => {
            context.commit('delpeople')
            console.log(payload)
        }, 1000);
    }
}
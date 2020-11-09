// const app = new Vue({
//     el: '#app',
//     data: {
//       books: [
//         {
//           name: "《算法导论》",
//           beginDate: "2006-9",
//           price: 85.00,
//           count: 1
//         },
//         {
//           name: "《UNIX编程艺术》",
//           beginDate: "2006-2",
//           price: 59.00,
//           count: 1
//         },
//         {
//           name: "《编程大全》",
//           beginDate: "2008-10",
//           price: 39.00,
//           count: 1
//         },
//         {
//           name: "《代码大全》",
//           beginDate: "2006-3",
//           price: 128.00,
//           count: 1
//         },
//       ]
//     },
//     methods: {
//       increment(index){
//         this.books[index].count++
//       },
//       decrement(index){
//         this.books[index].count--
//       },
//       remove(index){
//         this.books.splice(index,1)
//       }
//     },
//     computed: {
//       totalPrice(){
//         return this.books.map(book => book.price*book.count)
//             .reduce((preValue,currentValue) => preValue+currentValue)
//       }
//     },
//     filters: {
//       showPrice: function(price){
//         console.log(typeof price);
//         let priceStr = price.toFixed(2)
//         console.log(priceStr);
//         return "￥" + priceStr
//       }
//     }
//   })
let app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                name: "《算法导论》",
                beginDate: "2006-9",
                price: 85.00,
                count: 1
            },
            {
                name: "《UNIX编程艺术》",
                beginDate: "2006-2",
                price: 59.00,
                count: 1
            },
            {
                name: "《编程大全》",
                beginDate: "2008-10",
                price: 39.00,
                count: 1
            },
            {
                name: "《代码大全》",
                beginDate: "2006-3",
                price: 128.00,
                count: 1
            },
        ]
    },
    computed: {
     totalprice(){
       let res=0
       for(let i=0;i<this.books.length;i++){
         res+=this.books[i].count*this.books[i].price
       }
       return res
     }
    },
    methods: {
      decrement(index){
        this.books[index].count--
      },
      increasement(index){
        this.books[index].count++
      },
      remove:function(index){
        this.books.splice(index,1)
      }
    },
    filters:{
      showPrice(price){
        return '￥'+price.toFixed(2)
      }
    }
})
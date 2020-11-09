<template>
    <div class="tabbar-item" @click='btnclick'>
        <!-- <solt name="item-icon" class="tabbar-item"></solt>
        <solt name='item-text' class="tabbar-item"></solt> -->
        <slot name='item-icon'></slot>
        <slot name='item-text'></slot>
    </div>
</template>
<script>
export default {
    name:'tabbar-item',
    props:{
        path:String
    },
    methods: {
        btnclick(){
            this.$router.push(this.path)
        }
    },
}
</script>
<style>
     .tabbar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    padding-top: 5px;
    box-shadow: 0px -3px rgba(100, 100, 100,0.05);
  }
  .tabbar-item:hover{
      color: pink;
  }
  .iconfont{
      font-size: 20px;
  }
  .tabbar-item div{
      font-size: 14px;
      margin-bottom: -5pc;
  }
</style>
<template>
    <div>
       <router-view class="rv"></router-view>
        <tabbar>
          <tabbaritem>
            
          </tabbaritem>
        </tabbar>
    </div>
</template>
<script>
    import tabbar from '../tabbar/tabbar.vue'
  import tabbaritem from '../tabbar/tabbar-item.vue'
export default {
    name:'maintabbar',
    components:{
        tabbar,
        tabbaritem
    }
}
</script>
<style>

 
.rv{
  background-color: #bbffaa;
  display: block;
  width: 100%;
  height: 500px;
}

</style>
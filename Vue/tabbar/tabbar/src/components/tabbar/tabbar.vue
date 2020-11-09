<template>
    <div>
        <div class="tabbar">
            <!-- <tabbaritem><div slot="item-icon">wowhsi</div></tabbaritem> -->
            <tabbaritem path='/home'>
                <i class="iconfont" slot="item-icon">&#xe6fe;</i>
                <div slot="item-text">首页</div>
            </tabbaritem>
            <tabbaritem path='/sort'>
                <i class="iconfont" slot="item-icon">&#xe62b;</i>
                <div slot="item-text">分类</div>
            </tabbaritem>
            <tabbaritem path='/shopcar'>
                <i class="iconfont" slot="item-icon">&#xe614;</i>
                <div slot="item-text">购物车</div>
            </tabbaritem>
            <tabbaritem path='profile'>
                <i class="iconfont" slot="item-icon">&#xe6ad;</i>
                <div slot="item-text">我的</div>
            </tabbaritem>
          </div>
    </div>
</template>
<script>
    import tabbaritem from './tabbar-item.vue'
export default {
    name:'tabbar',
    components:{
        tabbaritem
    }
}
</script>
<style>
    @import url(../.././assets/css/iconfont/font_b6qof959uh6/iconfont.css);
    .tabbar{
    display: flex;
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(100, 100, 100,0.1);
  }
</style>
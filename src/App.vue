<template>
    <div id="app">
      <router-view></router-view>
    </div>
</template>

<script>

export default {
  components:{},
  mounted(){
    NProgress.done()
    //   console.log(this.$store)
  },
  computed: {
    // loginon(){
    // //由于vuex的状态存储是响应式的，所以从store实例中读取状态的最简单方法就是使用计算属性来返回某个状态：
    //   return this.$store.state.loginon
    // },
  },
  created(){

  }
}
</script>
<style lang="scss">
  @import "../static/css/base.scss";
  .swiper-pagination-bullet-active{
    width: 10px !important;
    height: 10px !important;
    background-color: #FFC125  !important;
  }
</style>


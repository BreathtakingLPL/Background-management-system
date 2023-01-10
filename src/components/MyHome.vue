<template>
  <div class="home-container">
    <!-- Header area -->
    <MyHeader></MyHeader>

    <!-- main boday -->
    <div class="home-main-box">
       <MyAside></MyAside>
    <div class='home-main-body'>
     <router-view></router-view>
    </div>
    </div>
  </div>
</template>

<script>
// 头部区域组件 Header section
import MyHeader from './subcomponents/MyHeader.vue'
// 左侧边栏组件 Left section
import MyAside from './subcomponents/MyAside.vue'

export default {
  name: 'MyHome',
  // register components
  components: {
    MyHeader,
    MyAside,
  },
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
  display: flex;
  flex-direction: column;

  .home-main-box {
    height: 100%;
    display: flex;
    .home-main-body {
      padding: 15px;
      flex: 1;
    }
  }
}
</style>
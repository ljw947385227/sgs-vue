<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
  >
    <el-menu-item index="1">武将</el-menu-item>
    <el-sub-menu index="2">
      <template #title>抽奖模拟</template>
      <el-menu-item index="2-1" @click="index('bs')">盒子模拟器</el-menu-item>
      <el-sub-menu index="2-2">
        <template #title>梦之回廊</template>
        <el-menu-item index="2-2-1">item one</el-menu-item>
        <el-menu-item index="2-2-2">item two</el-menu-item>
        <el-menu-item index="2-2-3">item three</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2-3">
        <template #title>天宫宝库</template>
        <el-menu-item index="2-3-1">item one</el-menu-item>
        <el-menu-item index="2-3-2">item two</el-menu-item>
        <el-menu-item index="2-3-3">item three</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2-4">
        <template #title>其他</template>
        <el-menu-item index="2-4-1">招募令</el-menu-item>
        <el-menu-item index="2-4-2">雁翎甲</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2-5">
        <template #title>福袋</template>
        <el-menu-item index="2-5-1">item one</el-menu-item>
        <el-menu-item index="2-5-2">item one</el-menu-item>
        <el-menu-item index="2-5-3">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>

    <el-menu-item index="3" @click="index('admin')">admin</el-menu-item>
  </el-menu>

</template>

<script>
export default {
  name: "HeadMenu",
  data () {
    return {
      activeIndex: '1'
    }
  },methods:{
    index(url){
      this.$router.push('/'+url)
    }
  }
}
</script>

<style scoped>

</style>

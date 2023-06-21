<template>
  <el-tabs v-model="activeName" class="demo-tabs" >
    <el-tab-pane label="盒子管理" name="盒子管理">
      <sing-prize-c-r-u-d></sing-prize-c-r-u-d>
    </el-tab-pane>
    <el-tab-pane label="招募令权重" name="招募令权重">招募令权重</el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>

  </el-tabs>
</template>

<script>
import SingPrizeCRUD from "@/views/Admin/singPrizeCRUD";
export default {
  name: "admin",
  components: {SingPrizeCRUD},
  data(){
    return {
      activeName: '盒子管理'
    }
  }
}
</script>

<style scoped>

</style>

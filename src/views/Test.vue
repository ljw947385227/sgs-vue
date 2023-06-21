<template>
  <el-select v-model="value"
             @change="console.log(this.value)"
  >
    <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
    >
      <span style="float: left">{{ item.label }}</span>
      <span
          style="
          float: right;
          color: var(--el-text-color-secondary);
          font-size: 13px;
        "
      >{{ item.prize }}</span
      >
    </el-option>
  </el-select>
</template>

<script>
import axios from "axios";

export default {
  name: "Test",
  mounted() {

  },
  data() {
    return {
        value: '',
        options : [
      {
        value: '冬至盒子',
        label: '冬至盒子',
        prize: '界沮授'
      },
      {
        value: '狂欢礼盒',
        label: '狂欢礼盒',
        prize: '神荀彧'
      },
      {
        value: 'JavaScript',
        label: 'JavaScript',
        prize: '神甘宁'
      }]

    }
  },


}
</script>

<style scoped>



</style>

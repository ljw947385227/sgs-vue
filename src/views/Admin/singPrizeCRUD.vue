<template>
<el-table :data="sp.slice((currentPage-1)*pageSize,currentPage*pageSize)">
<el-table-column prop="id" label="id" width="180"/>
  <el-table-column prop="name" label="详情" width="320"/>
  <el-table-column prop="number" label="数量" width="180"/>
  <el-table-column prop="value" label="权重" width="180" sortable/>
  <el-table-column label="操作">
    <template #default="scope">
      <el-button @click="change(scope.row)">
        修改
      </el-button>
    </template>
  </el-table-column>
</el-table>
  <el-pagination :page-count="pageCount" :page-size="pageSize" :total="total" @current-change="pager" current-page="currentPage" style="position: fixed"/>
  <el-drawer v-model="changeShow">
    <el-form class="changeBox">
      <el-form-item label="id">
        <el-input v-model="this.changePrize.id"  disabled/>
      </el-form-item>
      <el-form-item label="详情">
        <el-input v-model="this.changePrize.name" />
      </el-form-item>
      <el-form-item label="数量">
        <el-input v-model="this.changePrize.number" />
      </el-form-item>
      <el-form-item label="权重">
        <el-input v-model="this.changePrize.value"/>
      </el-form-item>
      <el-button @click="save(this.changePrize)">Save</el-button>
    </el-form>
  </el-drawer>
  <el-drawer v-model="addShow">
    <el-form class="changeBox">
      <el-form-item label="详情">
        <el-input v-model="this.addPrize.name" />
      </el-form-item>
      <el-form-item label="数量">
        <el-input v-model="this.addPrize.number" />
      </el-form-item>
      <el-form-item label="权重">
        <el-input v-model="this.addPrize.value"/>
      </el-form-item>
      <el-button @click="add(this.addPrize)">add</el-button>
    </el-form>
  </el-drawer>
  <el-button @click="this.addShow=true">add</el-button>
</template>

<script>
import axios from "axios";
import {ElMessage} from "element-plus";

export default {
  name: "singPrizeCRUD",
  data(){
    return {
      sp: [],
      currentPage: 1,
      pageSize: 10,
      pageCount: 0,
      total: 0,
      changePrize: {},
      changeShow: false,
      addPrize: {
        name: '',
        value: 0,
        number: 0
      },
      addShow: false
    }
  },mounted() {
    axios({
      url: 'getAllSP'
    }).then(res=>{
      this.sp=res.data
      this.total=this.sp.length;
      this.pageCount=parseInt(this.total/this.pageSize)+1
    })
  },methods:{
    change(prize){
      this.changeShow=true
      this.changePrize=prize
    },pager(currentPage){
      this.currentPage=currentPage
    },save(prize){
      axios({
        url: 'updateSP',
        params:{
          id: prize.id,
          value: prize.value,
          number: prize.number,
          name: prize.name
        }
      }).then(res=>{
        if(res.data)
          ElMessage.success('保存成功')
        else
          ElMessage.error('保存失败')
        this.changeShow=false
      })
    },add(prize){
      axios({
        url: 'addSP',
        params:{
          name: this.addPrize.name,
          value: this.addPrize.value,
          number: this.addPrize.number
        }
      }).then(res=>{
        if(res.data)
          ElMessage.success('添加成功')
        else
          ElMessage.error('添加失败')
        this.changeShow=false
      })
    }
  }
}
</script>

<style scoped>

</style>

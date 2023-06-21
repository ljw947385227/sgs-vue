<template>
  <el-row style="top: 50px">
    <el-col :span="6">
      <h3>{{ this.curName}}</h3>
      <el-button @click="this.prizeDrawer=true">查看权重</el-button>
      <el-drawer v-model="prizeDrawer" direction="ltr" :title="curName">
        <el-table :data="this.curBox" style="width: 100%" height="400">
          <el-table-column label="Date" width="180" >
            <template #default="scope">
              {{scope.row.name}}*{{scope.row.number}}
            </template>
          </el-table-column>
          <el-table-column prop="value" label="权重" width="180" />
        </el-table>
      </el-drawer>
      <br>
      <br>
      <br>
      <el-button @click="choujiang(50)">50</el-button>
      <el-button @click="clearResult">清空</el-button>
    </el-col>
    <el-col :span="6">
      <h3>本次获得</h3>
<!--      <li  v-for="i in this.boxSize" v-show="result[i-1]>0">-->
<!--        {{this.curBox[i-1].name}}*{{this.curBox[i-1].number*this.result[i-1]}}-->
<!--      </li>-->
      <el-text v-for="i in this.boxSize" v-show="result[i-1]>0" :type="getTypeByValue(this.curBox[i-1].value)">
        {{this.curBox[i-1].name}}*{{this.curBox[i-1].number*this.result[i-1]}}
        <br>
      </el-text>
    </el-col>
    <el-col :span="6">
      <h3>总共获得</h3>
      <el-text v-for="i in this.boxSize" v-show="sumResult[i-1]>0" :type="getTypeByValue(this.curBox[i-1].value)">
        {{this.curBox[i-1].name}}*{{this.curBox[i-1].number*this.sumResult[i-1]}}
        <br>
      </el-text>
    </el-col>
    <el-col :span="6">   <el-select v-model="box" @change="prizeChange">
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
        >{{ item.prize }}</span>
      </el-option>
    </el-select></el-col>
  </el-row>

</template>

<script>
export default {
  name: "BoxSimulator",
  data(){
    return {
      box: '',
      boxSize: 0,
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
        }],
      khlh:{
        name: ['史诗体验卡','欢乐豆','菜篮子','换将卡','手气卡','点将卡','进阶丹','雁翎甲','招募令','史诗宝珠碎片','菜篮子','妧慧','史诗宝珠','将魂','雪中舞韧*张春华','花蔓','傅俭','史诗宝珠','神荀彧'],
        value: [1000,1000,1360,5000,5000,3000,1000,1000,1000,200,200,100,100,15,10,10,3,1,1],
        number: [1,50,2,2,2,2,2,1,1,1,99,1,1,1000,1,1,1,66,1]
      },
      curBox: [],
      curPrize:[],
      curName: '狂欢盒子',
      prizeDrawer: false,
      result: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      sumResult: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }
  },mounted() {
    this.curPrize=[]
    for(let i=0;i<this.khlh.name.length;i++){
      this.curBox.push({
        'name': this.khlh.name[i],
        'value': this.khlh.value[i],
        'number': this.khlh.number[i],
      })
    }
    this.curPrize[0]=0
    this.boxSize=19
    for(let i=0;i<this.curBox.length;i++){
        this.curPrize.push(this.curPrize[i]+this.curBox[i].value)
    }
  },methods:{
    choujiang(num){
      for(let i=0;i<this.boxSize;i++)
        this.result[i]=0
      for(let i=0;i<num;i++){
        let number=Math.round(Math.random()*20000)
        console.log(number)
        for(let k=1;k<this.curPrize.length;k++){
          if(this.curPrize[k-1]<number&&this.curPrize[k]>number){
            this.result[k-1]++;
            this.sumResult[k-1]++;
            break;
          }
        }

      }
      console.log(this.result)
    },getPrize(index){
      // return 's'
      let n=this.curBox[index].number*this.result[index]
      return this.curBox[index].name+n.toString()
      //  return this.curBox.name[index]+'*'+n.toString()
    },getTypeByValue(value){
      if(value==1)
        return 'danger'
      if(value<=10)
        return 'warning'
      if(value<=50)
        return 'primary'
      if(value<=100)
        return 'success'
      return ''
    },prizeChange(){

    },clearResult(){
      for(let i=0;i<this.sumResult.length;i++){
        this.sumResult[i]=0
        this.result[i]=0
      }
    }
  }
}
</script>

<style scoped>

</style>

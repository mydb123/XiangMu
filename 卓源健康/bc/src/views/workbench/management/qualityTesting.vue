<template>
  <div id="qualityTesting">
      <el-breadcrumb>
        <el-breadcrumb-item :to="{ path: '/workbench/management/productInspection'}">制备管理</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/workbench/management/productInspection'}">成品质检</el-breadcrumb-item>
        <el-breadcrumb-item >录入成品质检信息</el-breadcrumb-item>
      </el-breadcrumb>
    <el-card>
      <div class="box" style="border:0px">
        <div class='content'>
        <el-row >
          <el-col :span="4"><p>制备编号</p></el-col>
          <el-col :span="8">
            <el-input class="w260" v-model="formData.code" :disabled="true"></el-input>
          </el-col>
        </el-row>
        </div>
      </div>
      <div class="box" >
        <p class='clickbox' v-on:click="click(1)">成品质检信息</p>
        <div class='content' v-show="show1">
          <el-form :model="formData" :rules="rules" ref="ruleForm">
            <el-row >
              <el-col :span="4"><p class="fuji"><i class="ziji">*</i>质检结果</p></el-col>
              <el-col :span="8">
                <el-form-item prop="qcResult">
                  <el-select class="w260" v-model="formData.qcResult" placeholder="请选择">
                    <el-option
                        v-for="item in qcResults"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              
              <el-col :span="4"><p class="fuji"><i class="ziji">*</i>OD</p></el-col>
              <el-col :span="8">
                <el-form-item prop="od">
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 5, maxRows: 10}"
                    placeholder="请输入内容"
                    v-model="formData.od">
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
      <div class='tac'>
          <el-button @click="save('ruleForm')" type="primary" round>提交</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import api from '@/api/index';
import {PRODUCT_QC} from '@/utils/util'
 
export default {
  data() {
    return {
      qcResults:PRODUCT_QC,
      show1:true,
      formData:{
        id:'',//成品id
        code:'',//制备编号
        od:'',//质检信息
        qcResult:''//质检结果
      },
      rules:{
        od: [
            { required: true, message: '请输入od', trigger: 'blur' },
        ],
        qcResult: [
            { required: true, message: '请选择质检结果', trigger: 'change' },
        ]
      }
    }
  },
  methods: {
    click(index) {
      if (index == 1) {
          this.show1 = !this.show1;
      }
    },
    save(ruleForm){
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          api.product.qcCheck(this.formData).then( response=>{
            this.$router.push('/workbench/management/productInspection');
          }).catch(error=>{
            console.log(error)
          })
        } else {
        console.log('error submit!!');
        return false;
      }});
    }
  },
  created(){
    //获取路由传值
    this.formData.code = this.$route.query.code; 
    this.formData.id = this.$route.query.id; 
  }
}
</script>

<style lang="scss">
#qualityTesting{
.tac{
        text-align: center;
        .el-button{
            width: 114px;
            height: 50px;
        } 
	}
}
</style>

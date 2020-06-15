<template>
  <div id="addctnList">
    <el-breadcrumb>
      <el-breadcrumb-item :to="{ path: '/workbench/warehouseMmanagement/ctnList'}">出库管理</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/workbench/warehouseMmanagement'}">箱号列表</el-breadcrumb-item>
      <el-breadcrumb-item>新增出货</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 主题内容 -->
    <el-card>
      <el-form :model="formData" :rules="rules" ref="formData" >
        <div class="box" >
            <p class='clickbox' @click="dotSwitch(1)">出货信息</p>
            <div class='content' v-show="show1">
                <el-row>
                    <el-col :span="4"><p class="fuji"><i class="ziji">*</i>出货日期</p></el-col>
                    <el-col :span="8">
                    <el-form-item prop="date"  >
                        <el-date-picker  class="w260" v-model="formData.date" type="date" placeholder="选择日期" ></el-date-picker>
                    </el-form-item>
                    </el-col>
                    <el-col :span="4"><p>出货数量</p></el-col>
                    <el-col :span="8"><el-input class="w260" v-model="boxList.length"  clearable disabled></el-input></el-col>
                </el-row>
                <el-row>
                    <el-col :span="4"><p class="fuji"><i class="ziji">*</i>客户名称</p></el-col>
                    <el-col :span="8">
                        <el-form-item  prop="name" class="w260">
                            <el-input  clearable v-model="formData.name" placeholder="请输入名称"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4"><p class="fuji"><i class="ziji">*</i>出货地区</p></el-col>
                    <el-col :span="8">
                        <el-form-item  prop="sourceArea">
                            <el-cascader
                                class="w260"
                                size="large"
                                :options="options"
                                v-model="selectedOptions"
                                @change="handleChange">
                            </el-cascader>
                        </el-form-item>  
                    </el-col>
                </el-row> 
                <el-row>
                  <el-col :span="4"><p>出货备注</p></el-col>
                  <el-col :span="8">
                    <el-input
                      class="mb20"
                      type="textarea"
                      :autosize="{ minRows: 5, maxRows: 10}"
                      placeholder="请输入内容"
                      v-model="formData.memo">
                    </el-input>
                  </el-col>
                </el-row>
            </div>
        </div> 
        <!-- 扫码登记出货 -->
        <div class="box" >
            <p class='clickbox' @click="dotSwitch(2)">扫码登记出货</p>
            <div class='content' v-show="show2">
              <el-row>
                <el-col :span="4"><p class="fuji"> <i class="ziji">*</i>制备编号</p></el-col>
                <el-col :span="8"><el-input class="w260" v-model="code"  placeholder="请扫码" @keyup.enter.native="scan"></el-input></el-col>
                <el-col :span="4"><p>已扫数量</p></el-col>
                <el-col :span="8"><el-input class="w260" v-model="boxList.length" clearable disabled></el-input></el-col>
              </el-row>
              <el-row>
                <el-col :span="4"><p>制备日期</p></el-col>
                <el-col :span="8"><el-input class="w260" v-model="boxData.productDate"  disabled></el-input></el-col>
                <el-col :span="4"><p>过期日期</p></el-col>
                <el-col :span="8"><el-input class="w260" v-model="boxData.expiryDate"  disabled></el-input></el-col>
              </el-row>
            </div>
        </div>
      </el-form>
      <div class="box" >
        <p class='clickbox' @click="dotSwitch(3)">本箱成品列表</p>
        <div class='content' v-show="show3">
          <el-table :data="boxList" style="width: 100%" border stripe>
                <el-table-column prop="code" label="制备编号"></el-table-column>
                <el-table-column prop="productDate"  label="制备日期"></el-table-column>
                <el-table-column prop="expiryDate"  label="过期日期"></el-table-column>
                <el-table-column prop="status" label="当前状态">
                    <template slot-scope="scope">
                        <span v-if="scope.row.status==2">库存</span>
                    </template>
                </el-table-column>
                <el-table-column prop="count" label="操作"> 
                    <template slot-scope="scope">
                        <el-button  type="danger" @click="boxDelete(scope.row.id)">删除</el-button>
                    </template>
                </el-table-column>
          </el-table>
        </div>
      </div>
        <el-row class="tac">
            <el-button @click="submit('formData')" type="primary" round>提交</el-button>
        </el-row>
    </el-card>
  </div>
</template>

<script>
import api from '@/api/index'; 
import { Message } from 'element-ui';
import { provinceAndCityData, regionData, provinceAndCityDataPlus, regionDataPlus, CodeToText, TextToCode } from 'element-china-area-data'
export default {

  data () {
    var checkSourceArea = (rule, value, callback) =>{
      value = this.selectedOptions;
      if(value == null || value == ''){
        callback(new Error('请选择来源地区'))
      }
      callback()
    };
    return {
        options: regionData,
        show1:true,
        show2:true,
        show3:true,
        formData: {
          date:"",//出货日期
          name:"",//客户名称
          province:"",//省
          city:"",//市
          region:"",//区
          memo:"",//出货备注
          productIds:"",//id
        },
        selectedOptions: [],// 出货地区
        boxList:[],//本箱成品列表
        productIdList:[],//本箱成品id
        boxData:{
          productDate:"",//制备日期 
          expiryDate:""//过期日期
        },
        code:"",//制备编号
        rules: {
          date: [
            { required: true, message: '请选择日期', trigger: 'blur' },
          ],
          name: [
            { required: true, message: '请输入名称', trigger: 'blur' }
          ], 
          sourceArea: [
            { validator : checkSourceArea , trigger: 'change'}
          ],
      }
    }
  },
 
  methods: {
    // 扫码事件
    async scan(){
      const res = await api.box.scan(this.code)
        if(res.status=="200"){
          for(var i in this.productIdList){
            if(this.productIdList[i]==res.data.id){
              this.$message({
                message: '列表已有相同数据',
                type: 'warning'
              });
              return
            }
          }
          this.boxData = res.data
          this.boxList.unshift(this.boxData)
          this.productIdList.push(res.data.id)
          this.code=""
        }else{
          this.$message({
            duration:"5000",
            message: res.msg,
            type: 'error'
          }); 
        }
    },
    //删除
    boxDelete(id){
        for(var i in this.productIdList){
          if(this.productIdList[i]==id){
            this.productIdList.splice(i,1)
          }
        }
          for(var i in this.boxList){
          if(this.boxList[i].id==id){
            this.boxList.splice(i,1)
          }
        }
    },
    //提交
    submit(formName){
      this.$refs[formName].validate( async valid => {
        if (valid) {
			if(!this.boxList||!this.boxList.length){
				this.$message.error('未添加成品')
				return
          	}
			this.formData.productIds=this.productIdList.toString()
			const res = await api.box.save(this.formData)
			this.$message.success('操作成功')
			this.$router.push({path:"/workbench/warehouseMmanagement/ctnList"})
        } else {
            console.log('error submit!!');
            return false;
        }
      });
    },
    //下拉框的显示和隐藏
    dotSwitch(index){
      if(index==1){
        this.show1=!this.show1
      }else if(index==2){
        this.show2=!this.show2
      }else if(index==3){
        this.show3=!this.show3
      }
    },
    // 地区的变法
    handleChange(){
      this.formData.province =CodeToText[this.selectedOptions[0]]
      this.formData.city =CodeToText[this.selectedOptions[1]]
      this.formData.region =CodeToText[this.selectedOptions[2]]      
    }
  },
  created () {
  }
}
</script>

<style lang='scss'>
#addctnList{
    .mb20{
        margin-bottom: 20px;
    }
	.tac{
  		text-align: center;
  		.el-button{
			width: 114px;
			height: 50px;
		} 
	}
}
</style>
<template>
    <!-- <div>
        状态1
        合伙人立项等待审核页面.
    </div> -->
    <div class='approval_pending_design_dept'>
        <DesignStepComponent :index='index'></DesignStepComponent>
        <div >
            <el-form disabled>
            
            <div class='div2'>
                <div class='content'>
                    <el-row>
                        <el-col :span="5"><p>项目负责人</p></el-col>
                        <el-col :span="8">
                            <el-input v-model="formData.leader" placeholder="请输入内容"></el-input>
                        </el-col>
                        <el-col :span="5"><p>提交日期</p></el-col>
                        <el-col :span="6">
                            <el-date-picker
                                v-model="formData.submitDate"
                                type="date"
                                placeholder="选择日期">
                            </el-date-picker>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div class="wordborder" >
                <p class='clickbox' v-on:click="click(1)" >建筑信息</p>
                <div class='content' v-show="show1">
                    <el-row>
                        <el-col :span="5"><p>项目名称</p></el-col>
                        <el-col :span="8" >
                            <el-input  v-model="formData.name" placeholder="请输入内容"></el-input>
                        </el-col>
                        <el-col :span="5"><p>行业</p></el-col>
                        <el-col :span="6">
                            <el-select v-model="formData.industry" placeholder="请选择">
                                <el-option
                                    v-for="item in options2"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="5"><p>地区</p></el-col>
                        <el-col :span="17">
                            <v-distpicker 
                                :province="formData.province" 
                                :city='formData.city'
                                :area='formData.region'
                                :disabled="disabled"
                                @selected="onSelected">
                            </v-distpicker>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="5"><p>建筑面积</p></el-col>
                        <el-col :span="8">
                            <el-input  v-model="formData.floorArea" placeholder="请输入内容">
                                <template slot="append">m²</template>
                            </el-input>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="5"><p>项目建筑地址</p></el-col>
                        <el-col :span="19">
                            <el-input  v-model="formData.buildingAddr" placeholder="请输入内容"></el-input>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="5"><p>建筑使用单位</p></el-col>
                        <el-col :span="19">
                            <el-input  v-model="formData.exploitUnit" placeholder="请输入内容"></el-input>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="5"><p>建筑管理单位</p></el-col>
                        <el-col :span="19">
                            <el-input  v-model="formData.managementUnit" placeholder="请输入内容"></el-input>
                        </el-col>
                    </el-row>

                </div>
            </div>
            <div class="wordborder">
                <p class='clickbox' v-on:click="click(2)">商务信息</p>
                <div class='content' v-show="show2">
                    <el-row>
                        <el-col :span="5"><p>项目模式</p></el-col>
                        <el-col :span="8">
                            <el-select v-model="formData.projectMode" placeholder="请选择">
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>

                        <el-col :span="5"><p>招标模式</p></el-col>
                        <el-col :span="6">
                            <el-select v-model="formData.tenderMode" placeholder="请选择">
                                <el-option
                                    v-for="item in options3"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="5"><p>业主需求对接人</p></el-col>
                        <el-col :span="8">
                            <el-input  v-model="formData.demandUser" placeholder="请输入内容"></el-input>
                        </el-col>

                        <el-col :span="5"><p>业主需求对接人联系方式</p></el-col>
                        <el-col :span="6">
                            <el-input  v-model="formData.demandUserPhone" placeholder="请输入内容"></el-input>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="5"><p>项目规模</p></el-col>
                        <el-col :span="6">
                            <el-input  v-model="formData.scale" placeholder="请输入内容">
                                <template slot="append">万元</template>
                            </el-input>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="5"><p>项目内容简介</p></el-col>
                        <el-col :span="19">
                      
                            <el-input
                                type="textarea"
                                :rows="3"
                                placeholder="请输入内容"
                                v-model="formData.content">
                            </el-input>
                            
                        </el-col>
                    </el-row>
                </div>
            </div>
            
            </el-form>
           
            <el-form :model="formData" :rules="rules" ref="formData">
            <div class="wordborder">
                <p class='clickbox' v-on:click="click(3)">拒绝原因</p>
                <div class='content' v-show="show3">
                    <el-row >
                        <el-col :span="5"><p>说明</p></el-col>
                        <el-col :span="19"> 
                            <el-form-item prop="progress">            
                            <el-input
                                type="textarea"
                                :rows="3"
                                placeholder="请输入内容"
                                v-model="formData.progress">
                            </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </div>
            </div>
            </el-form>

        </div>

        <div class='div5'>
            <el-button style='background-color:#666' @click="refuse('formData')" type="primary" round>拒绝</el-button>
            <el-button @click="accept" type="primary" round>立项</el-button>
        </div>
    </div>
</template>

<script>
import api from "@/api/index";
import DesignStepComponent from "@/components/DesignStepComponent";
import { Industry, ProjectMode, TenderMode } from "@/utils/util";
import {getStatusDesignDeptRouter} from '@/utils/statusDesignRouter';
export default {
  components: {
    DesignStepComponent
  },
  data() {
    return {
      disabled: true,
      show1: true,
      show2: true,
      show3: true,
      index: 1,
      options: ProjectMode,
      options2: Industry,
      options3: TenderMode,
      value: "",
      formData: {
        id: "", //项目主键
        leader: "", //项目负责人
        submitDate: "", //提交日期
        name: "", //项目名称
        industry: "", //行业
        floorArea: "", //建筑面积
        buildingAddr: "", //项目建筑地址
        exploitUnit: "", //项目使用单位
        managementUnit: "", //项目管理单位
        province: "", //省
        city: "", //市
        region: "", //区
        projectMode: "", //项目模式
        tenderMode: "", //招标模式
        demandUser: "", //业主需求对接人
        demandUserPhone: "", //联系方式
        scale: "", //项目规模
        content: "", //项目内容简介
        userName: sessionStorage.getItem("user"), //controller日志操作人
        progress: "" //拒绝原因
      },
      rules: {
        progress: [
          { required: true, message: "拒绝请输入拒绝原因", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    onSelected(data) {
      this.formData.province = data.province.value;
      this.formData.city = data.city.value;
      this.formData.region = data.area.value;
    },
    click(index) {
      if (index == 1) {
        this.show1 = !this.show1;
      } else if (index == 2) {
        this.show2 = !this.show2;
      }
    },
    //同意立项
    accept() {
      api.designDept.updateStatus(this.formData.id, 2).then(response => {
          this.$message.success("提交成功");
          this.$router.push(getStatusDesignDeptRouter(2));
        }).catch(error => {
          console.log(error);
        });
    },
    //拒绝立项
    refuse(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          api.designDept.updateStatusAndProgress(this.formData.id, 0).then(response => {
              if (!response) {
                this.$message.success("提交成功");
                this.$router.push(getStatusDesignDeptRouter(0));
              } else {
                    this.$message.error("提交失败");
              }
            });
        } else {
          this.$message("请检查输入是否正确");
          return false;
        }
      });
    },
    //回显数据
    loadData(id) {
      api.designDept
        .findById(id)
        .then(response => {
          this.formData.leader = response.leader; //项目负责人
          this.formData.submitDate = response.designSubmitTime; //提交日期
          this.formData.name = response.name; //项目名称
          this.formData.industry = response.industry; //行业
          this.formData.floorArea = response.floorArea; //建筑面积
          this.formData.buildingAddr = response.buildingAddr; //项目建筑地址
          this.formData.exploitUnit = response.exploitUnit; //项目使用单位
          this.formData.managementUnit = response.managementUnit; //项目管理单位
          this.formData.province = response.province; //省
          this.formData.city = response.city; //市
          this.formData.region = response.region; //区
          this.formData.projectMode = response.projectMode; //项目模式
          this.formData.tenderMode = response.tenderMode; //招标模式
          this.formData.demandUser = response.demandUser; //业主需求对接人
          this.formData.demandUserPhone = response.demandUserPhone; //联系方式
          this.formData.scale = response.scale; //项目规模
          this.formData.content = response.content; //项目内容简介
          this.formData.userName = sessionStorage.getItem("user"); //日志操作人
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted: function() {
    this.formData.id = this.$route.query.id; //获取路由传值
    this.loadData(this.formData.id); //加载数据
  }
};
</script>

<style lang='scss'>
.approval_pending_design_dept {
  margin: 10px auto;
  border: 1px solid #e7e8ed;
  .div2 {
    position: relative;
    margin: 25px;
    min-height: 20px;
    line-height: 40px;
    .content {
      width: 80%;
      margin: 35px;
      margin-left: 50px;
      p {
        padding: 0px 5px;
        margin: 0px 10px;
      }
    }
  }
  .div5 {
    text-align: center;
    margin-bottom: 20px;
  }
  .distpicker-address-wrapper {
    select {
      color: #c0c4cc;
      background: #f5f7fa;
      // appearance:none;
      // -moz-appearance:none; /* Firefox */
      // -webkit-appearance:none; /* Safari 和 Chrome */
    }
  }
}
</style>
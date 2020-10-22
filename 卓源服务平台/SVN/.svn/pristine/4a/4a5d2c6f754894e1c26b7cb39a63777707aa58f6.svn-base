<template>
    <div class='detail_design_dept'>
        <el-form disabled>
        <div class="box" >
            <p class='clickbox' v-on:click="click(1)" >立项信息</p>
            <div class='content' v-show="show1">
                <el-row>
                    <el-col :span="5"><p>项目名称</p></el-col>
                    <el-col :span="8" >
                        <el-input  v-model="formData.bizDesign.name" placeholder="请输入内容"></el-input>
                    </el-col>
                    <el-col :span="5"><p>当前状态</p></el-col>
                    <el-col :span="6">
                        <el-input  v-model="formData.statusText" placeholder="请输入内容"></el-input>
                    </el-col>
                </el-row>
                <el-row >
                    <el-col :span="5"><p>地区</p></el-col>
                    <el-col :span="8">
                        <v-distpicker :province="formData.bizDesign.province" 
                                :city='formData.bizDesign.city'
                                :area='formData.bizDesign.region' :disabled="disabled"></v-distpicker>
                    </el-col>
                </el-row>
                <el-row >
                    <el-col :span="5"><p>建筑面积</p></el-col>
                    <el-col :span="8">
                        <el-input  v-model="formData.bizDesign.floorArea" placeholder="请输入内容">
                            <template slot="append">m²</template>
                        </el-input>
                    </el-col>
                    <el-col :span="5"><p>项目规模</p></el-col>
                    <el-col :span="6">
                        <el-input  v-model="formData.bizDesign.scale" placeholder="请输入内容">
                            <template slot="append">万元</template>
                        </el-input>
                    </el-col>
                </el-row>
                <el-row >
                    <el-col :span="5"><p>项目建筑地址</p></el-col>
                    <el-col :span="8">
                        <el-input  v-model="formData.bizDesign.buildingAddr" placeholder="请输入内容"></el-input>
                    </el-col>
                    <el-col :span="5"><p>招标模式</p></el-col>    
                    <el-col :span="6">
                        <el-select v-model="formData.bizDesign.tenderMode" placeholder="请选择">
                            <el-option
                                v-for="item in options3"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>                                    
                </el-row>

                <el-row >
                    <el-col :span="5"><p>建筑使用单位</p></el-col>
                    <el-col :span="8"><el-input  v-model="formData.bizDesign.exploitUnit" placeholder="请输入内容"></el-input></el-col>
                    <el-col :span="5"><p>建筑管理单位</p></el-col>
                    <el-col :span="6"><el-input  v-model="formData.bizDesign.managementUnit" placeholder="请输入内容"></el-input></el-col>
                </el-row>
                <el-row >
                    <el-col :span="5"><p>项目模式</p></el-col>
                    <el-col :span="8">
                        <el-select v-model="formData.bizDesign.projectMode" placeholder="请选择">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="5"><p>行业</p></el-col>
                    <el-col :span="6">
                        <el-select v-model="formData.bizDesign.industry" placeholder="请选择行业">
                                <el-option
                                    v-for="item in options2"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                    </el-col>
                    <!-- <el-col :span="5"><p>招标模式</p></el-col>
                    <el-col :span="6"><el-input  v-model="obj" placeholder="请输入内容"></el-input></el-col> -->
                </el-row>
                <el-row >
                    <el-col :span="5"><p>业主需求对接人</p></el-col>
                    <el-col :span="8"><el-input  v-model="formData.bizDesign.demandUser" placeholder="请输入内容"></el-input></el-col>
                    <el-col :span="5"><p>联系方式</p></el-col>
                    <el-col :span="6"><el-input  v-model="formData.bizDesign.demandUserPhone" placeholder="请输入内容"></el-input></el-col>
                </el-row>
                <!-- <el-row >
                    <el-col :span="5"><p>项目规模</p></el-col>
                    <el-col :span="8"><p class='textItem ' >XXXXXXXXXX<span class='fr'>万元</span></p></el-col>
                </el-row> -->
                <el-row >
                    <el-col :span="5"><p>项目内容简介</p></el-col>
                    <el-col :span="19">
                        <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="formData.bizDesign.content">
                        </el-input>
                    </el-col>
                </el-row>
            </div>
        </div>

        <div class="box" >
            <p class='clickbox' v-on:click="click(2)" >图纸信息</p>
            <div class='content' v-show="show2">
                <el-row >
                    <el-col :span="5"><p>电子版图纸</p></el-col>
                    <el-col :span="8">
                        <el-card class="box-card">
                            <div v-for="fileItem in formData.fileList.electronicList" :key="fileItem.id" class="text item">
                                <el-link type="primary" :href="downloadUrl+fileItem.id">{{fileItem.showName }}</el-link>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-row >
                    <el-col :span="5"><p>智能化图纸</p></el-col>
                    <el-col :span="8">
                        <el-card class="box-card">
                            <div v-for="fileItem in formData.fileList.intelligentList" :key="fileItem.id" class="text item">
                                <el-link type="primary" :href="downloadUrl+fileItem.id">{{fileItem.showName }}</el-link>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-row >
                    <el-col :span="5"><p>装饰效果图</p></el-col>
                    <el-col :span="8">
                        <el-card class="box-card">
                            <div v-for="fileItem in formData.fileList.decorationList" :key="fileItem.id" class="text item">
                                <el-link type="primary" :href="downloadUrl+fileItem.id">{{fileItem.showName }}</el-link>
                            </div>
                        </el-card>                        
                    </el-col>
                </el-row>
                <el-row >
                    <el-col :span="5"><p>项目可研报告</p></el-col>
                    <el-col :span="8">
                        <el-card class="box-card">
                            <div v-for="fileItem in formData.fileList.reportList" :key="fileItem.id" class="text item">
                                <el-link type="primary" :href="downloadUrl+fileItem.id">{{fileItem.showName }}</el-link>
                            </div>
                        </el-card>   
                    </el-col>
                </el-row>
            </div>
        </div>

        <div class="box" >
            <p class='clickbox' v-on:click="click(3)" >设计需求</p>
            <div class='content' v-show="show3">
            <el-row>
                <el-col :span="5"><p>设计成果</p></el-col>
                <el-col :span="8">
                    <el-input v-model="formData.bizDesign.designSubmitResult" placeholder="请输入内容"></el-input>
                </el-col>
                <el-col :span="5"><p>成果提交方式</p></el-col>
                <el-col :span="6">
                    <el-input v-model="formData.bizDesign.designSubmitMode" placeholder="请输入内容"></el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="5"><p>提交时间</p></el-col>
                <el-col :span="8">
                    <el-date-picker
                        v-model="formData.bizDesign.designSubmitTime"
                        type="date"
                        value-format="yyyy-MM-dd">
                    </el-date-picker>
                </el-col>
                <el-col :span="5"><p>成果提交介质</p></el-col>
                <el-col :span="6">
                    <el-input v-model="formData.bizDesign.designSubmitMedium" placeholder="请输入内容"></el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="5"><p>基础智能化系统范围</p></el-col>
                <el-col :span="19">
                    <el-input v-model="formData.bizDesign.baseSystemScope" placeholder="请输入内容"></el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="5"><p>业务智能化系统范围</p></el-col>
                <el-col :span="19">
                    <el-input v-model="formData.bizDesign.businessSystemScope" placeholder="请输入内容"></el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="5"><p>其他要求</p></el-col>
                <el-col :span="19">
                    <el-input v-model="formData.bizDesign.otherRequire" placeholder="请输入内容"></el-input>
                </el-col>
            </el-row>
            </div>
        </div>

        <div class="box" >
            <p class='clickbox' v-on:click="click(4)" >设计方案</p>
            <div class='content' v-show="show4">
                <el-row>
                    <el-col :span="5"><p>设计周期</p></el-col>
                    <el-col :span="8">
                        <el-input  v-model="formData.bizDesign.designCycle" placeholder="请输入内容"></el-input>
                    </el-col>
                    <el-col :span="5"><p>拟交付时间</p></el-col>
                    <el-col :span="6">
                        <el-date-picker
                            value-format="yyyy-MM-dd"
                            v-model="formData.bizDesign.estimateDeliverTime"
                            type="date"
                            placeholder="选择日期">
                        </el-date-picker>
                    </el-col>
                </el-row>
                <el-row >
                    <el-col :span="5"><p>主设计师</p></el-col>
                    <el-col :span="8">
                        <el-input  v-model="formData.bizDesign.designerName" placeholder="请输入内容"></el-input>
                    </el-col>
                    <el-col :span="5"><p>主设计师联系方式</p></el-col>
                    <el-col :span="6">
                        <el-input  v-model="formData.bizDesign.phone" placeholder="请输入内容"></el-input>
                    </el-col>
                </el-row>
                <el-row >
                    <el-col :span="5"><p>设计范围</p></el-col>
                    <el-col :span="19">
                        <el-input  v-model="formData.bizDesign.designScope" placeholder="请输入内容"></el-input>
                    </el-col>
                </el-row>
                <el-row >
                    <el-col :span="5"><p>交付成果</p></el-col>
                    <el-col :span="19">
                        <el-input  v-model="formData.bizDesign.designResult" placeholder="请输入内容"></el-input>
                    </el-col>
                </el-row>
                <el-row >
                    <el-col :span="5"><p>设计费用</p></el-col>
                    <el-col :span="8">
                        <el-input  v-model="formData.bizDesign.designCost" placeholder="请输入内容">
                            <template slot="append">万元</template>
                        </el-input>
                    </el-col>
                </el-row>
            </div>
        </div>

        <div class="box" >
            <p class='clickbox' v-on:click="click(5)" >交付成果</p>
            <div class='content' v-show="show5">
                <el-row>
                    <el-card class="box-card">
                            <div v-for="fileItem in formData.fileList.resultList" :key="fileItem.id" class="text item">
                                <el-link type="primary" :href="downloadUrl+fileItem.id">{{fileItem.showName }}</el-link>
                            </div>
                    </el-card>   
                </el-row>
            </div>
        </div>
        </el-form>
    </div>
</template>
<script>
import store from "@/store/index";
import base from "@/api/base";
import { getStatusDesignDeptRouter } from "@/utils/statusDesignRouter";
import { Industry, ProjectMode, TenderMode } from "@/utils/util";
import api from "@/api/index";
export default {
  data() {
    return {
      downloadUrl:
        base.sq +
        "/bizDesign/dept/download?access_token=" +
        store.getters.token +
        "&fileId=", //下载路径
      disabled: true,
      options: ProjectMode,
      options2: Industry,
      options3: TenderMode,
      obj: "",
      show1: true,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      flag: false,
      formData: {
        statusText: "",
        bizDesign: {
          id: "",
          name: "", //项目名称
          industry: "", //行业
          province: "", //省
          city: "", //市
          region: "", //区
          floorArea: "", //建筑面积
          buildingAddr: "", //建筑地址
          tenderMode: "", //招标模式
          exploitUnit: "", //建筑使用单位
          managementUnit: "", //建筑管理单位
          scale: "", //建筑规模
          projectMode: "", //项目模式
          demandUser: "", //业主需求对接人负责人
          demandUserPhone: "", //业主需求对接人联系方式
          content: "", //项目内容简介
          designSubmitResult: "", //设计成果
          designSubmitMode: "", //成果提交方式
          designSubmitTime: "", //提交时间
          designSubmitMedium: "", //成果提交介质
          baseSystemScope: "", //基础智能化系统范围
          businessSystemScope: "", //业务智能化系统范围
          otherRequire: "", //其他要求
          designCycle: "", //设计周期
          estimateDeliverTime: "", //拟交付时间
          designerName: "", //主设计师
          phone: "", //主设计师联系方式
          designScope: "", //设计范围
          designResult: "", //交付成果
          designCost: "", //设计费用
        },
        fileList: {
          electronicList: [], //电子版图纸附件
          intelligentList: [], //智能化图纸附件
          decorationList: [], //装饰效果图附件
          reportList: [], //项目可研报告
          resultList: [] //成果附件
        }
      }
    };
  },
  methods: {
    onSelected(data) {
      console.log(data);
    },
    click(index) {
      if (index == 1) {
        this.show1 = !this.show1;
      } else if (index == 2) {
        this.show2 = !this.show2;
      } else if (index == 3) {
        this.show3 = !this.show3;
      } else if (index == 4) {
        this.show4 = !this.show4;
      } else if (index == 5) {
        this.show5 = !this.show5;
      } 
    },
    click2(index) {
      this.formData.monthList[index].flag = !this.formData.monthList[index]
        .flag;
    },
    loadData() {
      api.designDept
        .findProjectDetailsById(this.formData.bizDesign.id)
        .then(response => {
          this.formData.statusText = response.statusText;
          this.formData.bizDesign = response.bizDesign;
          this.formData.fileList = response.fileList;
          for (let i in response.monthList) {
            let monthObject = new Object();
            monthObject.id = response.monthList[i].bizDesignMonth.id;
            monthObject.purchasingMonth =
              response.monthList[i].bizDesignMonth.purchasingMonth;
            monthObject.cost = response.monthList[i].bizDesignMonth.cost;
            monthObject.flag = false;
            monthObject.fileList = response.monthList[i].fileList;
            this.formData.monthList.push(monthObject);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted: function() {
    this.formData.bizDesign.id = this.$route.query.id; //获取路由传值
    this.loadData();
  }
};
</script>
 

<style lang='scss'>
.detail_design_dept {
  margin: 0 auto;
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

.disabled-select select {
  background-color: #e7e8ed;
  // cursor: not-allowed;

  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border: none;

  // width:20%;
  margin: 0;
  padding: 0;
  height: 28px;
}
</style>
<template>
    <div class="product_code_preview">
        <p class='mybreadcrumb' >
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/workbench/dataCoding/CodeList' }">附加功能</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/workbench/dataCoding/CodeList' }">编码列表</el-breadcrumb-item>
                <el-breadcrumb-item >补印</el-breadcrumb-item>
            </el-breadcrumb>
        </p>
        <el-card class="box-card">
            <div class="text item" >{{data}}</div>
        </el-card>
        <div class='div5'>
            <el-button type="primary" @click="print()">打印条码</el-button>
        </div>
    </div>
</template>
<script>
import {getLodop} from '@/utils/LodopFuncs'
export default {
  data() {
    return {
        data:"",
        LODOP:'',
    }
  },
  methods: {
    CreateOneFormPage35_8() {
        LODOP = getLodop();
        LODOP.SET_PRINT_PAGESIZE (1,'35mm','8mm','');
        LODOP.SET_PRINT_MODE("POS_BASEON_PAPER",true);
        LODOP.NewPage();     
        LODOP.ADD_PRINT_TEXT('2mm','3mm','35mm','4mm',this.data) 
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0,"FontName","微软雅黑");
    },
    print(id_str){//id-str 打印区域的id
        this.CreateOneFormPage35_8();
    //        LODOP.PRINT();
        LODOP.PREVIEW();
    }
  },
  mounted: function () {
        this.data = this.$route.query.sendData;
  },
}

</script>
<style lang='scss'>
    .product_code_preview {
        .div5 {
            text-align: center;
            margin-top:20px;
            margin-bottom: 20px;
        }
        .mybreadcrumb {
            margin: 15px 20px 35px 13px;
        }
        .box-card {
            position: relative;
            height: 40px;
            padding: 0px;
            margin: 10px auto;
            width: 165px!important;
            font-family:"微软雅黑";
            text-align: center;
            line-height: 40px;
            .text {
                position: absolute;
                font-size: 14px;
                bottom: 0px;
                letter-spacing: 4px;
            }
            .product_code_img {
                right:75px;
            }
        }
    }
    
</style>
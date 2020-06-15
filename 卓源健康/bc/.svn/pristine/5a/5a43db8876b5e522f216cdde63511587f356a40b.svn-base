<template>
    <div id="reservedList">
        <el-breadcrumb>
            <el-breadcrumb-item :to="{ path:'/workbench/stockControl/reservedList'}">库存管理</el-breadcrumb-item>
            <el-breadcrumb-item>留样列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
        <el-row class="mb20" :gutter="10">
            <el-col :span="5"><el-input clearable v-model="query.code" placeholder="请输入制备编号"  ></el-input></el-col>
            <el-col :span="12"><el-button type="warning" @click="onSubmit">搜索</el-button></el-col>
        </el-row>
            <el-table :data="pageResult.rows"  border stripe>
                <el-table-column  label="制备编号">
                    <template slot-scope="scope">
                        <el-link type="primary" @click="particularList(scope.row.id)">{{scope.row.code}}</el-link>
                    </template>
                </el-table-column>
                <el-table-column prop="product_date"  label="制备日期"></el-table-column>
                <el-table-column prop="expiry_date"  label="过期日期"></el-table-column>
                <el-table-column prop="donator_name"  label="供体姓名"></el-table-column>
                <el-table-column prop="main_person"  label="主制备人"></el-table-column>
                <el-table-column prop="support_person"  label="辅制备人"></el-table-column>
                <el-table-column  label="操作">
                    <template slot-scope="scope">
                        <el-button type="info" @click="print(scope.row.id)">补印</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 页码 -->
            <el-pagination
                @current-change="handleCurrentChange"
                :current-page="pageRequest.pageNumber"
                :page-size="pageRequest.pageSize"
                layout="total, prev, pager, next, jumper"
                :total="pageResult.total">
            </el-pagination>
        </el-card>
    </div>
</template>

<script>
import api from '@/api/index' // 导入api接口
import {STATION_TYPE,rawStatus} from "@/utils/util";
import {query,pageRequest,pageResult,pageSearch,conditionSearch,createdSearch,getKeepPage} from '@/utils/pageResult';
export default {

    data () {
        return {
            pageRequest:pageRequest,
            query:query,
            pageResult:pageResult,
            mainPersons:[],//主制备人员列表
            supportPersons:[],//辅制备人员列表
            birthday:'',
            joinDate:'',
            rawStatus:rawStatus,//状态
        }
    },
    methods: {
        // 按钮事件
        onSubmit(){
        conditionSearch(getKeepPage,query,pageRequest,pageResult)
        },
        // 当前页码
        handleCurrentChange(val){
			this.paramterCollection()
            this.pageRequest.pageNumber = val   
            pageSearch(getKeepPage,query,pageRequest,pageResult)
        },
        // 列表详情页面
        particularList(id){
        this.$router.push({
            path:"/workbench/stockControl/particularsFinishedProduct",
            query:{id:id}
        })
        },
        //补印
        print(id){
        this.$router.push({
            path:"/workbench/stockControl/reservedPrinting",
            query:{id:id}
        })
        },
        // 箱号详情页面
        ctnParticular(id){
        this.$router.push({
            path:"/workbench/stockControl/showDetailsFinishedProduct",
            query:{id:id}
        })
        },
      

  },
  created () {
    createdSearch(getKeepPage,query,pageRequest,pageResult)
  }
}
</script>

<style lang=scss>
#reservedList{
	.mb20{
		margin-bottom: 20px;
		.lh40{
			line-height: 40px;
		}
	}
	
}
</style>

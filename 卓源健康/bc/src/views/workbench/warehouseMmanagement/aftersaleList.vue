<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb>
      <el-breadcrumb-item :to="{ path:'/workbench/warehouseMmanagement/aftersaleList' }">出库管理</el-breadcrumb-item>
      <el-breadcrumb-item>售后列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <el-row :gutter="20">
        <el-col :span="5"><el-input  v-model="query.code"   placeholder="请输入箱号编码"  class="input-with-select"></el-input></el-col>
        <el-col :span="12"><el-button type="warning" @click="onSubmit">搜索</el-button></el-col>
      </el-row>
      <!-- 列表数据 -->
      <el-table :data="pageResult.rows"  border stripe>
        <el-table-column prop="code" label="箱号编码">
          <template slot-scope="scope">
           <el-link type="primary" @click="ctnParticular(scope.row.id)">{{scope.row.code}}</el-link>
          </template>
        </el-table-column>
        <el-table-column prop="name"  label="客户名称"></el-table-column>
        <el-table-column  label="出货地区">
          <template slot-scope="scope">
              {{scope.row.province}}-{{scope.row.city}}-{{scope.row.region}}
            </template>  
        </el-table-column>
        <el-table-column prop="date" label="出货日期"> </el-table-column>
        <el-table-column prop="receive_date" label="收货日期"> </el-table-column>
        <el-table-column prop="count"  label="本箱数量"></el-table-column>
        <el-table-column prop="status" label="售后状态"> </el-table-column>
        <el-table-column  label="操作">
          <template slot-scope="scope">
               <el-button v-if="scope.row.status==null" type="danger" @click="afterSale(scope.row.id)">售后</el-button>
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
import {query,pageRequest,pageResult,pageSearch,conditionSearch,createdSearch,getaFersaleList} from '@/utils/pageResult';
export default {

  data () {
    return {
      query:query,
      pageResult:pageResult,
      pageRequest:pageRequest
    }
  },

  methods: {
    // 点击查询
    onSubmit(){
      conditionSearch(getaFersaleList,query,pageRequest,pageResult)
    },
    // 当前页码
    handleCurrentChange(val){
      this.pageRequest.pageNumber = val
      pageSearch(getaFersaleList,query,pageRequest,pageResult)
    },
    // 箱号详情
    ctnParticular(id){
      this.$router.push({
        path:"/workbench/warehouseMmanagement/showDetailsAfterSale",
        query:{id:id}
      })
    },
    //售后跳转
    afterSale(id){
      this.$router.push({
        path:"/workbench/warehouseMmanagement/sale",
        query:{id:id}
      })
    }
  },

  created () {
    createdSearch(getaFersaleList,query,pageRequest,pageResult)
  }
}
</script>

<style>
</style>

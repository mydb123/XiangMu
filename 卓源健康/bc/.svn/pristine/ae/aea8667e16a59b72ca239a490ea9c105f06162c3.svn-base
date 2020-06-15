<template>
    <div>
        <div>
            <el-breadcrumb>
                <el-breadcrumb-item :to="{ path: '/backstageManagement/Information/finishedproductModification' }">信息微调</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/backstageManagement/Information/finishedproductModification'}">成品信息修改</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-card>
            <el-row :gutter="20">
                <el-col :span="5">
                <el-input clearable v-model="query.code" placeholder="请输入制备编号"  class="input-with-select"></el-input>
                </el-col>
                <el-col :span="12">
                <el-button type="primary" @click="onSubmit">搜索</el-button>
                </el-col>
            </el-row>
            <!-- 列表数据 -->
            <el-table :data="pageResult.rows"  border stripe>
            <el-table-column  label="制备编号">
                <template slot-scope="scope">
                <el-link :underline="false">{{scope.row.code}}</el-link>
                </template>
            </el-table-column>
            <el-table-column prop="product_date"  label="制备日期"></el-table-column>
            <el-table-column prop="expiry_date"  label="过期日期"></el-table-column>
            <el-table-column prop="box_code"  label="箱号编码"></el-table-column>
            <el-table-column prop="sell_date"  label="出货日期"></el-table-column>
            <el-table-column prop="receive_date"  label="收货日期"></el-table-column>
            <el-table-column prop="status"  label="当前状态"></el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template slot-scope="scope">
                <el-button @click="lookDetails(scope.row.id)" type="primary">修改</el-button>
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
import {query,pageRequest,pageResult,pageSearch,conditionSearch,createdSearch,getProductInformationList} from '@/utils/pageResult';
export default {

  data () {
    return {
      pageRequest:pageRequest,
      query:query,
      pageResult:pageResult
    }
  },

  methods: {
    // 按钮事件
    onSubmit(){
      conditionSearch(getProductInformationList,query,pageRequest,pageResult)
    },
    // 当前页码
    handleCurrentChange(val){
      this.pageRequest.pageNumber = val
      pageSearch(getProductInformationList,query,pageRequest,pageResult)
    },
     //查看详情
    lookDetails(id) {
      this.$router.push({
        path: "/backstageManagement/Information/productDetail",
        query: { id: id }
      });
    }, 
  },
  created () {
    createdSearch(getProductInformationList,query,pageRequest,pageResult)
  }
}
</script>

<style>

</style>

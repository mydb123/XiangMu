<template>
    <!-- <div>
        状态4
        方案已确认，请缴费
    </div> -->
    <div class='plan_fee_design_dept'>
        <DesignStepComponent :index='index'></DesignStepComponent>
        <div>
            <p class='p1'>等待合伙人缴费中...</p>
            <p class='p2'>近期您将收到本平台的电话回访邀请，<br/>在信息确认后您将获得更多此项目的信息</p>
            <el-button @click="goList" type="primary" round>返回项目列表</el-button>
        </div>
    </div>    
</template>

<script>
import DesignStepComponent from '@/components/DesignStepComponent'
import {designDeptListRouter} from '@/utils/designListRouter'
export default {
    components: {
        DesignStepComponent
    },
    data() {
        return {
            index:4
        }
    },
    methods: {
        goList() {
            this.$router.replace(designDeptListRouter.fee).then(() => {
                location.reload();
            }); 
        }
    }    
}
</script>

<style lang='scss'>
.plan_fee_design_dept{
    margin: 0px auto;
    border: solid 1px #000;
    padding-bottom: 20px;
    text-align: center;
    .p1{
        width:70%;
        left: 27px;
        position: relative;
        text-align: left;
        height: 100px;
        margin-top:70px;
    }
    .p2{
        border: solid 1px;
        width: 50%;
        margin: 20px auto;
        padding: 20px 0;
        margin-bottom: 50px;
    }
}

</style>
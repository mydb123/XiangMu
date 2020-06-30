<template>
    <!-- <div>
        状态0
        中断项目
    </div> -->
    <div class='fail_detail_design_partner'>
        <DesignStepComponent :index='index'></DesignStepComponent>
        <div>
            <p class='p1'>项目已中止...</p>
            <p class='p2'>您可以在中止界面查看具体信息</p>
            <el-button @click="goList" type="primary" round>返回项目列表</el-button>
        </div>
    </div>    
</template>

<script>
import DesignStepComponent from '@/components/DesignStepComponent'
import {designPartnerListRouter} from '@/utils/designListRouter'
export default {
    components: {
        DesignStepComponent
    },
    data() {
        return {
            index:0
        }
    },
    methods: {
        goList() {
            this.$router.replace(designPartnerListRouter.fail).then(() => {
                location.reload();
            }); 
        }
    }
}
</script>

<style lang='scss'>
.fail_detail_design_partner{
    margin: 0px auto;
    border:1px solid #E7E8ED; 
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
        border: solid 1px #E7E8ED;
        width: 50%;
        margin: 20px auto;
        padding: 20px 0;
        margin-bottom: 50px;
    }
}

</style>
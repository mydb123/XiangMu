<template>
    <!-- <div>
        状态3.
        清单已确认，方案编制中.
    </div> -->
    <div class='plan_upload_purchase_partner'>
        <StepComponent :index='index'></StepComponent>
        <div>
            <p class='p1'>您的项目正在编制方案...</p>
            <p class='p2'>近期您将收到本平台的电话回访邀请，<br/>在信息确认后您将获得更多此项目的信息</p>
            <el-button @click="goList" type="primary" round>返回项目列表</el-button>
        </div>
    </div>    
</template>

<script>
import StepComponent from '@/components/StepComponent'
export default {
    components: {
        StepComponent
    },
    data() {
        return {
            index:3,
        }
    },
    methods: {
        goList() {
            this.$router.push('/purchase/partner/progress/plan').then(()=>{
                location.reload();
            });
        },
    },
}
</script>

<style lang='scss'>
.plan_upload_purchase_partner{
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
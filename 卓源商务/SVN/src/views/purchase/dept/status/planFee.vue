<template>
    <!-- <div>
        状态33.
        方案已确认，请缴费
    </div> -->
    <div class='plan_fee_purchase_dept'>
        <StepComponent :index='index'></StepComponent>
        <div>
            <p class='p1'>方案已确认...</p>
            <p class='p2'>等待合伙人缴费</p>
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
            this.$router.push('/purchase/dept/progress/plan').then(()=>{
                location.reload();
            });
        },
    },
}
</script>

<style lang='scss'>
.plan_fee_purchase_dept{
    margin: 0px auto;
    border: solid 1px #bbb;
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
        border: solid 1px #bbb;
        width: 50%;
        margin: 20px auto;
        padding: 20px 0;
        margin-bottom: 50px;
    }
}

</style>
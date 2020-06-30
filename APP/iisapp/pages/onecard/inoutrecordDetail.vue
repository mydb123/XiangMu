<template>
	<view>
		<view class="flex_item">
			<view class="flex_item_head">
				<label>用户姓名:</label>
				<text>{{inoutrecordDetail.Emplyname}}</text>
			</view>
			<view class="flex_item_head">
				<label>部门名称:</label>
				<text>{{inoutrecordDetail.Dptname}}</text>
			</view>
			<view class="flex_item_head">
				<label>用户证件:</label>
				<text>{{inoutrecordDetail.Emplyid}}</text>
			</view>
			<view class="flex_item_head">
				<label>用户性别:</label>
				<text>{{inoutrecordDetail.EmplySex}}</text>
			</view>
			<view class="flex_item_head">
				<label>房门名称:</label>
				<text>{{inoutrecordDetail.Door_name}}</text>
			</view>
			<view class="flex_item_head">
				<label>进出日期及时间:</label>
				<text>{{inoutrecordDetail.IODate}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inoutrecordDetail: {}
			}
		},
		methods: {
			
		},
		onLoad(option) {
			const inoutrecordDetail = JSON.parse((option.inoutrecordDetail));
			this.inoutrecordDetail = inoutrecordDetail;
		}
	}
</script>

<style lang="scss">
.flex_item{
	display: flex;
	flex-direction:column;
	margin: 10rpx auto;
	box-shadow: 0 -10rpx 0 #ccc; 
	.flex_item_head{
		display: flex;
		border-bottom: 2rpx solid #ece9ec;
	}
	.flex_item_head:nth-of-type(2n){
		background-color: #f6f3f7;
	}
	.flex_item_head label:nth-of-type(1){
		width: 30%;
		text-align: center;
		height: 100rpx;
		line-height: 100rpx;
		font-size: 30rpx;
	}
	.flex_item_head text:nth-last-of-type(1){
		width: 70%;
		text-align: center;
		line-height: 100rpx;
	}
	.flex_item_head textarea:nth-of-type(1){
		width: 70%;
		height: 172rpx;
		text-align: center;
		padding-top: 16rpx;
		box-sizing: border-box;
		overflow: hidden;
	}
}
</style>

<template>
	<view>
		<view class="flex_item">
			<view class="flex_item_head">
				<label>编号:</label>
				<text>{{deviceDetail.id}}</text>
			</view>
			<view class="flex_item_head">
				<label>报警类型:</label>
				<text>{{deviceDetail.alarmType}}</text>
			</view>
			<view class="flex_item_head">
				<label>报警等级:</label>
				<text>{{deviceDetail.alarmLevel}}</text>
			</view>
			<view class="flex_item_head">
				<label>报警内容:</label>
				<textarea :value="deviceDetail.alarmContent"/>
			</view>
			<view class="flex_item_head">
				<label>报警点:</label>
				<text>{{deviceDetail.pointName}}</text>
			</view>
			<view class="flex_item_head">
				<label>报警设备:</label>
				<text>{{deviceDetail.equipName}}</text>
			</view>
			<view class="flex_item_head">
				<label>报警子系统:</label>
				<text>{{deviceDetail.sysName}}</text>
			</view>
			<view class="flex_item_head">
				<label>是否处理:</label>
				<text>{{deviceDetail.isHandle}}</text>
			</view>
			<view class="flex_item_head">
				<label>是否弹出:</label>
				<text>{{deviceDetail.isPopup}}</text>
			</view>
			<view class="flex_item_head">
				<label>处理人:</label>
				<text>{{deviceDetail.handlePerson}}</text>
			</view>
			<view class="flex_item_head">
				<label>发生时间:</label>
				<text>{{deviceDetail.occurTime}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				deviceDetail:{}
			};
		},
		onLoad(option) {
			this.deviceDetail= JSON.parse(option.deviceDetail);
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

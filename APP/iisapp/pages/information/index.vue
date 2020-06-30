<template>
	<view>
		<uni-card class="card" @click="clickdetail(queryData)">
			<view class="nav">
				<view class="nav_img">
					<image src="../../static/font/offline.png" mode=""></image>
				</view>
				<view class="mid">
					<view>名称:&nbsp;&nbsp;{{queryData.name}}</view>
					<view>设备状态:&nbsp;&nbsp;{{queryData.status}}</view>
				</view>
				
				<view class="nav_enterimg">
					<image src="../../static/font/more.png" mode=""></image>
				</view>
			</view>
		</uni-card>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				queryData:{
					name:"亚索",
					status:"已下线"
				}
			};
		},
		methods:{
			clickdetail(queryData){
				uni.redirectTo({
					url:"./indexdetail?record="+JSON.stringify(queryData)
				})
			}
		}
	}
</script>

<style lang="scss">
.card{
		margin: 20rpx 10rpx;
		border-radius: 30rpx;
		height:100%;
		box-shadow: 0 0 10rpx #ccc;
		.nav{
			display: flex;
			justify-content: space-between;
			.nav_img{
				width: 100rpx;
				height: 100rpx;
				margin: auto 0;
				border-radius: 50%;
				box-shadow: 0 0 10rpx #ccc ;
				margin-right: 10rpx;
				text-align: center;
				line-height: 160rpx;
				image{
					width: 75%; 
					height: 75%;
					
				}
			}
			.mid{
				flex: 1;
				margin-left: 30rpx;
				view:nth-child(1){
					font-size: 30rpx;
					color: #000;
				}
				view:nth-child(2){
					font-size: 24rpx;
					color: #ccc;
				}
			}
			.nav_enterimg{
				width: 40rpx;
				height: 50rpx;
				margin: auto 0;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>

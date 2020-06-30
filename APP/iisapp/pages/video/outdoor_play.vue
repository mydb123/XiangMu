<template>
	<view>
		室外列表-播放
		<web-view :src="stream_server_url_play"></web-view>
	</view>
</template>

<script>
	export default {
		onLoad(option) {
			this.u = uni.getStorageSync('username')
			this.p = uni.getStorageSync('password')
			this.id = option.id;
			let temp = '/hybrid/html/play.html?id='+this.id+'&flag='+4+'&u='+this.u+'&p='+this.p
			this.stream_server_url_play = temp
		},
		data() { 
			return {
				id:-1, 
				stream_server_url_play:'',
				u:'',
				p:'',
			};  
		},
        methods: {
            
        }, 
		mounted() {
			 
		}
	}
</script>

<style lang="scss">
.card{
		margin: 20rpx 0 0;
		border-radius: 30rpx;
		height:100%;
		.nav{
			display: flex;
			justify-content: space-between;
			.nav_img{
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;
				box-shadow: 0 8rpx 10rpx #ccc ;
				margin-right: 10rpx;
				image{
					width: 100%; 
					height: 100%;
				}
			}
			.mid{
				flex: 1;
				line-height: 70rpx;
				font-size: 28rpx;
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

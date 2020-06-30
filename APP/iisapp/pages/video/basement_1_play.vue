<template>
	<view>
		地下室一摄像头列表-播放
		<web-view :src="stream_server_url_play"></web-view>
	</view>
</template>

<script>
	export default {
		onLoad(option) {
			this.u = uni.getStorageSync('username')
			this.p = uni.getStorageSync('password')
			this.id = option.id;
			let temp = '/hybrid/html/play.html?id='+this.id+'&flag='+1+'&u='+this.u+'&p='+this.p
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

</style>

<template>
	<view>
		<web-view :src="loginsrc"></web-view>
	</view>
</template>

<script>
	export default {
		onLoad(option) {
			this.u = uni.getStorageSync('username')
			this.p = uni.getStorageSync('password')
			this.loginsrc = '/hybrid/html/login.html?'+'u='+this.u+'&p='+this.p
		},
		data() { 
			return {
				loginsrc:'',
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

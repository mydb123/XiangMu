<template>
	<view>
		<view class="uni-list">
			<!-- <view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value, key) in listData" :key="key"> -->
				<view class="uni-media-list">
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">
							<text>楼层：1</text>
							<text>编号：A1-1-01</text>
						</view>
						<view class="uni-media-list-text-bottom">
							<text>报警类型：手报</text>
							<text>状态:</text>
						</view>
					</view>	
				</view>
			<!-- </view> -->
		</view>
		<uni-load-more :status="status" :show-icon="showIcon" :icon-size="16"  :content-text="contentText" />
	</view>	
</template>
 
<script>
import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
import {get,post,urls,address} from '@/utils/http.js';

export default {
	components: {
		uniLoadMore
	},
	data() {
		return {
			listData: [],
			total:0,
			status: 'more',
			showIcon:false,
			contentText :{
				// contentdown: '上拉加载更多',
				// contentnomore: '没有更多',
			}
		};
	},
	//监听页面加载
	onLoad() {
		
	},
	//下拉刷新
	onPullDownRefresh() {
		this.listData = [];
		this.queryData.pageIndex = 0;
		this.status = "loading";
		setTimeout(()=>{
			this.getList(()=>{
				uni.stopPullDownRefresh();
			});
		},1000)
	},
	//触底加载数据
	onReachBottom() {

	},
	methods: {

	}
};
</script>

<style>
.uni-media-list-body {
	height: auto;
	justify-content: space-around;
}

.uni-media-list-text-top {
	display: flex;
	height: 74rpx;
	font-size: 28rpx;
	overflow: hidden;
	justify-content: space-between;
}

.uni-media-list-text-bottom {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
</style>

<template>
	<view>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in listData" :key="item.id" @click="godevicefull(item)" >
				<view class="uni-media-list">
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">
							<text>报警类型: {{item.alarmType}}</text>
							<text>{{item.alarmLevel}}级报警</text>
						</view>
						<view class="uni-media-list-text-bottom">
							<text>处理人:{{item.handlePerson}}</text>
							<text>{{item.occurTime}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<uni-load-more :status="status" :show-icon="showIcon" :icon-size="16" :content-text="contentText" />
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
			banner: {},
			listData: [],//表的信息
			last_id: '',
			reload: false,   
			status: 'more',
			showIcon: false,
			contentText: {
				contentdown: '上拉加载更多',
				contentnomore: '没有更多'
			},
			queryData:{
				"action":"AlarmAction",
				"event_submit_do_find":"method",
				"pageIndex":0,
				"pageSize":20,
				"sortField":"",
				"sortOrder":""
			}
		};
	},
	onLoad() {
		this.getList();
	},
	//触底加载数据
	onReachBottom() {
		if((this.total - this.listData.length) > 0){
			this.status = 'more';
		}else {
			this.status = 'noMore';
		}
		this.queryData.pageIndex++;
		this.getList();
	},
	methods: { 
		//下拉加载
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
		
		getList(callback) {
			
			let url = urls.icms_url + address.adminScreen;
			post(url,this.queryData).then(res =>{
				this.listData = [...this.listData,...res[1].data.data];
				this.total = res[1].data.total;
			})
			callback && callback();
		},
		godevicefull(e) {
			let detail = {
				id: e.id,//编号
				alarmType: e.alarmType,//报警类型
				alarmLevel: e.alarmLevel,//报警等级
				alarmContent: e.alarmContent,//报警内容
				pointName: e.pointName,//报警点
				equipName: e.equipName,//报警设备
				sysName: e.sysName,//报警子系统
				isHandle: e.isHandle,//是否处理
				isPopup: e.isPopup,//是否弹出
				handlePerson: e.handlePerson,//处理人
				occurTime: e.occurTime,//发生时间
			};
			uni.navigateTo({
				url: 'devicefull?deviceDetail=' + JSON.stringify(detail)
				// url: './detail/loginfoDetail?id='+e.id+'&module='+e.module+'
			});
		},
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

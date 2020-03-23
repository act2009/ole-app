<template>
     
     <view class="index">
         <!-- #ifdef H5 -->
         <view class="custom-nav">
         				<view class="iconfont icon-sousuo"></view>
         				<text>百年奥莱</text>
         				<view class="iconfont icon-xiaoxi"></view>	 
         </view>
         <!-- #endif -->
		 
		 <scroll-view scroll-x="true" class="scroll-content" :scroll-into-view="scrollIntoIndex">
		 	<view :id="'top'+index"
			 class="scroll-item" v-for="(item,index) in topBar" :key="index" @tap="changeTab(index)">
				<text :class=" topBarIndex===index? 'font-active-color' :'font-color' ">{{item.name}}</text>
			</view>
		 </scroll-view>

		 <swiper @change="onChangeTab" :current="topBarIndex" :style="'height:'+clientHight+'px;'">
		 	<swiper-item v-for="(item,index) in newTopBar" :key="index">
		 		<!-- <view class="home-data"> </view> -->
				<scroll-view  scroll-y="true" :style="'height:'+clientHight+'px;'">
	
	<block v-if="item.data.length > 0">
		
				
<block  v-for="(k,i) in item.data" :key="i">
	<IndexSwiper v-if="k.type==='swiperList'" :dataList="k.data"></IndexSwiper>

	<template v-if="k.type==='recommendList'" >
	<Recommend :dataList="k.data"></Recommend>
	<Card cardTitle="猜你喜欢"></Card>
	</template>


	<CommondityList v-if="k.type==='commondityList'" :dataList="k.data" ></CommondityList>
</block>
</block>
<view v-else>
	没有了，没有数据了。
</view>
						
</scroll-view>



				
		 	</swiper-item>

		 </swiper>
		 
	<!--推荐模版-->
<!-- 		 <view class="iconfont icon-xiaoxi">嘻嘻😳</view>
		 
	 <IndexSwiper></IndexSwiper>
	 <Recommend></Recommend>
	 
		<Card cardTitle="a"></Card>
		
	  <CommondityList></CommondityList> -->
	<!--其他模版：户外，推荐-->
		  
<!-- 	  <Banner></Banner>
	  <Icons></Icons>

	<Card cardTitle="热销爆品"></Card>
	<Hot></Hot>
	<Card cardTitle="推荐店铺"></Card>
	<Shop></Shop>
	<Card cardTitle="为您推荐"></Card>
	<CommondityList></CommondityList>	 -->

</view>
</template>

<script>
	import IndexSwiper from '@/components/index/IndexSwiper.vue'
	import Recommend   from '@/components/index/Recommend.vue'
	import Card        from '@/components/common/Card.vue'
	import CommondityList from '@/components/common/CommondityList.vue'
	import Banner      from '@/components/index/Banner.vue'
	import Icons       from '@/components/index/Icons.vue'
	import Hot         from '@/components/index/Hot.vue'
	import Shop        from '@/components/index/Shop.vue'

	export default {
		data() {
			return {
				//选中的索引
				topBarIndex:0,
				//顶栏滑动跟随的索引
				scrollIntoIndex:"top0",
				//数据高度
				clientHight:0,
				//顶栏数据
				topBar:[
					// {name:"推荐"},
					// {name:"运动户外"},
					// {name:"服饰内衣"},
					// {name:"鞋靴箱包"},
					// {name:"美妆个护"},
					// {name:"家居数码"},
					// {name:"食品母婴"}
					
				],
				//承载数据
				newTopBar:[
					
				]
			}
		},
		components:{
			IndexSwiper,
			Recommend,
			Card,
			CommondityList,
			Banner,
			Icons,
			Hot,
			Shop,
		},
		onLoad() {
			this.getClientHeight();
			this.__init();

			

		},
		onReady() {
// 			let view=uni.createSelectorQuery().select('.home-data');
// 			view.boundingClientRect(data => {
// 				this.clientHight=data.height;
// // console.log(data.height);
// 			}).exec();
            uni.getSystemInfo({
				success: (res) => {
				//	console.log(res);
					this.clientHight=res.windowHeight-uni.upx2px(80)-this.getClientHeight();
				}
			});
		},
		methods: {
			//getdata
			__init(){
				uni.request({
					url:"http://192.168.0.3:3000/api/index_list/data",
					success: (res) => {
						//console.log(res.data.data);
						let data=res.data.data;
						this.topBar=data.topBar;
						this.newTopBar=this.initData(data);
						
					}})
			},
			//add data
			initData(res){
				let arr=[];
				//console.log(this.topBar.length);
				for(let i=0;i<this.topBar.length;i++){
					let obj={data:[]};
					//获取首次数据
					if(i==0){
						obj.data=res.data;
					}
					arr.push(obj);
				}

				
				return arr;
			},
			//switch click topBar
			changeTab(index){
				if(this.topBarIndex===index){
					return;
				}
				this.topBarIndex=index;
				this.scrollIntoIndex='top'+index;
			},
			//finger move
			onChangeTab(e){
				this.changeTab(e.detail.current);
			},
			//获取可视区高度
			getClientHeight(){
				const res=uni.getSystemInfoSync();
				console.log(res.platform,res.statusBarHeight);
				const system=res.platform;
				if(system==='android'){
					return 48+res.statusBarHeight;
				}else if(system==='ios'){
					return 44+res.statusBarHeight;
				}else{
					return 0;
				}
			}
            
		}
	}
</script>

<style scoped>
	.demo1{
		background-color:#007AFF;
	}

	.custom-nav{
		height: 200rpx;
		width: 100%;
		line-height: 200rpx;
		text-align: center;
		display: flex;
		justify-content: space-between;
		align-items: center;

	}

	.scroll-content{
		width: 100%;
		height: 80rpx;
		white-space: nowrap;
	}
	.scroll-item{
		font-size: 32rpx;
		padding: 10rpx 30rpx;
		display: inline-block;
	}
	.font-active-color{
		padding: 10rpx 0;
		border-bottom: 6rpx solid #49DBFB;
	}
</style>

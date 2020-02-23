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
		 	<swiper-item v-for="(item,index) in topBar" :key="index">
		 		<view class="home-data"> 
				
					<IndexSwiper></IndexSwiper>
					<Recommend></Recommend>
					<Card cardTitle="a"></Card>
					<CommondityList></CommondityList>

				</view>
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
					{name:"推荐"},
					{name:"运动户外"},
					{name:"服饰内衣"},
					{name:"鞋靴箱包"},
					{name:"美妆个护"},
					{name:"家居数码"},
					{name:"食品母婴"}
					
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

		},
		onReady() {
			let view=uni.createSelectorQuery().select('.home-data');
			view.boundingClientRect(data => {
				this.clientHight=data.height;
// console.log(data.height);
			}).exec();
		},
		methods: {
			changeTab(index){
				if(this.topBarIndex===index){
					return;
				}
				this.topBarIndex=index;
				this.scrollIntoIndex='top'+index;
			},
			onChangeTab(e){
				this.changeTab(e.detail.current);
			}

		}
	}
</script>

<style scoped>

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

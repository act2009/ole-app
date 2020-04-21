<template>
     
     <view class="index">
         <!-- #ifdef H5 -->
         <view class="custom-nav">
         				<view class="iconfont icon-sousuo" @click="goNavLeft()"></view>
         				<text>百年奥莱</text>
         				<view class="iconfont icon-xiaoxi" @click="goNavRight()"></view>	 
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
				<scroll-view  scroll-y="true" :style="'height:'+clientHight+'px;'" @scrolltolower="loadMore(index)">
	
	<block v-if="item.data.length > 0">
		
				
<block  v-for="(k,i) in item.data" :key="i">
	<IndexSwiper v-if="k.type==='swiperList'" :dataList="k.data"></IndexSwiper>

	<template v-if="k.type==='recommendList'" >
	<Recommend :dataList="k.data"></Recommend>
	<Card cardTitle="猜你喜欢"></Card>
	</template>
	

<!--sports-->

<template v-if="k.type==='bannerList'">
<Banner  :dataList="k.imgUrl"></Banner>
</template>  
	
	<template  v-if="k.type==='iconList'">
	<Icons :dataList="k.data"></Icons>
	<Card cardTitle="热销爆品"></Card>
	</template>  

<template v-if="k.type==='hotList'" >
<Hot :dataList="k.data"></Hot>
<Card cardTitle="推荐店铺"></Card>
</template>

<template v-if="k.type==='shopList'">
<Shop  :dataList="k.data"></Shop>
<Card cardTitle="为您推荐"></Card>
</template>
<!--sports-->

<CommondityList v-if="k.type==='commondityList'" :dataList="k.data" ></CommondityList>
	

	
</block>
</block>
<view v-else>
	没有了，没有数据了。
</view>

<view class="load-text font-color">
    {{item.loadText}}
</view>
						
</scroll-view>



				
		 	</swiper-item>

		 </swiper>
		 
	<!--推荐模版-->


</view>
</template>

<script>
	import $http        from '@/common/api/request.js'
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
			//this.getClientHeight();
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
		// onNavigationBarButtonTap(e){
		// 	console.log(e);
		// },
		methods: {
			//getdata
			__init(){
			    $http.request({
					url:"/index_list/data"
				}).then((res)=>{
					this.topBar=res.topBar;
					this.newTopBar=this.initData(res);
				}).catch(()=>{
					uni.showToast({
						title:'请求失败',
						icon:'none'
					})
				});
		// 		uni.request({
		// 			url:"http://192.168.0.3:3000/api/index_list/data",
		// 			success: (res) => {
		
						
		// 				let data=res.data.data;
		// 				this.topBar=data.topBar;
		// 				this.newTopBar=this.initData(data);
						
		// 			}})
			},
			//add data
			initData(res){
				let arr=[];
				//console.log(this.topBar.length);
				for(let i=0;i<this.topBar.length;i++){
					let obj={
						data:[],
						load:"first",
						loadText:"上拉加载更多...",
						};
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
				
				/*
				每次滑动赋值,修正重复请求数据：
				1>initData()添加一个load：first
				2>获取load值判断。如果==first，则表示第一次访问
				3>addData()中如果执行了此方法，则在最后把load值变成last
				4>根据this.newTopBar[this.topBarIndex].load 值进行判断
				
				*/
				 console.log(this.newTopBar[this.topBarIndex].load );
				 console.log(this.topBarIndex)
				 if( this.newTopBar[this.topBarIndex].load  ==='first'){
				 	this.addData();
				 }
				 // this.addData();

			},
			//finger move
			onChangeTab(e){
				this.changeTab(e.detail.current);
			},
			//获取可视区高度
			getClientHeight(){
				const res=uni.getSystemInfoSync();
			//	console.log(res.platform,res.statusBarHeight);
				const system=res.platform;
				if(system==='android'){
					return 48+res.statusBarHeight;
				}else if(system==='ios'){
					return 44+res.statusBarHeight;
				}else{
					return 0;
				}
			},
			
			//滑动、点击滑块时显示不同的数据
			addData(callback){

				//拿到滑块索引
				let index=this.topBarIndex;
				
				let id=this.topBar[index].id;
				
				//请求不同的接口数据
				let page=Math.ceil(this.newTopBar[index].data.length/5)+1;
				
				//请求数据
				$http.request({
					url:'/index_list/'+id+'/data/'+page+''
				}).then((res)=>{
					this.newTopBar[index].data=[...this.newTopBar[index].data,...res];
				}).catch(()=>{
					uni.showToast({
						title:'请求失败',
						icon:'none'
					})
				});
				
				//console.log(page);		
				// uni.request({
				// 	url:"http://192.168.0.3:3000/api/index_list/"+id+"/data/"+page+"",
				// 	success: (res) => {
				// 		if(res.statusCode!==200){
				// 			return;
				// 		}else{
				// 		let data=res.data.data;
					
				// 		this.newTopBar[index].data=[...this.newTopBar[index].data,...data];	
				// 		}

				// 	}
				// });
				

				
				//请求结束后重新赋值
				this.newTopBar[index].load='last';
				if(typeof callback=='function'){
					callback();
				}
			},
			//load more
			loadMore(index){
				this.newTopBar[index].loadText='加载中...';
				console.log('loadMore：'+index);
				//当请求完成时，文字又变成上拉加载更多
				this.addData(()=>{
					this.newTopBar[index].loadText='上拉加载更多.';
				});
			},
			//goto search page
			goNavLeft(){
				console.log('left');
				uni.navigateTo({
					url:'../search/search'
				})
				
			},
			goNavRight(){
				console.log('right');
			},
            
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
	.load-text{
		text-align: center;
		line-height: 60rpx;
		border-top: 2rpx solid #636263;
	}
</style>

<template>
	<view class="hot">
		<Commondity  :dataList='hotList'></Commondity>
		<Commondity  :dataList="hotList" itemW="33.3333%" itemH="220rpx"></Commondity>
	</view>
</template>

<script>
	import Commondity from '../common/Commondity.vue'
	export default{
		data(){
			return{
				hotList:[
					{
						id:1,
						imgUrl:"../../static/img/hot1.jpg",
						name:"【经典款】Timberland添柏岚保暖冲锋衣三合一女装潮牌|A1GF1【经典款】Timberland添柏岚保暖冲锋衣三合一女装潮牌|A1GF1【经典款】Timberland添柏岚保暖冲锋衣三合一女装潮牌|A1GF1",
						cprice:"48.00",
						oprice:"99.00",
						discount:"5.8"
					},
					{
						id:2,
						imgUrl:"../../static/img/hot2.jpg",
						name:"【经典款】Timberland添柏岚保暖冲锋衣三合一女装潮牌|A1GF1【经典款】Timberland添柏岚保暖冲锋衣三合一女装潮牌|A1GF1【经典款】Timberland添柏岚保暖冲锋衣三合一女装潮牌|A1GF1",
						cprice:"148.00",
						oprice:"399.00",
						discount:"4.8"
					},
					{
						id:3,
						imgUrl:"../../static/img/hot3.jpg",
						name:"【经典款】Timberland添柏岚保暖冲锋衣三合一女装潮牌|A1GF1【经典款】Timberland添柏岚保暖冲锋衣三合一女装潮牌|A1GF1【经典款】Timberland添柏岚保暖冲锋衣三合一女装潮牌|A1GF1",
						cprice:"148.00",
						oprice:"399.00",
						discount:"4.8"
					},
				]
			}
		},
		components:{
			Commondity
		}
	}
</script>

<style>
</style>

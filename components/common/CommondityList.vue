<template>
			<view class="commondity-list">
				<!--商品列表组件-->
				<Commondity :dataList='commondityList'></Commondity>
			</view>
</template>

<script>
	import Commondity from './Commondity.vue';
	export default{
		data(){
			return{
				commondityList:[
					{
						id:1,
						imgUrl:"../../static/img/commodity1.jpg",
						name:"【经典款】Timberland添柏岚保暖冲锋衣三合一女装潮牌|A1GF1【经典款】Timberland添柏岚保暖冲锋衣三合一女装潮牌|A1GF1【经典款】Timberland添柏岚保暖冲锋衣三合一女装潮牌|A1GF1",
						cprice:"48.00",
						oprice:"99.00",
						discount:"5.8"
					},
					{
						id:2,
						imgUrl:"../../static/img/commodity2.jpg",
						name:"【经典款】Timberland添柏岚保暖冲锋衣三合一女装潮牌|A1GF1【经典款】Timberland添柏岚保暖冲锋衣三合一女装潮牌|A1GF1【经典款】Timberland添柏岚保暖冲锋衣三合一女装潮牌|A1GF1",
						cprice:"148.00",
						oprice:"399.00",
						discount:"4.8"
					},
					{
						id:3,
						imgUrl:"../../static/img/commodity3.jpg",
						name:"【经典款】Timberland添柏岚保暖冲锋衣三合一女装潮牌|A1GF1【经典款】Timberland添柏岚保暖冲锋衣三合一女装潮牌|A1GF1【经典款】Timberland添柏岚保暖冲锋衣三合一女装潮牌|A1GF1",
						cprice:"148.00",
						oprice:"399.00",
						discount:"4.8"
					},
					{
						id:4,
						imgUrl:"../../static/img/commodity4.jpg",
						name:"【经典款】Timberland添柏岚保暖冲锋衣三合一女装潮牌|A1GF1【经典款】Timberland添柏岚保暖冲锋衣三合一女装潮牌|A1GF1【经典款】Timberland添柏岚保暖冲锋衣三合一女装潮牌|A1GF1",
						cprice:"148.00",
						oprice:"399.00",
						discount:"4.8"
					}
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

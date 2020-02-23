<template>
	<view class="shop">
		<view class="shop-item">
			<view class="shop-big">
				<image class="shop-big" src="../../static/img/shop.jpg" mode=""></image>
			</view>

			
			<scroll-view scroll-x="true" class="scroll-content">
							
				<view class="scroll-item">
					<Commondity
					 :dataList="shopList"
					  wrap="no-wrap"
					  itemW="200rpx"
					  itemH="200rpx"
					  nameFontsize="26rpx"
					  priceFontsize="26rpx"
					  lineclamp="1" >
					 </Commondity>
				</view>

			</scroll-view>

		</view>
	</view>
</template>

<script>
	import Commondity from '../common/Commondity.vue'
	export default{
		data(){
			return{
				shopList:[
				{
					id:1,
					imgUrl:"../../static/img/shop1.jpg",
					name:"【经典款】Timberland添柏岚保暖冲锋衣三合一女装潮牌|A1GF1【经典款】Timberland添柏岚保暖冲锋衣三合一女装潮牌|A1GF1【经典款】Timberland添柏岚保暖冲锋衣三合一女装潮牌|A1GF1",
					cprice:"48.00",
					oprice:"99.00",
					discount:"5.8"
				},
				{
					id:2,
					imgUrl:"../../static/img/shop2.jpg",
					name:"【经典款】Timberland添柏岚保暖冲锋衣三合一女装潮牌|A1GF1【经典款】Timberland添柏岚保暖冲锋衣三合一女装潮牌|A1GF1【经典款】Timberland添柏岚保暖冲锋衣三合一女装潮牌|A1GF1",
					cprice:"48.00",
					oprice:"99.00",
					discount:"5.8"
				},
				{
					id:3,
					imgUrl:"../../static/img/shop3.jpg",
					name:"【经典款】Timberland添柏岚保暖冲锋衣三合一女装潮牌|A1GF1【经典款】Timberland添柏岚保暖冲锋衣三合一女装潮牌|A1GF1【经典款】Timberland添柏岚保暖冲锋衣三合一女装潮牌|A1GF1",
					cprice:"48.00",
					oprice:"99.00",
					discount:"5.8"
				},
				{
					id:4,
					imgUrl:"../../static/img/shop1.jpg",
					name:"【经典款】Timberland添柏岚保暖冲锋衣三合一女装潮牌|A1GF1【经典款】Timberland添柏岚保暖冲锋衣三合一女装潮牌|A1GF1【经典款】Timberland添柏岚保暖冲锋衣三合一女装潮牌|A1GF1",
					cprice:"48.00",
					oprice:"99.00",
					discount:"5.8"
				}
				]
			}
		},
		components:{
			Commondity
		}
	}
</script>

<style scoped>
	.shop-big{
		width: 100%;
		height: 350rpx;
	}
	.scroll-content{
		width: 100%;
/* 		white-space: nowrap; */
	}
	.scroll-item{
		display: inline-block;
	}
</style>

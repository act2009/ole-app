<template>
	<view class="shop">
		<view class="shop-item" v-for="(item,index) in dataList" :key="index">
			<view class="shop-big">
				<image class="shop-big" :src="item.bigUrl" mode=""></image>
			</view>

			
			<scroll-view scroll-x="true" class="scroll-content">
							
				<view class="scroll-item">
					<Commondity
					 :dataList="item.data"
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
		props:{
			dataList:Array
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

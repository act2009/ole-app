<template>
	<view class="hot">
<!-- 		<Commondity  :dataList='dataList'></Commondity> -->
		<Commondity  :dataList="dataList" itemW="33.3333%" itemH="220rpx"></Commondity>
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

<style>
</style>

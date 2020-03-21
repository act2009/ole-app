<template>
			<view class="commondity-list">
				<!--商品列表组件-->
				<Commondity :dataList='dataList'></Commondity>
			</view>
</template>

<script>
	import Commondity from './Commondity.vue';
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

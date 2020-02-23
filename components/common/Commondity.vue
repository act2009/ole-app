<template>
	<view class="common-dity" :style="'flex-wrap:'+ wrap+';'">
		<!-- 单个商品组件 -->
		<view class="commondity-item" 
		v-for="(item,index) in dataList" :key='index' :style="'width:'+itemW+';'">
			<image class="commondity-img" :src="item.imgUrl" mode="" 
			:style="'height:'+itemH+';'"></image>
			<view class="commondity-content">
				<text class="commondity-name" :style="'-webkit-line-clamp:'+lineclamp+';'+'font-size:'+nameFontsize +';'"
				>{{item.name}}</text>
				<view>
					<text class="cprice" :style="'font-size:'+priceFontsize +';'">¥{{item.cprice}}</text>
					<text class="oprice">¥{{item.oprice}}</text>
				</view>
				<text class="discount">{{item.discount}}折</text>
				
			</view>
		</view>
		



		
	</view>
</template>

<script>
	export default{
		props:{
			//数据
			dataList:Array,
			//商品的宽度
			itemW:{
				type:String,
				default:"375rpx"
			},
			//商品的高度
			itemH:{
				type:String,
				default:"375rpx"
			},
			//是否换行
			wrap:{
				type:String,
				default:"wrap"
			},
			//商品名字体大小
			nameFontsize:{
				type:String,
				default:"28rpx"
			},
			//商品现价格体大小
			priceFontsize:{
				type:String,
				default:"28rpx"
			},
			//文字能显示几行
			lineclamp:{
				type:String,
				default:"2"
			}
		}
	}
</script>

<style scoped>
	.common-dity{
		display: flex;

	}
	.commondity-item{
		padding-bottom: 20rpx;
	}
	.commondity-img{
		width: 100%;
	}
	.commondity-content{
		text-align: center;
	}
	.commondity-name{

		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient:vertical;
		color: #333333;
		word-break: break-all;
		padding:6rpx 20rpx;
		
		
	}
	.oprice{
		text-decoration:line-through;
		color: #999999;
		font-size: 24rpx;
		
	}
	.discount{
		border-radius: 4rpx;
		border: 1px solid #FF3333;
		padding: 2rpx 10rpx;
		font-size: 20rpx;
		color:#FF3333;
	}
	
</style>

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/index_list/data', function(req, res, next) {
	res.send({
		"code":0,
		"data":{
			topBar:[
				{id:1,name:'推荐'},
				{id:2,name:'运动户外'},
				{id:3,name:'服饰内衣'},
				{id:4,name:'鞋靴箱包'},
				{id:5,name:'美妆个护'},
				{id:6,name:'家居数码'},
				{id:7,name:'食品母婴'}
			],
			data:[
				{
				type:"swiperList",
				data:[
					{imgUrl:'../../static/img/swiper1.jpg'},
					{imgUrl:'../../static/img/swiper2.jpg'},
					{imgUrl:'../../static/img/swiper3.jpg'},
				]
			    },
				{
				type:"recommendList",
				data:[
					{
						bigUrl:'../../static/img/Children.jpg',
						data:[
							{imgUrl:'../../static/img/Children1.jpg'},
							{imgUrl:'../../static/img/Children2.jpg'},
							{imgUrl:'../../static/img/Children3.jpg'},
						]
					},
					{
						bigUrl:'../../static/img/Furnishing.jpg',
						data:[
							{imgUrl:'../../static/img/Furnishing1.jpg'},
							{imgUrl:'../../static/img/Furnishing2.jpg'},
							{imgUrl:'../../static/img/Furnishing3.jpg'},
						]
					},
				]
				},
				{
					type:"commondityList",
					data:[
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

			],
		}
	});
  res.json({
	  "a":1
  });
});

module.exports = router;

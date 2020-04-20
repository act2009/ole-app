export default{
	common:{
		baseUrl:'http://192.168.0.3:3000/api',
		header:{
			"Content-type":"application/json",
			"Content-type":"application/x-www-form-urlencoded",
		},
		data:{
			
		},
		method:"GET",
		dataType:"json"
	},
	request(options={}){
		uni.showLoading({
		    title: '加载中'
		});
		options.url=this.common.baseUrl+options.url;
		options.header=options.header || this.common.header;
		options.data=options.data || this.common.data;
		options.method=options.method || this.common.method;
		options.dataType=this.common.dateType;
		
		return new Promise((res,rej)=>{
			uni.request({
				...options,
				success: (result) => {
					if(result.statusCode!=200){
						return rej();
					}
					let data=result.data.data;
					res(data);
					setTimeout(function () {
					    uni.hideLoading();
					},2000);
				}
			})
		});
	}
}
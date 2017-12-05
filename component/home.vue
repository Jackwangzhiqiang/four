<template>
	<div id="tpm">
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="item in lunbo">
		  	<img :src="item.img" alt="">

		  </mt-swipe-item>
		  
		</mt-swipe>
		<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link to="/newslist">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div>
		                </router-link>
		             </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link to="/photolist">
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">图片分享</div>
		                </router-link>
		            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link to="/goodslist">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div>
		                </router-link>
		            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link to="/feedback">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div>
		                </router-link>
		            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link to="/vedio">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div>
		                </router-link>
		            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link to="/callme">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div>
		                </router-link>
		            </li>
		            
		        </ul> 
		</div>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui';
	export default{
		data(){
			return {

				lunbo:[
				
				]
			}
		},
		created(){
			this.getimgs();
		},
		methods:{
			getimgs(){
				var url='http://www.lovegf.cn:8899/api/getlunbo';
				this.$http.get(url).then(function(response){

					var data=response.body;
					if(data.status!=0){
						Toast(data.message);
						return;
					}
					this.lunbo=data.message;
				})
			}
		}
	}
</script>

<style scoped>
	.mint-swipe{
		width:100%;
		height:300px;
	}
	.mint-swipe-item img{
		width:100%;
	}
	.mint-swipe-item{
		width:100%;
		height:300px;
		background-color: #ff0;
	}
	.mui-content{
		background-color: white;
	}
	.mui-icon-email:before,
	.mui-icon-chatbubble:before,
	.mui-icon-home:before,
	.mui-icon-location:before,
	.mui-icon-search:before,
	.mui-icon-phone:before{
		content:'';
		
		display: inline-block;
		width:50px;
		height:50px;
		background-repeat: round;
	}

	.mui-icon-home:before{
		background-image:url(../img/1.png);
	}
	.mui-icon-email:before{
		background-image:url(../img/2.png);
	}
	.mui-icon-chatbubble:before{
		background-image:url(../img/3.png);
	}
	.mui-icon-location:before{
		background-image:url(../img/4.png);
	}
	.mui-icon-search:before{
		background-image:url(../img/5.png);
	}
	.mui-icon-phone:before{
		background-image:url(../img/6.png);
	}
</style>


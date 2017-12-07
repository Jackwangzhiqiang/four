<template>
	<div id="tpm">
		<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist">
					<router-link v-bind="{to:'/newslist/newsinfo/'+item.id}">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis' v-text="item.zhaiyao"></p>
							<div class="fp">
								<span>发布时间：{{item.add_time | datafmt('YYYY-MM-DD HH-mm-ss')}}</span>
								<span class="lspan">点击数：{{item.click}}</span>
							</div>
						</div>
					</router-link>
				</li>
		</ul>

	</div>
</template>

<script>
	import {Toast} from 'mint-ui';
	export default{
		data(){
			return {
				newslist:[
						
				]
			}
		},
		created(){
			this.getnews();
		},
		methods:{
			getnews(){
				var url="http://www.lovegf.cn:8899/api/getnewslist";
				this.$http.get(url).then(function(response){
					var data=response.body;
					if(data.status!=0){
						Toast(data.message);
						return;
					}
					this.newslist=data.message;
				})
			}
		}
	}
</script>

<style scoped>
.mui-table-view img{
	width:80px;
	height:80px;
}
.mui-table-view .mui-media-object{
	max-width: 80px;
	line-height: 80px;
}
.fp{
	margin-top: 1em;
	font-size: 12px;
	color:#0094ff;
}
.fp .lspan{
	margin-left: 20px;
}
</style>


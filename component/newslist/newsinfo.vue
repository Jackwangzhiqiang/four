<template>
	<div id="tpm">
		<div class="title">
			<h4 v-text="info.title"></h4>
			<p>{{info.add_time | datafmt('YYYY-MM-DD')}}   {{info.click}}次浏览</p>
		</div>
		<div class="content" v-html='info.content'>
			
		</div>
		<comment :id="id"></comment>
	</div>
	
</template>

<script>
	import {Toast} from 'mint-ui';
	import common from '../../src/kits/common.js';
	import comment from '../subcom/comment.vue';
	export default{
		components:{
			comment
		},
		data(){
			return {
				id:0,
				info:{

				}
			}
		},
		created(){
			this.id=this.$route.params.id;
			this.getinfo();
		},
		methods:{
			getinfo(){
				var url="http://www.lovegf.cn:8899/api/getnew/"+this.id;
				this.$http.get(url).then(function(res){
					var data=res.body;
					if(data.status!=0){
						alert(data.message);
						return;
					}
					this.info=data.message[0];
				})
			}
		}
	}
</script>

<style scoped>
	.title,h4{
		color:#0094ff;
	}
	.title p{
		color:rgba(0,0,0,0.5);
	}
	.title,.content{
		padding-left: 6px;
	}
</style>


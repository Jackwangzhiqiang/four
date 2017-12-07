<template>
	<div id="tpm">
		<div id="cate">
			<ul v-bind="{style:'width:'+ulwidth+'px'}">
				<li>全部</li>
				<li v-for="item in cates">{{item.title}}</li>
			</ul>
		</div>
		<div id="imglist">
				<ul>
					<li v-for="item in list">
						<router-link v-bind="{to:'/photo/photo/'+item.id}">
							<img v-lazy="item.img_url" >
							<div id="des">
								<h5 v-text="item.title"></h5>
								<p v-text="item.zhaiyao"></p>
							</div>
						</router-link>
					</li>
				</ul>
		</div>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui';
	import {Lazyload} from 'mint-ui';
	import common from '../../src/kits/common.js';
	export default{
		data(){
			return {
				cates:[],
				ulwidth:320,
				list:[]
			}
		},
		created(){
			this.getcates();
			var all=0;
			this.getimages(all);
		},
		methods:{
			getimages(cateid){
				cateid=cateid || 0;
				var url=common.apidomain+'/api/getimages/'+cateid;
				this.$http.get(url).then(function(res){
					console.log(res.body.message);
					if(res.body.status!=0){
						Toast(res.body.message);
						return;
					}
					this.list=res.body.message;
				})
			},
			getcates(){
				var url=common.apidomain+'/api/getimgcategory';
				this.$http.get(url).then(function(res){
					console.log(res);
					if(res.status==0){
						Toast(res.body.message);
						return;
					}
					this.cates=res.body.message;
					var v=54;
					var count=res.body.message.length+1;
					this.ulwidth=v*count;
				})
			}
		}
	}
	



</script>

<style scoped>
	#cate{
		width:375px;
		max-width: 375px;
		overflow-x:auto; 
	}
	#cate ul{
		margin:0px;
		padding-left: 10px;
		
	}
	#cate li{
		list-style: none;
		display:inline-block;
		color:#0094ff;
		font-size: 12px;
		padding-left: 6px;
	}
	#imglist{

	}
	#imglist ul{
		padding-left: 0px;
	}
	#imglist li{
	list-style: none;
	position: relative;
	}
	#imglist img{
		width:100%;
		height:300px;
	}
	#des{
		width:100%;
		position: absolute;
		bottom: 0;
		left:0;
	}
	#des h5{
		background-color: rgba(0,0,0,0.2);
		color:#fff;
		font-weight: 700;
	}
	#des p{
		color:#fff;
	}
	image[lazy=loading]{
		width:40px;
		height:300px;
		margin:auto;
	}
</style>


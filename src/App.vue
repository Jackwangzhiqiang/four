<template>
	<div>
		<mt-header fixed title="传智博客"></mt-header>


		<router-view></router-view>


		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">通讯录</span>
			</router-link>

			<router-link class="mui-tab-item" to="/tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
		
	</div>
</template>


<script>
	import {add1,substrict} 
	from './calc.js';
	import {Toast} from 'mint-ui';
	function add(x,y){
		alert(x-y);
	}
	export default{
		data(){
			return {
				msg:'hello'
			}
		},
		methods:{
			add,
			add1:add1,
			tip:function(){
				Toast('你好,你在那短短卡萨丁大家爱看的');
			},
			substrict:substrict
			
		},
		created(){

		}

	}
</script>

<style scoped>
	.red{
	color:red;
	}
	#tpm{
	margin-top: 45px;
	margin-bottom: 50px;
}
</style>	
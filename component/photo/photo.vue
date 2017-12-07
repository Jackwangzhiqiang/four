<template>
	<div id="tpm">
		你好啊！
	</div>
</template>

<script>
	import {Toast} from 'mint-ui';
	import common from '../../src/kits/common.js';


	export default{
			data(){
				return {
					id:0
				}
			},
			created(){
				this.id=this.$route.params.id;
			}
	}
</script>

<style scoped>
	
</style>


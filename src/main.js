// 1.0 导入vue核心包
import Vue from 'vue';

// 2.0 导入App.vue的vue对象
import App from './App.vue';


import vueRouter from 'vue-router';

Vue.use(vueRouter);

import home from '../component/home.vue';
import shopcar from '../component/shopcar/shopcar.vue';
import newslist from '../component/newslist/newslist.vue';
import newsinfo from '../component/newslist/newsinfo.vue';
import photolist from '../component/photolist/photolist.vue';
import photo from '../component/photo/photo.vue';

var router1 = new vueRouter({
		linkActiveClass:'mui-active',
		routes:[
			{
				path:'/',
				redirect:'/home'
			},
			{
				path:'/home',
				component:home
			},
			{
				path:'/shopcar',
				component:shopcar
			},
			{
				path:'/newslist',
				component:newslist
			},
			{
				path:'/newslist/newsinfo/:id',
				component:newsinfo
			},
			{
				path:'/photo/photolist',
				component:photolist
			},
			{
				path:'/photo/photo/:id',
				component:photo
			}
		]
	});
import 'mint-ui/lib/style.min.css';

import mintui from "mint-ui";
Vue.use(mintui);


import '../dist/mui/css/mui.css';


import vueResource from 'vue-resource';
Vue.use(vueResource);

import moment from 'moment';
Vue.filter('datafmt',function(input,fmtstring){
	return moment(input).format(fmtstring);
})

// 3.0 利用Vue对象进行解析渲染
new Vue({
	el:'#app',
	router:router1,
	// render:function(create){create(App)} //es5的写法
	render:c=>c(App)  // es6的函数写法 =>：goes to
});

/*//导入vue核心包
import Vue from 'vue';
// 导入App.vue对象的vue对象
import App from './App.vue';

//利用vue对象进行解析渲染
 new Vue({
 	el:'#app',
 	render:c=>c(App)
 });*/

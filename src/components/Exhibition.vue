<template>
	<div class="exhidition">
		<mu-appbar title="Title" fixed slot="middel">展集</mu-appbar>
	 <div>  
        <swiper :options="swiperOption"  ref="mySwiper">  
            <!-- 这部分放你要渲染的那些内容 -->  
            <swiper-slide v-for="item in items" >
              <div class="swipe">
              	{{item.name}}
              	<p class="swipe_more" @click="pathto()">更多</i></p>
              	<p class="summary">{{item.title}}</p>
              	<img  width="100%"  v-lazy="item.url" >
              </div>
            </swiper-slide>  
            <!-- 这是轮播的小圆点 -->  
            <div class="swiper-pagination" slot="pagination"></div>  
        </swiper> 
        <div class="topic-class">
        	 <div class="topic-class-background">
	        <span class="topic-class-left"></span>
	         <span  class="topic-class-content">
	         <div  class="mu-badge-container" style="float: right; margin-top: 0.3em;">
	          <em class="mu-badge mu-badge-secondary">
		      本周话题
		    </em>
		      </div>
				     <p style="font-size: 16px;">#我和杭州有个约会！#</p> 
				     <p style="color: rgb(201, 201, 201);">我和杭州有个约会！我和杭州有个约会我和杭州有个约会</p>
				     </span> 
				     <span class="topic-class-right">
				     <i  class="mu-icon material-icons">keyboard_arrow_right</i></span>
		      </div>
        </div> 


        <div  class="topped">
	        <span class="topped-header">
	        <i class="mu-icon material-icons" style="color: rgb(244, 67, 54); float: left; margin-top: 0.35em; margin-left: 0.5em;">whatshot</i>
	        热帖互动</span> 
	        <hr class="mu-divider">
	         <div class="topped-content" v-for="list in listDate">
		         <span class="topped-content-text">
		             {{list.describe}}
		              <div class="mu-badge-container demo-badge-content">#{{list.label}}
		               <em class="mu-badge mu-badge-float"></em>
		           </div>
			    </span> 
			    <span class="topped-content-img">
			         <img width="100%" v-lazy="list.icon" lazy="loaded">
			     </span>
		    </div>
	    </div>

    </div> 

    <vueLoading v-show="toast" type="spiningDubbles" class="toast" color="#d9544e" :size="{ width: '150px', height: '150px' }"></vueLoading>	
	</div>
</template>
<script>
import axios from 'axios'
import vueLoading from 'vue-loading-template'
import { swiper, swiperSlide } from 'vue-awesome-swiper'  
/*import 'swiper/dist/css/swiper.css'*/
import"../../node_modules/swiper/dist/css/swiper.min.css"
 
	export default{
		data(){
			return{
				items:[],
				toast:false,
				listDate:[],
				swiperOption: {
					 notNextTick: true,
					 autoplay: 3000,
					 pagination :'.swiper-pagination',
                     paginationClickable :true,
				 }
			}
		},
		computed: {
		   swiper() {
		     return this.$refs.mySwiper.swiper
		   }
		 },
		components:{  
	        swiper,  
	        swiperSlide ,
	        vueLoading 
	    }, 
	    mounted(){
	    	this.toast = true
	    	axios({
				url:'mock/5993f32f059b9c566dbf4430/frent/Attlas'
			}).then((res)=>{
				this.items=res.data.data.list
				
				for(var i=0; i<res.data.data.list.length;i++){
					res.data.data.list[i].url=res.data.data.list[i].url.concat(res.data.data.list[i].id)
				}
				this.toast = false
				
			})
			axios({
				url:'/mock/5993f32f059b9c566dbf4430/frent/exhibition/topped'
			}).then((res)=>{
				
				this.listDate=res.data.data.list
				for(var j=0; j<res.data.data.list.length;j++){
					res.data.data.list[j].icon=res.data.data.list[j].icon.concat(res.data.data.list[j].urlid)
				}
				this.toast = false
				
			})
			if(this.$route.path=='/exhibition'){
				 this.$store.dispatch('hideHeader')
			}
			
	    },
	    methods:{
	    	pathto(){
	    		this.$router.push({path:'/atlas'})
	    	}
	    }
	}
</script>

<style scoped>
.exhidition{
	text-align: center;
	padding-bottom: 60px;
}
.mu-appbar-title{
	text-align: center;
}
.swipe{
	height: 245px;
	font-size: 13px;
	color: #fff;
	line-height: 25px;
	overflow: hidden;
	background-color: #474a4f;
}
.swipe_more{
	position: absolute;
	top:-13px;
	text-align: right;
	right: 12px;
	font-size: 16px;
	line-height: 25px;
	padding-right: 12px;
	color: red;
}
.summary{
	padding: 0;
	margin: 0;
	background-color: #474a4f;
}
.topic-class{
    width: 100%;
    background-color: #fff;
    background-image: url(http://placeimg.com/828/196/any);
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
}
.topic-class-background {
    background-color: rgba(0,0,0,.5);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 7em;
    padding: 1em 0 .5em;
}
.topic-class-left, .topic-class-right {
    width: 10%;
    color: #fff;
    text-align: center;
}
.topic-class-content {
    width: 80%;
    border-left: 3px solid #fff;
    padding-left: 1em;
    color: #fff;
}
.topic-class-content p{
	margin-top: 0;
}
.topped {
    height: 100%;
    margin-top: .5em;
    background-color: #fff;
}
.topped-header  {
    height: 3em;
    line-height: 3em;
    padding-left: .5em;
}
html.pixel-ratio-2 .mu-divider {
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
}
.topped-content  {
    width: 100%;
    padding: 1em;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-bottom: 1px solid rgba(0,0,0,.12);
}
.topped-content-text  {
    width: 60%;
    text-align: left;
}
.topped-content-img  {
    padding-left: 10%;
    width: 40%;
}
.demo-badge-content  {
    background-color: #ffab00;
    color: #fff;
    padding-left: 4px;
    padding-right: 4px;
}
.toast{
	width: 40%;
	position: fixed;
	top: 40%;
	left:33%;
}
</style>
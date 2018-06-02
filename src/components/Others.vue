<template>	
	<div class="others" >
	<div class="others_box">	
	      <img v-lazy="items.data.background" class="bgimg"  alt="">
	     <i class="mu-icon material-icons icon_back" @click="back()">keyboard_arrow_left</i>
	     <div class="User_top">	</div>
	     <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;">
		  <mu-card-header :title="items.data.name" :sub-title="items.data.profile">
		    <mu-avatar slot="avatar">
		      <img :src="items.data.icon">
		    </mu-avatar>
		  </mu-card-header>
		 <div  class="mu-flexbox mu-flex-row">
			<div  class="mu-flexbox-item" style="margin-left: 8px; flex: 1 1 auto; order: 0;">
				 <button  class="mu-flat-button User-Top-Btn-Left" type="button" tabindex="0" style="user-select: none; outline: none; cursor: pointer; -webkit-appearance: none;">
				 <div class="mu-flat-button-wrapper">
				 <div class="mu-ripple-wrapper"></div>
					<i class="mu-icon material-icons">person_outline</i>  
					<span class="mu-flat-button-label">关注</span>
				</div>
				   </button>
			 </div>
			 <div  class="mu-flexbox-item" style="margin-left: 8px; flex: 1 1 auto; order: 0;">
				    <button  class="mu-flat-button User-Top-Btn-Left" type="button" tabindex="0" style="user-select: none; outline: none; cursor: pointer; -webkit-appearance: none;"><div class="mu-flat-button-wrapper">
				      <div class="mu-ripple-wrapper"></div> 
				         <i class="mu-icon material-icons">grade</i>
				         <span class="mu-flat-button-label">话题(努力码中！)</span>
				     </div>
			    </button>
			</div> 
		    </div>
		</mu-card>
		<div  class="mu-card UserCard-Top">
			<div  class="Others-list">
				<p >性别</p>
		 		<p  style="margin-right: 10%;">{{items.data.gender}}</p>
		  		<i  class="mu-icon material-icons" style="color: rgb(158, 158, 158); line-height: 48px;">wc</i>
		    </div>
		   <div  class="Others-list">
		    <p >正在找</p>
		    	<p  style="margin-right: 10%;">{{items.data.label}}</p>
		    	<i  class="mu-icon material-icons" style="color: rgb(158, 158, 158); line-height: 48px;">keyboard_arrow_right</i>
		    </div>
		</div>
		<div  class="mu-card UserCard-Top">
			<div  class="Others-list">
			   <p >最近发布的话题</p>
			</div>
			<div  style="border-bottom: 1px solid rgb(238, 238, 238);" v-for="list in items.data.recently">
			    <div class="mu-item-wrapper" tabindex="0" style="user-select: none; outline: none; cursor: pointer; -webkit-appearance: none;">
				    <div class="">
					   <div class="mu-ripple-wrapper"> </div>
					    <div class="mu-item show-right">
						    <div class="mu-item-content">
							    <div class="mu-item-title-row">
							       <div class="mu-item-title"> {{list.title}} </div> 
					               <div class="mu-item-after"> </div>
					            </div>
				                 <div class="mu-item-text" style="max-height: 36px; -webkit-line-clamp: 2;">
				            #{{list.label}} {{list.time}}
				                 </div>
				           </div> 
				             <div class="mu-item-right">
				                  <i  class="mu-icon material-icons">keyboard_arrow_right</i>
				            </div>
			             </div>
		             </div>
	             </div> 
	        </div>
         </div>

	</div>
		<vueLoading v-show="toast" type="spiningDubbles" class="toast" color="#d9544e" :size="{ width: '150px', height: '150px' }"></vueLoading>
	</div>
</template>
<script>
import axios from 'axios'
import vueLoading from 'vue-loading-template'	
	export default{
		data(){
			return{
				toast:false,
			    items:[],
			    show:false,
			    name:this.$route.query.name
			}
		},
		mounted(){
			this.$store.dispatch('hideHeader')
			/*this.$store.dispatch('hidefooter')*/
			axios({
				method:"get",
				url:'/mock/5993f32f059b9c566dbf4430/frent/others/index?name='+this.name
			}).then((res)=>{
				this.items=res.data
				res.data.data.background=res.data.data.background.concat(res.data.data.id)
				res.data.data.icon=res.data.data.icon.concat(res.data.data.id)
				
			})
		},
		methods:{
			back(){
				window.history.go(-1)
			}
		},
		components:{
			vueLoading
		}
	}
</script>
<style scoped>
.others  .others_box .bgimg{
	width: 100%;
	position: fixed;
	top: 0;
}	
.others .icon_back{
	position:fixed;
	top: 20px;
	left: 15px;
	color: #fff;
}
.others  .User_top{
	margin-top: 30%;
}

.others  .mu-card, .UserCard-Top {
    border-radius: .3em;
    margin-top: 5%;
    width: 100%;
    background-color: hsla(0,0%,100%,.7);
}
.others  .mu-card-header {
    border-bottom: 1px solid #eee;
}
.others .mu-flexbox .mu-flexbox-item:first-child{
	text-align: center;
}
.Others-list{
    padding: 0 1em;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 48px;
    border-bottom: 1px solid #eee;
}


 </style>



<template>
	<div class="comment">
		<div class="comment_box">
			<mu-appbar class="comment_top" slot="middel">
			  <mu-icon-button icon="keyboard_arrow_left" @click="back()" slot="left"/>
			  <mu-icon-button  slot="right"/>
			  收到的评论
			</mu-appbar>
	   </div>
	   <div class="mu-card" v-for="item in items">
		   <div class="Top-list-item" >
			   <div class="mu-item-wrapper" tabindex="0" style="user-select: none; outline: none; cursor: pointer; -webkit-appearance: none;">
				   <div class="">
					   <div class="mu-ripple-wrapper"></div>
					    <div class="mu-item show-left show-right has-avatar">
						    <div class="mu-item-left"> 
							    <div class="mu-avatar">
								    <div class="mu-avatar-inner">
								     	<img v-lazy="item.icon"> 
								     </div>
							     </div>
						     </div>
						      <div class="mu-item-content">
							      <div class="mu-item-title-row">
								      <div class="mu-item-title"> 我 | #{{item.type}}</div>
							              <div class="mu-item-after"> </div>
						            </div>
						               <div class="mu-item-text" style="max-height: 36px;-webkit-line-clamp: 2;">{{item.data}}
						               </div>
					           </div>
					            <div class="mu-item-right"  @click="open('bottom')">
					                  <i class="mu-icon material-icons" >keyboard_arrow_down</i> 
					            </div>
				             </div>
			             </div>
		             </div>
	             </div>
	              <div class="mu-card-text"> {{item.title}}</div>
	             <div class="Discuss_bottom">
		             <div class="mu-item-wrapper" tabindex="0" style="user-select: none; outline: none; cursor: pointer; -webkit-appearance: none;">
			             <div class="">
				             <div class="mu-ripple-wrapper"></div>
				              <div class="mu-item">
					              <div class="mu-item-content">
						               <div class="mu-item-text" style="max-height: 36px; -webkit-line-clamp: 2;">
							               <span>
							               		<span style="color: rgba(0, 0, 0, 0.87);">{{item.name}} -</span> {{item.source}}
							                </span>
						                </div> 
					                </div> 
				                </div>
			                </div>
		                </div>
	                </div>
                </div>
               <!--  <mu-popup position="bottom" popupClass="demo-popup-bottom" :open="bottomPopup" @close="close('bottom')">
               			    <mu-appbar title="弹出">
               			      <mu-flat-button slot="right" label="关闭" color="white" @click="close('bottom')"/>
               			    </mu-appbar>
               			    <mu-content-block>
               			      haah
               			    </mu-content-block>
               			  </mu-popup> -->
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
				bottomPopup: false,
			}
		},
		mounted(){
			this.toast=true;
			if(this.$route.path=='/comment'){
				 this.$store.dispatch('hideHeader')
				 this.$store.dispatch('hidefooter')

			}
			axios({
				method:"GET",
				url:"/mock/5993f32f059b9c566dbf4430/frent/more/information"
			}).then((res)=>{
				this.items=res.data.data.list
				for(var i=0; i<res.data.data.list.length;i++){
					res.data.data.list[i].icon=res.data.data.list[i].icon.concat(res.data.data.list[i].iconid)
				}
				this.toast=false;
				console.log(res.data.data)
			})
		},
		methods:{
			back(){
				window.history.go(-1)
			},
			 open (position) {
		      this[position + 'Popup'] = true
		    },
		    close (position) {
		      this[position + 'Popup'] = false
		    }
		},
		components:{
			vueLoading
		},

	}
</script>
<style scoped>
.comment_box{
	text-align: center;
}
.comment_top{
	position: fixed;
	top: 0;
}
.comment{
	padding-top: 60px;
}
.mu-card-text{
	margin: 0;
	padding-left: 12px;
}
.mu-circle-ripple, .mu-ripple-wrapper {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.Discuss_bottom{
    border-left: 5px solid #474a4f;
    margin-left: 1em;
}
.toast{
	width: 40%;
	position: fixed;
	top: 40%;
	left:33%;
}
.mu-popup-bottom{
	bottom: 0;
}
	
</style>
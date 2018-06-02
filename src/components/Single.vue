<template>
<div class="contain">

	<div class="contain_list" v-for="item in items">
		<mu-card class="mu-card">
		  <mu-card-header :title="item.name ||item.name" :subTitle="item.date">
		    <mu-avatar  :src="item.icon" slot="avatar"/>
		  </mu-card-header>
		  <div class="mu-card-text">
	            {{item.source}}
	            <div  class="mu-badge-container demo-badge-content">{{item.label}} <em class="mu-badge mu-badge-float"></em></div>
           </div>
		  <div class="mu-flexbox mu-flex-row">
			  <div class="mu-flexbox-item" style="margin-left:8px; flex: 1 1 auto; order: 0;" v-for="list in item.url">
			       <img   v-lazy="list.name" lazy="loaded">
		      </div>
		  </div>
 <div  class="row card-bottom no-gutter">
	 <div  class="col col-60 tablet-50 desktop-50">
		 <div  class="card-bottom-data">
				 <i class="card-bottom-icon mu-icon material-icons" style="font-size: 20px; width: 20px; height: 20px;">remove_red_eye</i>
				  <p>{{item.see}}</p>
		  </div>
	</div> 
	  <div  class="col col-20 tablet-25 desktop-25">
		  <div  class="card-bottom-data">
			  <i  class="card-bottom-icon mu-icon material-icons" style="font-size: 20px; width: 20px; height: 20px;">favorite_border</i> 
			  <p>{{item.fabulous}}</p>
		  </div>
	  </div>
	<div class="col col-20 tablet-25 desktop-25">
		   <div class="card-bottom-data">
			   <i  class="card-bottom-icon mu-icon material-icons" style="font-size: 20px; width: 20px; height: 20px;">chat</i> 
			   <p >{{item.comment}}</p>
		   </div>
	   </div>
   </div>  
		</mu-card>
   
	</div>
	<vueLoading v-show="toast" type="spiningDubbles" class="toast" color="#d9544e" :size="{ width: '150px', height: '150px' }"></vueLoading>

	<div class="addmore" v-show='!toast'>
		<mu-circular-progress  :size="40" ></mu-circular-progress>
	</div>
	
	

</div>
	
</template>
<script>
import axios from 'axios'
import vueLoading from 'vue-loading-template'


	export default{
		data(){
			return{
				items:[], 
				toast:false,
				fetching:false
			}
		},
		mounted(){
			this.toast = true
			var self=this
			axios({
				url:'mock/5993f32f059b9c566dbf4430/frent/singwei'
			}).then((res)=>{
				this.items=res.data.data.list
					this.toast = false
					this.fetching=true;

				for(var i=0; i<this.items.length;i++){
					this.items[i].icon=this.items[i].icon.concat(this.items[i].see)
					this.items[i].name=this.items[i].name.concat(' | #').concat(this.items[i].type)
					for(var j=0; j<this.items[i].url.length;j++){
						this.items[i].url[j].name=this.items[i].url[j].name.concat(this.items[i].urlid)
					
				     }
				}

				$(window).scroll(function(){
	                var scrollTop = $(this).scrollTop();  
	                var scrollHeight = $(document).height(); 
	                var windowHeight = $(this).height();
	                if(scrollTop + windowHeight >= scrollHeight){
	                	if(self.fetching){
	                		self.fetching=false;
	                		 axios({
								url:'mock/5993f32f059b9c566dbf4430/frent/singwei'
							}).then((res)=>{
								self.fetching=true;
								for(var i=0; i<res.data.data.list.length;i++){
									self.items.push(res.data.data.list[i])
									res.data.data.list[i].icon=res.data.data.list[i].icon.concat(res.data.data.list[i].see)
									res.data.data.list[i].name=res.data.data.list[i].name.concat(' | #').concat(res.data.data.list[i].type)
									for(var j=0; j<res.data.data.list[i].url.length;j++){
										res.data.data.list[i].url[j].name=res.data.data.list[i].url[j].name.concat(res.data.data.list[i].urlid)
									
								      }
								  }

							})
	                	}
                     

	                }
	            })

			})
		},
		methods:{

		},
		components:{
			 vueLoading
		}
	}
</script>
<style scoped>
.contain{
	padding-top: 78px;
	padding-bottom: 63px;
}
.type_tic{
	position: relative;
	top: 0px;
	left: 20px;
}
.demo-badge-content{
    background-color: #ffab00;
    color: #fff;
    padding-left: 4px;
    padding-right: 4px;
}
.mu-flexbox{
	padding: 0 10px;
}
.mu-flexbox-item img{
    max-width: 100%;
    height: auto;
}
.card-bottom-data{
	display: flex;
}
.card-bottom-data p{
    padding: 0;
    margin: 0 0 0 5px;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    width: 0;
}
.row{
	padding-left: 10px;
	padding-right: 10px;
}
.card-bottom{
    border-top: 1px solid #eee;
    padding: 5px 16px;
    color: #9e9e9e;
}
.mu-card {
    background-color: #fff;
    position: relative;
    border-radius: 2px;
    margin-top: 5px;
    box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
}
.mu-card-text{
	padding-top: 0px;
}
.toast{
	width: 40%;
	position: fixed;
	top: 40%;
	left:33%;
}
.addmore{
	margin: 0 auto;
	text-align: center;
	width: 100%;
	margin-top: 3px;
	display: inline-block;
}

</style>
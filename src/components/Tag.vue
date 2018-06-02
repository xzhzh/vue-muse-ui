<template>
	<div class="tag">
		<div class="tag_box">
			<mu-appbar class="tag_top" slot="middel">
			  <mu-icon-button icon="keyboard_arrow_left" @click="back()" slot="left"/>
			  <mu-icon-button  slot="right"/>
			  收到的评论
			</mu-appbar>
	   </div>
	   <ul class="tag_list">
	   	   <li v-for="item in items" @click="linkto(item)">
	   	   	  <h4>#{{item.name}}</h4>
			  <p>({{item.number}}个话题)</p>
	   	   </li>
	   	   
	   </ul>
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
			if(this.$route.path=='/tag'){
				 this.$store.dispatch('hideHeader')
				 this.$store.dispatch('hidefooter')
			}
			axios({
				method:'get',
				url:'/mock/5993f32f059b9c566dbf4430/frent/label'
			}).then((res)=>{
				this.toast=false;
				this.items=res.data.data.list
				
			})

		},
		methods:{
			back(){
				window.history.go(-1)
			},
		linkto(item){
			console.log('erhor')

				if(item.id=='001'){
					this.$router.push({path:"/single"})
				}else if(item.id=='002'){
					this.$router.push({path:"/male"})
				}
				else if(item.id=='003'){
					this.$router.push({path:"/girl"})
				}
				else if(item.id=='004'){
					this.$router.push({path:"/baskroom"})
				}
				else if(item.id=='005'){
					this.$router.push({path:"/feedback"})
				}
				else if(item.id=='006'){
					this.$router.push({path:"/gossip"})
				}
				else if(item.id=='007'){
					this.$router.push({path:"/lieidle"})
				}
				else if(item.id=='008'){
					this.$router.push({path:"/makefriend"})
				}
			
			}
		},
		components:{
			 vueLoading
		}
	}
</script>
<style scoped>
.tag_box{
	text-align: center;
}
.tag_top{
	position: fixed;
	top: 0;
}
.tag{
	padding-top: 60px;
}
.mu-card-text{
	margin: 0;
	padding-left: 12px;
}
.tag  .tag_list {
	overflow: hidden;
}
.tag  .tag_list li{
	width: 43%;
	float: left;
}

</style>
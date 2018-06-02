<template>
	<div class="atlas">
	<div class="atlas_box">
		<mu-appbar class="atlas_top" slot="middel">
		  <mu-icon-button icon="keyboard_arrow_left" @click="back()" slot="left"/>
		  <mu-icon-button  slot="right"/>
		  图集
		</mu-appbar>
	</div>
		
		<div class="gridlist-demo-container">
		  <mu-grid-list class="gridlist-demo">
		    
		    <mu-grid-tile v-for="tile,index in items" :key="'tile' + index" titlePosition="top" actionPosition="left" :rows="tile.featured ? 2 : 1" :cols="tile.featured ? 2 : 1">
		      <img v-lazy="tile.url"/>
		      <span slot="title">{{tile.title}}</span>
		      <span slot="subTitle">by <b>{{tile.name}}</b></span>
		      <mu-icon-button icon="star_border" slot="action"/>
		    </mu-grid-tile>
		  </mu-grid-list>
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
				items:[]
			}
			
		},
		mounted(){
			this.toast=true;
			axios({
				url:'/mock/5993f32f059b9c566dbf4430/frent/atlas/index'
			}).then((res)=>{
				/*console.log(res.data.data.list)*/
				this.items=res.data.data.list
				for(var i=0; i<res.data.data.list.length;i++){
					res.data.data.list[i].url=res.data.data.list[i].url.concat(res.data.data.list[i].urlid)
				}

				this.toast = false
				
			})

			if(this.$route.path=='/atlas'){
				 this.$store.dispatch('hideHeader')
			}
		},
		components:{
			vueLoading
		},
		methods:{
			back(){
				window.history.go(-1)
			}
		}
	}
</script>
<style scoped>
  .atlas{
  	padding-top: 58px;
  	padding-bottom: 60px;
  }
  .atlas_box{
  	text-align: center;
  }
	.mu-appbar-title{
		text-align: center;
	}
	.atlas_top{
		position: fixed;
		top: 0;
	}
	.toast{
	width: 40%;
	position: fixed;
	top: 40%;
	left:33%;
}
</style>
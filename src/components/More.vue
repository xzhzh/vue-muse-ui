<template>
	<div class="more">
		<div class="more_box">
			<mu-appbar title="Title" fixed slot="middel">更多</mu-appbar>
		</div>
		
		  <mu-list>
		  <div @click="pathto('/comment')">
		  	<mu-list-item title="收到的评论"  describeText="来自大佬们对你话题的评论">
		      <mu-avatar icon="notifications"   slot="leftAvatar"/>
		      <mu-icon value="keyboard_arrow_right"  slot="right"/>
		    </mu-list-item>
		  </div>
		    
		    <mu-divider inset/>
		    <div  @click="pathto('/tag')">
		    	<mu-list-item title="分类及标签" describeText="选读">
			      <mu-avatar icon="search" slot="leftAvatar"/>
			      <mu-icon value="keyboard_arrow_right"  slot="right"/>
			    </mu-list-item>
		    </div>
		    
		     <mu-divider inset/>
		     <div @click="pathto('/find')">
		     	 <mu-list-item title="发现" describeText="快速定位你的需求(寻求室友或者朋友)">
			      <mu-avatar icon="group_add" slot="leftAvatar"/>
			      <mu-icon value="keyboard_arrow_right"  slot="right"/>
			    </mu-list-item>
		     </div>
		   
		     <mu-divider inset/>
		     <div>
		     	<mu-list-item title="数据排行榜" describeText="发现大佬">
			      <mu-avatar icon="poll" slot="leftAvatar"/>
			      <mu-icon value="keyboard_arrow_right"  slot="right"/>
			    </mu-list-item>
		     </div>
		    
		     <mu-divider inset/>
		  </mu-list>
		
	</div>
</template>
<script>

	export default{
		data(){
			return{}
		},
		mounted(){
			if(this.$route.path=='/more'){
				 this.$store.dispatch('hideHeader')
			}
		},
		methods:{
			pathto(val){
				this.$router.push({path:val})
			}
		},
		
		
	}
</script>
<style scoped>
.more{
	/* text-align: center; */
	padding-top: 60px;
	padding-bottom: 60px;
}
.more_box{
	text-align: center;
}
.mu-appbar{
	position: fixed;
	top: 0;
}
.mu-appbar-title{
	text-align: center;
}
.mu-item-content, .mu-item-title-row , .mu-item-text{
	text-align: left;
}	
</style>
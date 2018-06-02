<template>
<mu-tabs class="footer" :value="activeTab" @change="handleTabChange">
  <mu-tab value="tab1" @click="pathto('/')" icon="home" title="主页"/>
  <mu-tab value="tab2" @click="pathto('/exhibition')"icon="collections" title="展集"/>
  <mu-float-button icon="add" />
  <mu-tab value="tab4" lineClass icon="explore" @click="pathto('/more')" title="更多"/>
  <mu-tab value="tab5" icon="account_circle" title="我"/>
</mu-tabs>
</template>

<script>
export default {
  data () {
    return {
      activeTab: 'tab1'
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    },
    pathto(val){
      this.$router.push({
        path:val
      })
    },
  }
}
</script>
<style scoped>
  .footer{
    position: fixed;
    bottom: 0;
  }
 .footer .mu-tab-active{
	color: #ff5252;
	border-bottom: none;
  }
.footer .mu-tab-text.has-icon{
  	margin-top: 2px;
 }
 .footer .mu-tab-link{
	padding:2px;
 }
 .footer .add-box{
 	flex: 1;
 }
.footer  .footer .add{
 	width:60px;
 	height: 60px;
 	text-align: center;
 	height: 56px;
 	position: relative;
 	border-radius: 50%;
 	line-height: 60px;
 	border: 1px; 
 	box-shadow: 0 3px 10px rgba(0,0,0,.156863), 0 3px 10px rgba(0,0,0,.227451);
 }
.footer .mu-tab-link-highlight{
 	display: none;
 }
</style>
<template>
<div>
  <mu-tabs class="header" :value="activeTab" @change="handleTabChange">
    <mu-tab value="tab1" @click="pathto('/')" icon="domain" title="综合"/>
    <mu-tab value="tab2" @click="pathto('/renting')" icon="visibility" title="求租"/>
    <mu-tab value="tab3" @click="pathto('/lease')" icon="cast" title="出租"/>
    <mu-tab value="tab4" @click="pathto('/roommate')" icon="group" title="室友"/>
    <mu-tab value="tab5" @click="open('bottom')" icon="group" :title="tit"/>
  </mu-tabs>
    
    <mu-popup class="popup" position="bottom" popupClass="demo-popup-bottom" :open="bottomPopup" @close="close('bottom')">
    <mu-appbar>
      <mu-flat-button slot="right" label="关闭" color="white" @click="close('bottom')"/>
    </mu-appbar>

       <ul>
         <li @click="linkto('/single','独卫')">独卫</li>
         <li @click="linkto('/male','男室友')">男室友</li>
         <li @click="linkto('/girl','女室友')">女室友</li>
         <li @click="linkto('/baskroom','晒房')">晒房</li>
         <li @click="linkto('/feedback','反馈')">反馈</li>
         <li @click="linkto('/gossip','闲聊')">闲聊</li>
         <li @click="linkto('/lieidle','闲置')">闲置</li>
         <li @click="linkto('/makefriend','交友')">交友</li>
       </ul>
  </mu-popup>

</div>
  

   
</template>

<script>
export default {
  data () {
    return {
      activeTab: 'tab1',
      bottomPopup:false,
      tit:'标签'
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
    open (position) {
      this[position + 'Popup'] = true
    },
     close (position) {
      this.bottomPopup = false
    },

    linkto(path,tit){
    this.tit=tit
     this.bottomPopup = false
      this.$router.push({
        path:path
      })

    }
  }
}
</script>
<style>
ul,li{
  list-style: none;
}
.header{
  position: fixed;
  top: 0;
}
.mu-popup-bottom{
  width: 100%;
  bottom: 59px;
}
ul{
  overflow: hidden;
  width: 100%;
}
li{
  float: left;
  color: #fff;
  background: rgb(121, 142, 242);
  width: 88px;
  text-align: center;
  margin-top: 10px;
  line-height: 36px;
  margin-right: 6%;
  border-radius: 8px;
  box-sizing: border-box;
}
li:nth-child(4n+1){
   background-color: rgb(242, 200, 121);
}
   
li:nth-child(4n+2){
  background-color: rgb(177, 242, 121);
}
li:nth-child(4n+3){
   background-color: rgb(242, 121, 213); 
}
      
</style>
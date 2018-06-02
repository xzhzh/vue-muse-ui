<template>
  <div id="app">
    <Header  v-show="headerShow"/>
    <router-view/>
    <Footer v-show="footerShow"/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'App', 
  data(){
    return{}
  },
  components:{
    Header,
    Footer
  },
    watch:{
    $route(to,from){
     /* console.log(to.path)*/
      if(to.path=='/exhibition'){
        this.$store.dispatch('hideHeader')
      }else{
        this.$store.dispatch('headerShow')
        this.$store.dispatch('footerShow')
      };

     
    }
  },
   computed:{
    ...mapGetters([
        'headerShow',
        'footerShow',
        'loading'
      ])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

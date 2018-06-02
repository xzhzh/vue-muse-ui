
import getters from './getters.js'

const state={
	header:true,
	footer:true,
}
const mutations ={
	hideHeader(state){
		state.header=false
	},
	headerShow(state){
		state.header=true
	},
	hidefooter(state){
		state.footer=false
	},
	footerShow(state){
		state.footer=true
	}
	
}
export default{
	state,
	mutations,
	getters
}

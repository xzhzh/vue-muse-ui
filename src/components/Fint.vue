<template>
	<div class="find">
	<div class="tag_box">
			<mu-appbar class="tag_top" slot="middel">
			  <mu-icon-button icon="keyboard_arrow_left" @click="back()" slot="left"/>
			  <mu-icon-button  slot="right"/>
			  收到的评论
			</mu-appbar>
	 </div>
		<mu-tabs :value="activeTab" @change="handleTabChange">
		    <mu-tab value="1" title="找房子"/>
		    <mu-tab value="2" title="找室友"/>
		    <mu-tab value="3" title="找朋友"/>
		    <mu-tab value="4" title="找闲置"/>
		</mu-tabs>
		<div class="showselect" v-show="!show">
			<p @click="showslect"> 
			  <i class="mu-icon material-icons">keyboard_arrow_down</i>
			</p>
		</div>
		<div>
			<mu-card v-for="item in items">
			   <mu-card-media  >
			   <img v-lazy="item.icon" />
			  </mu-card-media> 

			  <div @click="gotodetail(item)">	
			   <mu-card-header  :title="item.name ||item.name" :subTitle="'性别:'+item.gender+' 爱好:'+item.hobby">
			    <mu-avatar  :src="item.icon" slot="avatar"/>
			   <i  class="mu-icon material-icons" style="float:right;margin-top:4px;">chevron_right</i>
			 </mu-card-header>
			  </div>
	
		    <mu-list-item :title="item.signature"> </mu-list-item>
			</mu-card>
			<button class="btn_next" @click="getNewDate()">下一个</button>	
		</div>
		<div class="select_id"  v-if="activeTab === '1'&&show">
		    <div class="select_box">
		    	<div class="selext_list" @click="open()">
		    		<p class="title">地区</p>
		    		<p class="address">{{addressProvince}} {{addressCity}}</p>
		    		<i class="mu-icon material-icons">chevron_right</i>
		    	</div>
		    </div>
		    <div class="select_box">
		    	<div class="selext_list">
		    		<p class="title">标签</p>
		    		<p class="address">请选择标签</p>
		    		<i class="mu-icon material-icons">chevron_right</i>
		    	</div>
		    </div>
		    <div class="select_box">
		    	<div class="selext_list">
		    		<button>确定</button>
		    		<button class="reduct" @click="quxiao()">取消</button>
		    	</div>
		    </div>
		  </div>
		  <div class="select_id" v-if="activeTab === '2'&&show">
		  <div class="select_box">
		    	<div class="selext_list" >
		    		<p class="title">性别</p>
		    		<p class="address">任意</p>
		    		<i class="mu-icon material-icons">chevron_right</i>
		    	</div>
		    </div>
		     <div class="select_box">
		    	<div class="selext_list" @click="open()">
		    		<p class="title">地区</p>
		    		<p class="address">{{addressProvince}} {{addressCity}}</p>
		    		<i class="mu-icon material-icons">chevron_right</i>
		    	</div>
		    </div>
		     <div class="select_box">
		    	<div class="selext_list">
		    		<p class="title">爱好</p>
		    		<p class="address">请选择爱好</p>
		    		<i class="mu-icon material-icons">chevron_right</i>
		    	</div>
		    </div>
		    <div class="select_box">
		    	<div class="selext_list">
		    		<p class="title">标签</p>
		    		<p class="address">请选择标签</p>
		    		<i class="mu-icon material-icons">chevron_right</i>
		    	</div>
		    </div>
		    <div class="select_box">
		    	<div class="selext_list">
		    		<button>确定</button>
		    		<button class="reduct" @click="quxiao()">取消</button>
		    	</div>
		    </div>
		  </div>
		  <div class="select_id" v-if="activeTab === '3'&&show">
		    <div class="select_box">
		    	<div class="selext_list" >
		    		<p class="title">性别</p>
		    		<p class="address">任意</p>
		    		<i class="mu-icon material-icons">chevron_right</i>
		    	</div>
		    </div>
		     <div class="select_box">
		    	<div class="selext_list" @click="open()">
		    		<p class="title">地区</p>
		    		<p class="address">{{addressProvince}} {{addressCity}}</p>
		    		<i class="mu-icon material-icons">chevron_right</i>
		    	</div>
		    </div>
		     <div class="select_box">
		    	<div class="selext_list">
		    		<p class="title">爱好</p>
		    		<p class="address">请选择爱好</p>
		    		<i class="mu-icon material-icons">chevron_right</i>
		    	</div>
		    </div>
		    <div class="select_box">
		    	<div class="selext_list">
		    		<button>确定</button>
		    		<button class="reduct" @click="quxiao()">取消</button>
		    	</div>
		    </div>
		  </div>
		   <div class="select_id" v-if="activeTab === '4'&&show">
		     <div class="select_box">
		    	<div class="selext_list" @click="open()">
		    		<p class="title">地区</p>
		    		<p class="address">{{addressProvince}} {{addressCity}}</p>
		    		<i class="mu-icon material-icons">chevron_right</i>
		    	</div>
		    </div>
		    <div class="select_box">
		    	<div class="selext_list">
		    		<p class="title">类别</p>
		    		<p class="address">请选择类别</p>
		    		<i class="mu-icon material-icons">chevron_right</i>
		    	</div>
		    </div>
		    <div class="select_box">
		    	<div class="selext_list">
		    		<button  @click="quxiao()">确定</button>
		    		<button class="reduct" @click="quxiao()">取消</button>
		    	</div>
		    </div>
		  </div>
		  <mu-popup position="bottom" popupClass="demo-popup-left" :open="bottomPopup" @close="close()">
		    <div>
		    <div class="dizhi">
		    	<div @click="cancel">确定</div>
		    	<div @click="cancel">取消</div>
		    </div>
		    	<mu-picker :slots="addressSlots" :visible-item-count="5" @change="addressChange" :values="address"/>
		    </div>
		  </mu-popup>
		  <vueLoading v-show="toast" type="spiningDubbles" class="toast" color="#d9544e" :size="{ width: '150px', height: '150px' }"></vueLoading>
	</div>
</template>
<script>
import axios from 'axios'
import vueLoading from 'vue-loading-template'
const address = {
  '北京': ['北京'],
  '广东': ['广州', '深圳', '珠海', '汕头', '韶关', '佛山', '江门', '湛江', '茂名', '肇庆', '惠州', '梅州', '汕尾', '河源', '阳江', '清远', '东莞', '中山', '潮州', '揭阳', '云浮'],
  '上海': ['上海'],
  '天津': ['天津'],
  '重庆': ['重庆'],
  '辽宁': ['沈阳', '大连', '鞍山', '抚顺', '本溪', '丹东', '锦州', '营口', '阜新', '辽阳', '盘锦', '铁岭', '朝阳', '葫芦岛'],
  '江苏': ['南京', '苏州', '无锡', '常州', '镇江', '南通', '泰州', '扬州', '盐城', '连云港', '徐州', '淮安', '宿迁'],
  '湖北': ['武汉', '黄石', '十堰', '荆州', '宜昌', '襄樊', '鄂州', '荆门', '孝感', '黄冈', '咸宁', '随州', '恩施土家族苗族自治州', '仙桃', '天门', '潜江', '神农架林区'],
  '四川': ['成都', '自贡', '攀枝花', '泸州', '德阳', '绵阳', '广元', '遂宁', '内江', '乐山', '南充', '眉山', '宜宾', '广安', '达州', '雅安', '巴中', '资阳', '阿坝藏族羌族自治州', '甘孜藏族自治州', '凉山彝族自治州'],
  '陕西': ['西安', '铜川', '宝鸡', '咸阳', '渭南', '延安', '汉中', '榆林', '安康', '商洛'],
  '河北': ['石家庄', '唐山', '秦皇岛', '邯郸', '邢台', '保定', '张家口', '承德', '沧州', '廊坊', '衡水'],
  '山西': ['太原', '大同', '阳泉', '长治', '晋城', '朔州', '晋中', '运城', '忻州', '临汾', '吕梁'],
  '河南': ['郑州', '开封', '洛阳', '平顶山', '安阳', '鹤壁', '新乡', '焦作', '濮阳', '许昌', '漯河', '三门峡', '南阳', '商丘', '信阳', '周口', '驻马店'],
  '吉林': ['长春', '吉林', '四平', '辽源', '通化', '白山', '松原', '白城', '延边朝鲜族自治州'],
  '黑龙江': ['哈尔滨', '齐齐哈尔', '鹤岗', '双鸭山', '鸡西', '大庆', '伊春', '牡丹江', '佳木斯', '七台河', '黑河', '绥化', '大兴安岭地区'],
  '内蒙古': ['呼和浩特', '包头', '乌海', '赤峰', '通辽', '鄂尔多斯', '呼伦贝尔', '巴彦淖尔', '乌兰察布', '锡林郭勒盟', '兴安盟', '阿拉善盟'],
  '山东': ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜', '临沂', '德州', '聊城', '滨州', '菏泽'],
  '安徽': ['合肥', '芜湖', '蚌埠', '淮南', '马鞍山', '淮北', '铜陵', '安庆', '黄山', '滁州', '阜阳', '宿州', '巢湖', '六安', '亳州', '池州', '宣城'],
  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州', '绍兴', '金华', '衢州', '舟山', '台州', '丽水'],
  '福建': ['福州', '厦门', '莆田', '三明', '泉州', '漳州', '南平', '龙岩', '宁德'],
  '湖南': ['长沙', '株洲', '湘潭', '衡阳', '邵阳', '岳阳', '常德', '张家界', '益阳', '郴州', '永州', '怀化', '娄底', '湘西土家族苗族自治州'],
  '广西': ['南宁', '柳州', '桂林', '梧州', '北海', '防城港', '钦州', '贵港', '玉林', '百色', '贺州', '河池', '来宾', '崇左'],
  '江西': ['南昌', '景德镇', '萍乡', '九江', '新余', '鹰潭', '赣州', '吉安', '宜春', '抚州', '上饶'],
  '贵州': ['贵阳', '六盘水', '遵义', '安顺', '铜仁地区', '毕节地区', '黔西南布依族苗族自治州', '黔东南苗族侗族自治州', '黔南布依族苗族自治州'],
  '云南': ['昆明', '曲靖', '玉溪', '保山', '昭通', '丽江', '普洱', '临沧', '德宏傣族景颇族自治州', '怒江傈僳族自治州', '迪庆藏族自治州', '大理白族自治州', '楚雄彝族自治州', '红河哈尼族彝族自治州', '文山壮族苗族自治州', '西双版纳傣族自治州'],
  '西藏': ['拉萨', '那曲地区', '昌都地区', '林芝地区', '山南地区', '日喀则地区', '阿里地区'],
  '海南': ['海口', '三亚', '五指山', '琼海', '儋州', '文昌', '万宁', '东方', '澄迈县', '定安县', '屯昌县', '临高县', '白沙黎族自治县', '昌江黎族自治县', '乐东黎族自治县', '陵水黎族自治县', '保亭黎族苗族自治县', '琼中黎族苗族自治县'],
  '甘肃': ['兰州', '嘉峪关', '金昌', '白银', '天水', '武威', '酒泉', '张掖', '庆阳', '平凉', '定西', '陇南', '临夏回族自治州', '甘南藏族自治州'],
  '宁夏': ['银川', '石嘴山', '吴忠', '固原', '中卫'],
  '青海': ['西宁', '海东地区', '海北藏族自治州', '海南藏族自治州', '黄南藏族自治州', '果洛藏族自治州', '玉树藏族自治州', '海西蒙古族藏族自治州'],
  '新疆': ['乌鲁木齐', '克拉玛依', '吐鲁番地区', '哈密地区', '和田地区', '阿克苏地区', '喀什地区', '克孜勒苏柯尔克孜自治州', '巴音郭楞蒙古自治州', '昌吉回族自治州', '博尔塔拉蒙古自治州', '石河子', '阿拉尔', '图木舒克', '五家渠', '伊犁哈萨克自治州'],
  '香港': ['香港'],
  '澳门': ['澳门'],
  '台湾': ['台北市', '高雄市', '台北县', '桃园县', '新竹县', '苗栗县', '台中县', '彰化县', '南投县', '云林县', '嘉义县', '台南县', '高雄县', '屏东县', '宜兰县', '花莲县', '台东县', '澎湖县', '基隆市', '新竹市', '台中市', '嘉义市', '台南市']
}
	export default{
		data(){
			return{
				toast:false,
				items:[],
				bottomPopup: false,
				activeTab: '1',
				show:false,
				url:'/mock/5993f32f059b9c566dbf4430/frent/more/discover/house',
				 addressSlots: [
			        {
			          width: '100%',
			          textAlign: 'right',
			          values: Object.keys(address)
			        }, {
			          width: '100%',
			          textAlign: 'left',
			          values: ['广东']
			        }
			      ],
			       address: ['广东', '广州'],
	     			addressProvince: '广东',
	      			addressCity: '广东'

			}
		},
		mounted(){
			if(this.$route.path=='/find'){
					 this.$store.dispatch('hideHeader')
					 this.$store.dispatch('hidefooter')
			}
			this.getDate()
		},
		methods:{
			getDate(){
				this.toast=true;
				axios({
					method:'get',
					url:this.url
				}).then((res)=>{
					this.items=res.data
					res.data.data.icon=res.data.data.icon.concat(res.data.data.urlid)
					this.toast=false;
				})
			},
			back(){
				window.history.go(-1)
			},
			handleTabChange (val) {
		      this.activeTab = val
		      if(this.activeTab==1){
		    		this.url="/mock/5993f32f059b9c566dbf4430/frent/more/discover/house"
		    		this.getDate()
		    	}else if(this.activeTab==2){
		    		this.url="/mock/5993f32f059b9c566dbf4430/frent/more/discover/roomie"
		    		this.getDate()
		    	}else if(this.activeTab==3){
		    		this.url="/mock/5993f32f059b9c566dbf4430/frent/more/discover/friend"
		    		this.getDate()
		    	}else if(this.activeTab==4){
		    		this.url="/mock/5993f32f059b9c566dbf4430/frent/more/discover/unused"
		    		this.getDate()
		    	}
		    },
		    showslect(){
		    	this.show=true;
		    },
		    quxiao(){
		    	this.show=false
		    },
		    open(){
		    	this.bottomPopup=true;
		    },
		    close(){
		    	this.bottomPopup=false;
		    },
		    addressChange (value, index) {
		      switch (index) {
		        case 0:
		          this.addressProvince = value
		          const arr = address[value]
		          this.addressSlots[1].values = arr
		          this.addressCity = arr[0]
		          break
		        case 1:
		          this.addressCity = value
		          break
		      }
		      this.address = [this.addressProvince, this.addressCity]
		    },
		    cancel(){
		    	this.bottomPopup=false;
		    },
		    getNewDate(){
		    	if(this.activeTab==1){
		    		this.url="/mock/5993f32f059b9c566dbf4430/frent/more/discover/house"
		    		this.getDate()
		    	}else if(this.activeTab==2){
		    		this.url="/mock/5993f32f059b9c566dbf4430/frent/more/discover/roomie"
		    		this.getDate()
		    	}else if(this.activeTab==3){
		    		this.url="/mock/5993f32f059b9c566dbf4430/frent/more/discover/friend"
		    		this.getDate()
		    	}else if(this.activeTab==4){
		    		this.url="/mock/5993f32f059b9c566dbf4430/frent/more/discover/unused"
		    		this.getDate()
		    	}
		    },
		    gotodetail(val){
		    	this.$router.push({
		    		path:'/others',query:{
		    			name:val.name
		    		}
		    	})
		    }

		},
		components:{
			vueLoading
		}
	}
</script>
<style scoped>
.find .tag_box{
	text-align: center;
}
.find .tag_top{
	position: fixed;
	top: 0;
}
.find .tag{
	padding-top: 60px;
}
.find .mu-card-text{
	margin: 0;
	padding-left: 12px;
}
.find .tag_top{
	position:relative;
}
.find .showselect p{
	width:35px;
	height: 20px;
	line-height: 35px;
	text-align: center;
	margin: 0 auto;
	color: red;
	background:#474a4f;
	margin-bottom: 5px;
}
.find .select_box{
	padding: 0 10px;
	background-color: #474a4f;
	border-bottom: 1px solid #ccc;
	box-sizing: border-box;
}
.find .select_box p{
  display: inline-block;
}
.find .select_box .title{
	font-size: 14px;
	color: #fff;
	width: 20%;
	font-weight: bold;
}
.find .select_box .address{
  margin-right:20%;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}
.find .select_box .mu-icon{
	font-size: 24px;
	color: #fff;
	float: right;
	line-height: 50px;
}
.find .select_box .selext_list button{
	width: 45%;
	margin: 5px 2%;
	text-align: center;
	line-height: 35px;
	outline: none;
	border: none;
	background: #ff5252;
	color: #fff;
}
.find .select_box .selext_list .reduct{
	background: #7e848c;
}
.find .mu-popup-bottom{
	bottom: 0;
}
.dizhi{
	overflow: hidden;
	margin:3px 10px;
}
 .dizhi>div{
	float: left;
	width: 30%;
	background:rgb(244, 67, 54) ;
	color: #fff;
	line-height: 35px;
	text-align: center;
	border-radius: 4px;
	margin-bottom: 3px;
}
 .dizhi>div:nth-child(2){
	float: right;
}
.find .select_id{
	position: fixed;
	width: 100%;
	top:102px;
}
.btn_next{
	width: 80%;
	color:#fff;
	line-height: 35px;
	background:#ff5252 ;
	border: none;
	border-radius: 5px;
	margin: 0 auto;
	display: block;
	margin-top: 20px;
}
.toast{
	width: 40%;
	position: fixed;
	top: 40%;
	left:33%;
}
</style>
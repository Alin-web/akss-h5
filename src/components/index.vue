<template>
	<div id="index">
		<!-- nav导航栏 -->
		<navone v-show="navoneIsShow" @immobilization="immobilization"></navone>
		<navs v-show="navsIsShow" @immobilization="immobilization"> </navs>
		<!-- 大背景 -->
		<div class="bg">
			<div class="values">
				<img src="../assets/h5_index/编组 2.png" alt="">
				<div>
					<p>上海艾科赛思网络科技集团有限公司创立于2019年10月，注册资本金2000万，是一家中外合资企业，公司坐落于上海张江高科技园区</p>
				</div>
			</div>
		</div>
		
		<!-- 产品矩阵 -->
		<product class="product"></product>
		<!-- 合作伙伴 -->
		<partner></partner>
		<!-- foot -->
		<foot class="foot"></foot>
	</div>
</template>
<script>
import navone from './common/nav'
import product from './common/product'
import partner from './common/partner'
import foot from './common/foot'
import navs from './common/navs'
export default {
	// 组件注册
	components:{
		navone,
		product,
		partner,
		foot,
		navs
	},
	data() {
		return {
			navoneIsShow:true,
			navsIsShow:false,
			timer: null,
			scrollT: 0,
			stopscroll: 0
		}
	},
	
	mounted() {
		window.addEventListener("scroll", this.handleScroll);
		document.querySelector('body').setAttribute('style', 'none')
	},
	methods: {
		handleScroll() {
			const top = document.documentElement.scrollTop||document.body.scrollTop;
			if(top <= 100){
				this.navoneIsShow = true
				this.navsIsShow = false
			}else if(top >404){
				this.navoneIsShow = false
				this.navsIsShow = true
			}else{
				this.navoneIsShow = false
				this.navsIsShow = false
			}
		},
		immobilization(gerData){
			/* console.log(getData); */
			if(gerData){
				document.querySelector('body').setAttribute('style', 'overflow-y:hidden;')
			}else{
				document.querySelector('body').setAttribute('style', 'none')
			}
		},
		
    }
}
</script>
<style lang="less" scoped>
#index{
	width: 100%;	
	position: relative;
	
	// 大背景
	.bg{
		width:100%;
		height: 8.2rem;
		background: url('../assets/h5_index/bg.png') no-repeat 50%;
		background-size: 100%;
		overflow: hidden;
		.values{
			width: 6.48rem;
			height: 0.89rem;
			margin: 0 auto;
			margin-top: 3.04rem ;
			img{
				display: block;
				width: 100%;
				height: 100%;
				
			}
			div{
				text-align: center;
				padding: 0.1rem;
				p{
					margin-left: 0.1rem;
					width: 5.9rem;
					height: 1.14rem;
					font-size: 0.26rem;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #ccc;
					line-height: 0.38rem;
				}
			}
		}
	}
	.product{
		width: 100%;
	}
	.foot{
		width: 100%;
	}
}
</style>
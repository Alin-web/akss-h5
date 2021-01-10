<template>
    <div class="product">
			<div class="bigTitle">
				<img src="../../assets/h5_index/indetx_tiitle.png" alt="" class="imgs">
			</div>
			<div class="product_display">
				<div id="jhb" class="stock aike_product">
					<div class="product_display_img divs">
						<img src="../../assets/h5_index/矩形.png" class="imgs" alt="">
					</div>
					<div class="product_display_details divs">
						<p class="title">艾科进货宝</p>
						<p class="content">艾科进货宝-已获得纽曼思品牌官方合作授权,与惠氏、好孩子、贝因美、邦宝益智、保龄宝生物、膳麦元、聚才生物等达成战略合作，为专业的商户订货平台，致力于服务终端商户及连锁门店，减少中间商、降低商户成本，以更低的价格、更好的服务,为渠道赋能!打造一站式订货平台,让生意更轻松,商家更赚钱!</p>
						<div class="download"><a href="http://www.aikesaisi.com/jhbApp/">APP下载</a></div>
					</div>
				</div>
				<div id="lxb" class="lx aike_product">
					<div class="product_display_img divs">
						<img src="../../assets/h5_index/矩形(1).png" class="imgs" alt="">
					</div>
					<div class="product_display_details divs">
						<p class="title">艾科拉新宝</p>
						<p class="content">艾科拉新宝，是针对三线以下城市（非一线、新一线、二线城市）以及广大乡镇农村地区的各类B端渠道客户提供增值服务项目的业务平台，平台已与七猫免费小说、云智生活达成深度战略合作，与支付宝、手机淘宝、京东、美团达成推广合作，平台通过创新科技及用心服务，实现科技红利普惠下沉市场，达成平台、服务商、渠道及用户多赢的业务生态。</p>
						<div class="download"><a href="https://api.aikesaisi.com/lxb/appdownload.html">安卓版下载</a></div>
					</div>
				</div>
				<div id="zjlm" class="zjlm">
					<div class="zklm_logo divs">
						<img src="../../assets/h5_index/编组 3.png" class="imgs" alt="">
					</div>
					<div class="zjlm_comtent">
						<p>艾科装机联盟为上海艾科赛思网络科技集团有限公司所有并运营。上海艾科赛思网络科技集团有限公司创立于2019年10月,注册资本金2000万，是一家中外合资企业。作为一家科技企业，公司秉承聚焦线下渠道，融合线上业务的理念，致力于以科技力量打造卓越的增值服务平台！</p>
						<div class="download"><a href="https://zj.aikesaisi.com/home"> 访问网站<i></i></a></div>
					</div>
				</div>
			</div>
		</div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.product{
		width: 100%;
		.bigTitle{
			width: 5.12rem;
			height: 0.6rem;
			margin: 0.4rem auto 0.3rem auto;
			z-index: -1;
		}
		.product_display{
			.aike_product{
				width: 100%;
				height: 9.5rem;
				display:flex;
				.divs{
					margin-top: 0.4rem;
					margin-left: 0.3rem;
				}
				.product_display_img{
					width: 0.96rem;
					height: 0.96rem;
				}
				.product_display_details{
					.title{
						height: 0.34rem;
						font-size: 0.34rem;
						font-family: PingFangSC-Medium, PingFang SC;
						font-weight: 800;
						color: #222226;
						line-height: 0.34rem;
					}
					.content{
						margin-top: 0.1rem;
						width: 5.34rem;
						font-size: 0.26rem;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #757580;
						line-height: 0.39rem;
					}
					.download{
						margin-top: 0.2rem;
						width: 2.12rem;
						height: 0.6rem;
						border: 0.02rem solid #0080FF;
						text-align: center;
						font-size: 0.26rem;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #0080FF;
						line-height: 0.6rem;
					}
				}
			}
			.stock{
				background: url('../../assets/h5_index/编组 5.png') no-repeat 50%;
				background-size: 100% 100%;
			}
			.lx{
				background: url('../../assets/h5_index/编组 6.png') no-repeat 50%;
				background-size: 100% 100%;
			}
			.zjlm{
				width: 100%;
				height: 9.5rem;
				margin-top: 0.4rem;
				background: url('../../assets/h5_index/编组 7.png') no-repeat 25%;
				background-size: 100% 100%;
				overflow: hidden;
				.zklm_logo{
					width: 3.2rem;
					margin-left: 0.3rem;
					margin-top: 0.4rem;
					
				}
				.zjlm_comtent{
					margin-top: 0.15rem;
					p{
						font-size: 0.22rem;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #757580;
						line-height: 0.36rem;
						box-sizing: border-box;
						padding: 0  0.3rem;
					}
					.download{
						margin-top: 0.1rem;
						margin-left: 0.3rem;
						width: 2.12rem;
						height: 0.6rem;
						border: 0.02rem solid #0080FF;
						text-align: center;
						font-size: 0.26rem;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #0080FF;
						line-height: 0.6rem;
					}
					
				}
			}
		}
	}
</style>
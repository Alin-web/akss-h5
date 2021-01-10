<template>
    <div class="about">
       <commonnav @immobilization="immobilization"> </commonnav>
        <div class="aboutImg">
            <img src="../assets/h5_index/about.png" alt="" class="imgs">
        </div>
        <div class="about_akss" id="about_akss_id">
            <div class="title">
                <p>- 关于艾克赛斯 -</p>
            </div>
            <div class="content">
                <p style="word-spacing:0.2rem"> 上海艾科赛思网络科技集团有限公司创立于2019年10月，注册资本金2000万，是一家中外合资企业。公司坐落于上海张江高科技园区。</p>
                <p>作为一家科技企业，公司秉承聚焦线下渠道，融合线上业务的理念，致力于以科技力量打造卓越的增值服务平台！</p>
                <p>目前艾科在全国拥有60多个办事处，线下推广团队骨干近200人。未来用2-3年时间，我们将全国办事处裂变到400家，形成对全国400个地级市、2000个县城以及40000多个乡镇的业务有效触达和覆盖。</p>
                <p>艾科赛思一经创立，便已获得各大同行的高度认可，并达成多家战略合作。</p>
            </div>
        </div>
        <div class="partner" id="hz">
            <div class="title">
                <p>- 合作伙伴 -</p>
            </div>
            <div class="friend">
                <img src="../assets/h5_index/编组 9.png" alt="" class="imgs">
            </div>
        </div>
        <div class="partner" id="ys">
            <div class="title">
                <p>- 合作优势 -</p>
            </div>
            <div class="list">
                <div>
                    <p>平台 - 专注搭建国内领先的增值服务平台</p>
                    <p>以“赋能渠道，创造价值”为企业使命，致力于为生态内的所有线下渠道提供最优最全的增值服务项目</p>
                </div>
                <div>
                    <p>渠道 - 近十年百万级下沉市场渠道客户积累</p>
                    <p>覆盖下沉市场通讯、电脑软硬件、餐饮、校园等多类型渠道，多年持续合作形成稳定客情</p>
                </div>
                <div>
                    <p>用户 - 定位小镇青年精准推广，质量与数量双优</p>
                    <p>在全国30多个省份，200多个城市搭建线下渠道网络，聚焦三线城市以下的下沉市场，定位小镇青年，为用户提供更为精准的产品和服务</p>
                </div>
            </div>
        </div>
        <foot></foot>
    </div>
</template>
<script>
import navs from '../components/common/navs'

import foot from '../components/common/foot'
export default {
    components:{
        'commonnav':navs,
        foot
    },
    created() {
        this.$nextTick(() =>{
            this.getlocal()
        })
    },
    mounted() {
        document.querySelector('body').setAttribute('style','none');
    },
    methods: {
        immobilization(gerData){
			if(gerData){
				document.querySelector('body').setAttribute('style', 'overflow-y:hidden;')
			}else{
				document.querySelector('body').setAttribute('style', 'none')
			}
        },
        getlocal(){
            const cid = this.$route.query.name
            let elm = document.getElementById(cid);
            if(cid){
                elm.scrollIntoView(true);
            }
        },
    },
    
}
</script>
<style lang="less" scoped>
.about{
    position: relative;
    width: 100%;
    .navs{
        width: 100%;
    }
    .about_akss{
        .title{
            display: flex;
            justify-content: center;
            margin: 0.4rem auto;
            height: 0.5rem;
            font-size: 0.4rem;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 800;
            color: #3A3A3C;
            line-height: 0.5rem;
        }
        .content{
            padding: 0 0.3rem;
        p{
            font-size: 0.28rem;
            text-indent: 0.6rem;
            font-weight: 400;
            color: #3A3A3C;
            line-height: 0.48rem;
        }
        span{
            width: 0.1rem;
        }
    }
    }
    .partner{   
        .title{
            display: flex;
            justify-content: center;
            margin: 0.4rem auto;
            height: 0.5rem;
            font-size: 0.4rem;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 800;
            color: #3A3A3C;
            line-height: 0.5rem;
        }
        .friend{
            padding: 0 0.3rem 0.3rem 0.3rem;
        }
        .list{
            div{
                height: 1.8rem;
                margin: 0.2rem 0.3rem;
                overflow: hidden;
                p{
                    height: 0.28rem;
                    font-size: 0.28rem;
                    font-weight: 700;
                    color: #FFFFFF;
                    line-height: 0.28rem;
                    margin-top: 0.3rem;
                    margin-left: 0.3rem;
                }
                p:nth-child(2){
                    font-size: 0.24rem;
                    margin: 0.2rem 0.3rem;
                    font-weight: 400;
                    color: #FFFFFF;
                    line-height: 0.34rem;
                }
                
            }
            div:nth-child(1){
                background-color: #339DFF;
            }
            div:nth-child(2){
                background-color: #FFAF3E;
            }
            div:nth-child(3){
                background-color: #10CC6E;
            }
            
        }
    }
}
</style>
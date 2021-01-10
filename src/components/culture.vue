<template>
    <div id="culture">
        <commonnav @immobilization="immobilization"> </commonnav>
        <div class="aboutImg">
            <img src="../assets/h5_index/qywh.png" alt="" class="imgs">
        </div>
        <div class="content">
            <div class="qysm" id="qysm">
                <div class="title">
                    <p>- 企业使命 -</p>
                </div>
                <div class="info">
                    <p>艾科赛思的使命：<span>赋能渠道，创造价值</span></p>
                    <p>释义：致力于为生态内的所有线下渠道提供最优最全的增值服务项目，用科技普惠下沉市场，创造无限价值。</p>
                </div>
            </div>
            <div class="qysm" id="qyyj">
                <div class="title">
                    <p>- 企业愿景 -</p>
                </div>
                <div class="info">
                    <p  class="high">创建国内领先的增值服务平台，实现平台、服务商、渠道及用户共赢</p>
                    <p  class="high">聚焦线下渠道，融合线上业务，用科技实现平台、服务商、渠道及用户多赢的业务生态。</p>
                    <p  class="high tit">与员工利益共享，风险共担，从而实现艾科赛思基业长青、稳定发展的目标</p>
                    <p  class="high">全员持股，每个人都是公司的主人，艰苦奋斗，共享共担，打造利益共同体，实现公司和员工共赢，使艾科赛思成为员工最佳的生涯发展场所。</p>
                </div>
            </div>
            <div class="val" id="qyjzg">
                <div class="title">
                    <p>- 核心价值观 -</p>
                </div>
                <div class="values">
                    <div>
                        <p>企业精神</p>
                        <i>诚实苦干，创新求进。</i>
                    </div>
                    <div>
                        <p>经营理念</p>
                        <i>合法经营，管理规范；</i>
                        <i>财务透明，知人善用。</i>
                    </div>
                    <div>
                        <p>人才理念</p>
                        <i>有德无才，其德可用；</i>
                        <i>有才无德，其才不用；</i>
                        <i>艾科赛思最好的产品是人，用心的人就是人才！</i>
                    </div>
                    <div>
                        <p>管理理念</p>
                        <i>爱：从心出发，爱自己、爱家人、爱伙伴、爱客户；</i>
                        <i>真实：讲真话、办真事；</i>
                        <i>高动力、高产出、高福利。</i>
                    </div>
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
        document.querySelector('body').setAttribute('style', 'none')
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
#culture{
    position: relative;
    width: 100%;
    .content{
        
        .qysm{
            padding-bottom: 0.4rem;
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
            .info{
                p{
                    padding: 0 0.4rem;
                    height: 0.48rem;
                    font-size: 0.28rem;
                    font-weight: 800;
                    color: #3A3A3C;
                    line-height: 0.48rem;
                    span{
                        color:#0080FF;
                    }
                }
                p:nth-child(2n){
                    margin-top: 0.2rem;
                    height: 0.84rem;
                    font-size: 0.26rem;
                    font-weight: 400;
                    color: #3A3A3C;
                    line-height: 0.42rem;
                }
                .high{
                    height: 0.88rem;
                }
                .tit{
                    margin-top: 0.3rem;
                }
            }
            
        }
        .val{
            .title{
                display: flex;
                justify-content: center;
                margin: 0.4rem auto;
                height: 0.5rem;
                font-size: 0.4rem;
                font-weight: 800;
                color: #3A3A3C;
                line-height: 0.5rem;
            }
            .values{
                div{
                    margin: 0.4rem 0.3rem;
                    height: 2.26rem;
                    padding-left: 0.3rem;
                    overflow: hidden;
                    p{
                        margin:0.3rem 0 0.15rem 0 ;
                        height: 0.35rem;
                        font-size: 0.35rem;
                        font-weight: 700;
                        color: #0080FF;
                        line-height: 0.35rem;
                    }
                    i{
                        display: block;
                        height: 0.42rem;
                        font-size: 0.26rem;
                        font-weight: 400;
                        color: #3A3A3C;
                        line-height: 0.42rem;
                    }
                    
                }
                div:nth-child(1){
                    background: url('../assets//h5_index/cheng.png') no-repeat center;
                    background-size: 100% 100%;
                }
                div:nth-child(2){
                    background: url('../assets//h5_index/ming.png') no-repeat center;
                    background-size: 100% 100%;
                }
                div:nth-child(3){
                    background: url('../assets//h5_index/ren.png') no-repeat center;
                    background-size: 100% 100%;
                }
                div:nth-child(4){
                    background: url('../assets//h5_index/true.png') no-repeat center;
                    background-size: 100% 100%;
                }
            }
        }
    }
}
</style>
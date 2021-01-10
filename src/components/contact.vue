<template>
    <div id="culture">
        <commonnav @immobilization="immobilization"> </commonnav>
        <div class="aboutImg" id="jtzb">
            <img src="../assets/h5_index/lx.png" alt="" class="imgs">
        </div>
         <div class="content">
                <div class="title">
                    <p>- 集团总部 -</p>
                </div>
                <div class="info">
                    <p>上海艾科赛思网络科技集团有限公司</p>
                    <li>地址：上海市浦东新区盛夏路560号308室</li>
                    <li>电话：021-58569589</li>
                    <li>邮编：201210</li>
                    <li>交通：地铁2号线广兰路站(步行约10分钟)、615路(盛夏路秋月路)、张江1路(盛夏路秋月路)、1014路公交(申江路紫薇路)、浦东11路(申江路紫薇路)</li>
                    <img id="hzqt" src="../assets/h5_index/map.png" alt="" class="imgs">
                </div>
                <div class="title">
                    <p>- 合作洽谈 -</p>
                </div>
                <div class="list">
                    <div>
                        <p>商务合作</p>
                        <i>如果您是渠道、企业品牌，想市场合作，请联系：</i>
                        <i>电话：021-58569589</i>
                        <i>邮箱：BD@aikesaisi.com</i>
                    </div>
                    <div>
                        <p>客服服务</p>
                        <i>如果您在日常使用过程中遇到问题，请联系：</i>
                        <i>电话：400-878-9598</i>
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
            padding-bottom: 0.4rem;
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
            .info{
                padding: 0 0.4rem;
                p{
                    height: 0.48rem;
                    font-size: 0.32rem;
                    font-weight: 800;
                    color: #3A3A3C;
                    line-height: 0.48rem;  
                }
                li{
                    margin-top: 0.1rem;
                    font-size: 0.26rem;
                    font-weight: 400;
                    color: #3A3A3C;
                    line-height: 0.42rem;
                }
                img{
                    margin-top: 0.3rem;
                }
                
            }
            .list{
                padding: 0 0.3rem;
                div{
                    
                    height: 2.26rem;
                    padding-left: 0.3rem;
                    overflow: hidden;
                    background: #F9FAFC;
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
                div:nth-child(2){
                    margin-top: 0.3rem;
                }
            }
        }
}
</style>
<template>
    <div id="culture">
        <commonnav @immobilization="immobilization"> </commonnav>   
        <div class="aboutImg" id="zp">
            <img src="../assets/h5_index/join.png" alt="" class="imgs">
        </div>
         <div class="content">
                <div class="title">
                    <p>- 加入我们成就梦想 -</p>
                </div>
                <div class="info">
                    <p>全国城市经理</p>
                    <div class="infocontent">
                        <p>岗位职责</p>
                        <li>1、负责开发所辖区域母婴市场，完成纽曼思系列产品门店开发、上架、销售及客户维护，推进纽曼思系列产品市、县、乡镇母婴店一体化运作；</li>
                        <li>2、负责所辖区域电脑门店技术员及APP拉新市场开发，完成常用电脑系列软件推广及APP市场新用户增长，编织市、县、乡镇电脑市场及APP拉新市场客户关系网；</li>
                        <li>3、负责业务跟进，定期回访已合作客户，提供服务和维护，建立良好的业务协作关系；</li>
                        <li>4、负责给客户提供产品培训、答疑，并提供专业的咨询和意见，提高客户粘性；</li>
                        <li>5、及时收集和反馈所获取的市场信息及动态。</li>
                    </div>
                    <div class="infocontent">
                        <p>任职要求</p>
                        <li>1、熟悉母婴渠道、快消/通讯行业或有线下渠道推广经验、有相关市场资源者优先；</li>
                        <li>2、诚实踏实、沟通能力良好、执行力、抗压能力强，具有良好的团队协作精神；</li>
                        <li>3、有较强的语言沟通能力、陌生拜访能力，热爱销售、有较强的销售意识，对高薪有强烈欲望；</li>
                        <li>4、全职工作并适应公司人才梯度建设，有较强的个人职业规划能力；</li>
                        <li>要求人才本地化，对移动办公软件管理能接受！！！</li>
                    </div>
                    <div class="infocontent">
                        <p>任职要求</p>
                        <li>底薪高，绩效多，提成高，有能力者皆能得偿所愿，普通城市经理4000-10000元，高级城市经理月薪15000以上；</li>
                    </div>
                    <div class="infocontent">
                        <p>福利保障</p>
                        <li>五险一金+年终分红+不封顶奖金+高额激励奖金+月度补贴+内部培训+定期团建+节日福利+员工活动+广阔的发展空间——让您成就未来；</li>
                    </div>
                    
                    <div class="infocontent">
                        <p>其他福利</p>
                        <li>1、团队业绩突出且凝聚力强评优晋升；</li> 
                        <li>2、拥有自己的客户关系网，人脉丰富高大上；</li> 
                        <li>3、管理扁平无层级，专心赚钱；</li> 
                        <li>4、全方位入职培训：新员工培训 + 一对一带教；</li> 
                        <li>5、深发展职业培训：金牌培训讲师提供专业、系统的岗前培训、基本业务培训、晋升培训！让你更快突破成长瓶颈，并得到更好的发展。</li>
                        <li>这是一份适合长期发展的工作，如果您有兴趣、如果您有热情、如果您想挑战万元收入，马上行动，我们等待您的加入！</li>
                    </div>
                    
                    <div class="infocontent">
                        <p>注:</p>
                        <li>1、我们只招聘全职,想做兼职的请绕行;</li>
                        <li>2、不愿意下县城,乡镇跑市场,入职就想做管理的请绕行,我们所有的管理都是从基层做起的,感谢理解!</li>
                        <li> 欢迎投递简历至邮箱：<span>AKhr@aikesaisi.com</span></li>
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
                .infocontent{
                    p{
                        margin-top: 0.3rem;
                    }
                    li{
                        margin-top: 0.2rem;
                        font-size: 0.28rem;
                        color: #3A3A3C;
                        line-height: 0.48rem; 
                        span{
                            color: #0080FF;
                        }
                    }
                }
            }
            
        }
}
</style>
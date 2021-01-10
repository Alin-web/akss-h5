<template>
    <div id="business">
        <commonnav @immobilization="immobilization"> </commonnav>
        <div class="aboutImg">
            <img src="../assets/h5_index/cpyw.png" alt="" class="imgs">
        </div>
        <product></product>
        <foot></foot>
    </div>
</template>
<script>
import navs from '../components/common/navs'
import product from '../components/common/product'
import foot from '../components/common/foot'
export default {
    components:{
        'commonnav':navs,
        foot,
        product
    },
    created() {
        this.$nextTick(() =>{
            this.getlocal()
        })
    },
    mounted() {
        document.querySelector('body').setAttribute('style', 'none');
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
    }
}
</script>
<style lang="less" scoped>
#about{
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
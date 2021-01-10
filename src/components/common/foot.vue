<template>
    <div class="foot">
        <Menu class="menu" accordion active-name="1"  >
            <Submenu :name="item.id" v-for="item in datalist" :key="item.id" >
                <template slot="title">
                   {{item.title}}
                </template>
                <MenuItem   :name="sonvalue.id"  v-for="sonvalue in item.content" :key="sonvalue.id">
                     <div  @click="changeBg(item.link,sonvalue.name)">
                         {{sonvalue.item_son}}
                     </div>
                </MenuItem>
            </Submenu>
        </Menu>
        <div class="logo">
            <div class="img">
                <img src="../../assets/h5_index/logo.png" alt="" class="igmgs">
            </div>
            <div>
                <p>沪ICP备19039528号-1</p>
                <p>Copyright © 上海艾科赛思网络科技集团有限公司</p>
            </div>
        </div>
    </div>
</template>
<script>
import VueRouter from 'vue-router'
const { isNavigationFailure, NavigationFailureType } = VueRouter
export default {
    data() {
        return {
            datalist:[
                {
                    title:'关于我们',
                    id:1,
                    link:'/about',
                    content:[
                        {   
                            id:2,
                            item_son:'关于艾克塞斯',
                            name:'about_akss_id'
                        },
                        {   id:1,
                            item_son:'合作伙伴',
                            name:'hz'
                            
                        },
                        {   
                            id:3,
                            item_son:'合作优势',
                            name:'ys'
                        }
                    ]
                },
                {
                    title:'产品业务',
                    id:2,
                    link:'/business',
                    content:[
                        {   id:1,
                            item_son:'艾科进货宝',
                            name:'jhb'
                        },
                        {   
                            id:2,
                            item_son:'艾科拉新宝',
                            name:'lxb'
                        },
                        {   
                            id:3,
                            item_son:'装机联盟',
                            name:'zjlm'
                        }
                    ]
                },
                {
                    title:'企业文化',
                    id:3,
                    link:'/culture',
                    content:[
                        {   id:1,
                            item_son:'企业使命',
                            name:'qysm'
                        },
                        {   
                            id:2,
                            item_son:'企业愿景',
                            name:'qyyj'
                        },
                        {   
                            id:3,
                            item_son:'核心价值观',
                            name:'qyjzg'
                        }
                    ]
                },
                {
                    title:'加入我们',
                    id:4,
                    link:'/join',
                    content:[
                        {   id:1,
                            item_son:'招聘信息',
                            name:'zp'
                        }
                    ]
                },
                {
                    title:'联系我们',
                    id:5,
                    link:'/contact',
                    content:[
                        {   id:1,
                            item_son:'集团总部',
                            name:'jtzb'
                        },
                        {   id:2,
                            item_son:'合作洽谈',
                            name:'hzqt'
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        changeBg(link,item){
            this.solveError(link,item)
        },
        solveError(link,item){
            this.$router.push({path:link, query: {name:item}}).catch(failure => {
                if (isNavigationFailure(failure, NavigationFailureType.redirected)) {
                    console.log('解决路由跳转当前页面报错问题');
                }
            })
        }
    },
}
</script>
<style lang="less" scoped>
.foot{
    background: #F3F5FA;
    .logo{
        margin-top: 0.3rem;
        padding-left: 0.4rem;
        .img{
            width: 2rem;
            .igmgs{
                width: 100%;
            }
        }
        div:nth-child(2){
            padding-bottom: 0.5rem;
        }
    }
}

</style>
<template>
  <div class="navs">
    <div class="absolute">
      <div class="tab">
        <img @click="tabclcik" class="imgs" v-show="!isTure" src="../../assets/h5_index/形状结合_blue.png" alt="" />
      </div>
      <div class="akss_logo">
        <img src="../../assets/h5_index/logo_blue.png" alt="" />
      </div>
    </div>
    <!-- 点击出现一个页面覆盖 需要给这个页面有足够搞得z-index不然无法触发事件 -->
    <div class="jump" v-show="isTure">
      <div class="leftdiv">
        <div class="tabShow">
          <img @click="clickclose"  class="imgss" src="../../assets/h5_index/x.png" alt="" 	/>
        </div>
        <div class="nav">
            <li v-for="(item, index) in content" :key="index" @click="jumpnav(index)">{{content[index]}}</li>
        </div>
      </div>
      <div class="rightdiv"></div>
    </div>
  </div>
</template>
<script>
import VueRouter from 'vue-router'
const { isNavigationFailure, NavigationFailureType } = VueRouter
export default {
	data() {
		return {
      isTure : false,
      content:['首页','关于我们','产品业务','企业文化','加入我们','联系我们']
		}
	},
	methods:{
		tabclcik(){
      this.isTure = !this.isTure
			this.$emit('immobilization',this.isTure)
    },
    clickclose(){
      this.isTure = !this.isTure
      this.$emit('immobilization',this.isTure)
    },
    jumpnav(index){
      if(index == 0){
        this.solveError('/index')
      }else if(index == 1){
        this.solveError('/about')
      }else if(index == 2){
        this.solveError('/business')
      }else if(index == 3){
        this.solveError('/culture')
      }else if(index == 4){
        this.solveError('/join')
      }else if(index == 5){
        this.solveError('/contact')
      }else{
        return false
      }
    },
    // 解决跳转当前页面路由报错问题
    solveError(path){
      this.$router.push(path).catch(failure => {
        if (isNavigationFailure(failure, NavigationFailureType.redirected)) {
            console.log('解决路由跳转当前页面报错问题');
        }
      })
    }
    
	},
};
</script>
<style lang="less" scoped>
.navs{
    display: flex;
    width: 100%;
    height: 1rem;
}
.absolute {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 2;
  background-color: #fff;
  .tab {
    position: absolute;
    top: 0.4rem;
    left: 0.3rem;
    width: 0.34rem;
	height: 0.28rem;
	// 原本是img
    .imgs {
      display:  block;
      width: 100%;
	  height: 100%;
	  z-index: 2;
    }
  }
  .akss_logo {
    width: 2rem;
    height: 0.46rem;
    margin: 0.3rem auto;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
.jump{
  position: fixed;
  top: 0;
  width: 100%;
  height: 50rem;
  z-index: 9;
  display: flex;
  .leftdiv{
      width: 50%;
      height: 100%;
      background-color:#ffffff ;
      opacity: 0.95;
      .tabShow {
      width: 0.3rem;
      height: 0.3rem;
	    margin: 0.4rem 0 0 0.32rem;
        .imgss{
          display:  block;
          width: 100%;
          height: 100%;
          z-index: 2;
          
        }
      
      }
      .nav{
          li{
            width: 1.5rem;
            text-align: center;
            margin: 0 auto;
            height: 0.36rem;
            font-size: 0.36rem;
            font-weight: 500;
            line-height: 0.36rem;
            padding: 0.6rem 0 ;
          }
      }

  }
  .rightdiv{
      width: 50%;
      height: 100%;
      border: 0.01rem solid pink;
      background: #000000;
      opacity: 0.3;
  }
}
.noshow{
	display: none;
}
</style>
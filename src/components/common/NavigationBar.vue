<template>
  <div id="navigation-bar-back">
    <div id="navigation-bar">
      <div class="temp">
        <navigation-item class="navigation-item" path="/home"><span>首页</span></navigation-item>
        <div style="height: 2px" :class="{'active': this.$route.path==='/home'}"></div>
      </div>

      <div class="temp">
        <navigation-item class="navigation-item" path="/launch"><span>发布信息</span></navigation-item>
        <div style="height: 2px" :class="{'active': this.$store.path==='/launch'}"></div>
      </div>

      <div class="temp">
        <navigation-item class="navigation-item" path="/query"><span>查看全部订单</span></navigation-item>
        <div style="height: 2px" :class="{'active': this.$store.path==='/query'}"></div>
      </div>

      <div class="temp">
        <navigation-item class="navigation-item" path="/issue"><span>评论区</span></navigation-item>
        <div style="height: 2px" :class="{'active': this.$route.path==='/issue'}"></div>
      </div>

      <div class="temp">
        <navigation-item class="navigation-item" path="/login">
          <span v-show="!hasLogin">登陆</span>
          <span v-show="hasLogin" @click="logout">退出</span>
        </navigation-item>
        <div style="height: 2px" :class="{'active': this.$route.path==='/login'}"></div>
      </div>


      <div class="temp">
        <navigation-item class="navigation-item" path="/register"><span>注册</span></navigation-item>
        <div style="height: 2px" :class="{'active': this.$route.path==='/register'}"></div>
      </div>


<!--      <el-link type="primary" href="/login" >登陆</el-link>-->

      <el-menu
              :default-active="activeIndex2"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color= rgba(0,70,140,1)
              text-color="#fff"
              active-text-color="#ffd04b">

<!--        <el-submenu index="5">-->
<!--          <template slot="title">我的</template>-->
<!--                <span v-show="!hasLogin"><el-link type="primary" href="/login">登陆</el-link></span>-->
<!--                <span v-show="hasLogin" ><el-link type="danger" @click="logout">退出</el-link></span>-->

<!--&lt;!&ndash;          <el-menu-item index="5-1" v-show="!hasLogin" ><el-link type="primary" href="/login" >登陆</el-link></el-menu-item>&ndash;&gt;-->
<!--&lt;!&ndash;          <el-menu-item index="5-2" v-show="hasLogin"><el-link type="danger" @click="logout">退出</el-link></el-menu-item>&ndash;&gt;-->
<!--          <el-menu-item index="5-3" ><el-link type="danger" >注册</el-link></el-menu-item>-->


<!--        </el-submenu>-->
      </el-menu>

    </div>
  </div>
</template>

<script>
  import NavigationItem from "../content/NavigationItem";

  export default {
    name: "NavigationBar",
    components: {
      NavigationItem,
    },

    data:{
      username:"",
      hasLogin: false,
      intervalId:null
    },

    created() {

      // if (window.sessionStorage.getItem("userInfo") !== ""){
      //   // this.$store.getters.getUser.username 从jwt获取用户信息
      //   this.hasLogin = true
      // }
      //
      //
      // if (window.sessionStorage.getItem("userInfo") === ""){
      //   this.hasLogin = false
      // }

      this.dataRefreh();
    },

    methods:{
      logout() {
        window.sessionStorage.clear(); //清除session

        // 在页面销毁后，清除计时器
        this.clear();

        this.$store.commit("REMOVE_INFO");
        this.hasLogin = false
      },
      // 定时刷新数据函数
      dataRefreh() {
        // 计时器正在进行中，退出函数
        if (this.intervalId != null) {
          return;
        }
        // 计时器为空，操作
        this.intervalId = setInterval(() => {
          // console.log("刷新" + new Date());
          // this.initData(); //加载数据函数
          if (window.sessionStorage.getItem("userInfo") !== ""){
            this.hasLogin = true
          }
        }, 2000);
      },
      // 停止定时器
      clear() {
        clearInterval(this.intervalId); //清除计时器
        this.intervalId = null; //设置为null
      },
    }

  }
</script>

<style scoped>
  #navigation-bar-back {
    width: 100%;
    min-width: 1500px;
    height: 60px;
    background: rgba(0, 70, 140, 1);
  }

  #navigation-bar {
    width: 1200px;
    height: 60px;
    font-size: 14px;
    color: rgba(254, 255, 255, 1);
    line-height: 60px;
    margin: 0 auto;
    display: flex;
  }

  .navigation-item {
    margin: 0 auto;
    height: 58px;
    line-height: 60px;
  }

  .active {
    background-color: #ED6D00;
  }

  .temp {
    margin: 0 auto;
  }
</style>

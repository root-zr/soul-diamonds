<!--<template>-->
<!--  <div class="m-content">-->

<!--    <div class="maction">-->

<!--      <span><el-link href="/blogs">主页</el-link></span>-->
<!--      <el-divider direction="vertical"></el-divider>-->

<!--      <span><el-link type="success" href="/blog/add">其他</el-link></span>-->
<!--      <el-divider direction="vertical"></el-divider>-->

<!--      <span v-show="!hasLogin"><el-link type="primary" href="/login">登陆</el-link></span>-->
<!--      <span v-show="hasLogin"><el-link type="danger" @click="logout">退出</el-link></span>-->
<!--      <el-divider direction="vertical"></el-divider>-->

<!--      <span><el-link type="register" href="/Register">注册</el-link></span>-->


<!--    </div>-->
<!--  </div>-->

<!--</template>-->


<!--<script>-->
<!--  export default {-->
<!--    name: "Header",-->
<!--    data() {-->
<!--      return {-->
<!--        user: {-->
<!--        },-->
<!--        hasLogin: false-->
<!--      }-->
<!--    },-->
<!--    methods: {-->
<!--      logout() {-->
<!--        const _this = this-->
<!--        this.$axios.get('/logout', {-->
<!--          headers: {-->
<!--            "Authorization": localStorage.getItem("token")-->
<!--          }-->
<!--          // eslint-disable-next-line no-unused-vars-->
<!--        }).then(res => {-->
<!--          _this.$store.commit("REMOVE_INFO")-->
<!--          _this.$router.push("/login")-->
<!--          console.log(res)-->
<!--        })-->
<!--      }-->
<!--    },-->
<!--    created() {-->
<!--      if (this.$store.getters.getUser.username) {-->
<!--        this.user.username = this.$store.getters.getUser.username-->
<!--        this.user.avatar = this.$store.getters.getUser.avatar-->

<!--        this.hasLogin = true-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--</script>-->

<!--<style scoped>-->
<!--  .m-content {-->
<!--    max-width: 960px;-->
<!--    margin: 0 auto;-->
<!--    text-align: center;-->
<!--  }-->

<!--  .maction {-->
<!--    margin: 10px 0;-->
<!--  }-->

<!--  .el-carousel__item h3 {-->
<!--    color: #475669;-->
<!--    font-size: 18px;-->
<!--    opacity: 0.75;-->
<!--    line-height: 300px;-->
<!--    margin: 0;-->
<!--  }-->

<!--  .el-carousel__item:nth-child(2n) {-->
<!--    background-color: #99a9bf;-->
<!--  }-->

<!--  .el-carousel__item:nth-child(2n+1) {-->
<!--    background-color: #d3dce6;-->
<!--  }-->


<!--</style>-->

<template>

      <el-menu
              :default-active="activeIndex2"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#0080FF"
              text-color="#fff"
              active-text-color="#ffd04b">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
    <!--    <el-menu-item index="3" disabled>消息中心</el-menu-item>-->
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>

        <el-submenu index="5">
          <template slot="title">我的</template>
    <!--      <span v-show="!hasLogin"><el-link type="primary" href="/login">登陆</el-link></span>-->
    <!--      <span v-show="hasLogin"><el-link type="danger" @click="logout">退出</el-link></span>-->
          <el-menu-item index="5-1" v-show="!hasLogin" ><el-link type="primary" href="/login" >登陆</el-link></el-menu-item>
          <el-menu-item index="5-2" v-show="hasLogin"><el-link type="danger" @click="logout">退出</el-link></el-menu-item>

        </el-submenu>
      </el-menu>

</template>


<script>
    export default {

        name: "Header",

        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

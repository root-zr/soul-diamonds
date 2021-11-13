<template>
  <div id="login">
    <div class="login_container">
      <!--登录块-->
      <div class="login_box" align="center">
        <div class="testdiv">
          <img src="../assets/img/logo.png" />
          <span>钻石订购平台</span>
        </div>

        <!--表单区域-->
        <el-form
                ref="loginFormRef"
                :rules="loginRules"
                :model="loginForm"
                class="login_form"
                label-width="0px"
        >
          <!--用户名-->
          <el-form-item prop="username" class="login_text">
            <el-input
                    v-model="loginForm.userId"
                    placeholder="用户名"
                    prefix-icon="iconfont icon-denglu"
                    class="register_transp"
            ></el-input>
          </el-form-item>
          <!--密码-->
          <el-form-item prop="password">
            <el-input
                    v-model="loginForm.password"
                    placeholder="密码"
                    prefix-icon="iconfont icon-mima"
                    type="password"
                    class="register_transp"
            ></el-input>
          </el-form-item>
          <!-- 注册小链接 -->
          <div class="nRegister">
            <el-link :underline="false" @click="goRegister()"
            >新用户注册</el-link
            >
          </div>
          <!--按钮-->
          <el-row>
            <el-col :span="12"><el-button type="primary"  @click="login()">登录</el-button>
            </el-col>
                <el-col :span="12"><el-button @click="resetLoginForm()">重置</el-button>
            </el-col>
          </el-row>

        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        //表单数据
        loginForm: {
          userId: "15390526991",
          password: "123456",
        },
        //验证对象：校验规则
        loginRules: {
          userId: [
            { required: true, message: "用户名称为必填项", trigger: "blur" }, //必填项验证
            {
              min: 1,
              max: 100,
              message: "长度在 1 到 100 个字符",
              trigger: "blur",
            }, //长度验证
          ],
          password: [
            { required: true, message: "用户密码为必填项", trigger: "blur" }, //必填项验证
            {
              min: 6,
              max: 10,
              message: "长度在 6 到 10 个字符",
              trigger: "blur",
            }, //长度验证
          ],
        },
      };
    },
    methods: {
      //异步加载数据，登录
      login() {

        this.$refs.loginFormRef.validate((valid) => {
          if (!valid) return;
          const _this = this;

          this.$axios.post("/login", this.loginForm).then((res) => {

            const jwt = res.headers["authorization"];
            const userInfo = res.data.data;

            // 把数据共享出去
            _this.$store.commit("SET_TOKEN", jwt);
            _this.$store.commit("SET_USERINFO", userInfo);

            window.sessionStorage.setItem("userId", userInfo.id);
            window.sessionStorage.setItem("username", userInfo.username);
            // 获取
            console.log(_this.$store.getters.getUser);

            this.$router.push("/");
            this.$message.success("登陆成功！");
          });
          this.loginForm.userId=''
          this.loginForm.password=''
        });
      },
      //重置表单内容
      resetLoginForm() {
        this.$refs.loginFormRef.resetFields();
      },
      goRegister() {
        this.$router.push({ path: "/register" }); //页面跳转
      },
    },
  };
</script>

<style lang='less' scoped>
  .register_transp {
    /deep/.el-input__inner {
      //如果你的style 加了scoped 需要加/deep/
      background: transparent;
      color: #cececf;
    }
  }

  // 使图文同一行出现
  a img {
    border: none;
  }

  .testdiv * {
    height: 125px;
    vertical-align: middle;
    font-family: "SimHei";
    font-size: 40px;
  }

  .login_text {
    background-color: transparent;
  }

  //根节点样式
  .login_container {
    width: 100vw;
    padding: 0;
    margin: 0;
    height: 100vh;
    font-size: 16px;
    background-repeat: no-repeat;
    background-position: left top;
    background-color: #fff;
    color: #fff;
    font-family: "Source Sans Pro";
    background-size: cover;
    position: relative;
  }
  .login_box {
    width: 100vw;
    height: 330px;
    background-color: rgba(0, 70, 140, 1);
    border-radius: 3px;
    opacity: 0.8;
    position: absolute;
    // background-color:transparent;
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);
    .avatar_box {
      width: 150px;
      height: 150px;
      // border: 1px solid #eee;
      border-radius: 50%;
      padding: 5px;
      // box-shadow: 0 0 5px #ddd;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      // background-color: #eee;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }
  }
  // .btns {
  //   display: flex;
  //   justify-content: center;
  //   top: 100%;
  // }
  .login_form {
    position: absolute;
    bottom: 0;
    width: 20%; /*这里宽度100%太宽了，所以设置成20%，为了居中，需要在向右移动40.5%的位置*/
    top: 40%;
    left: 40.5%;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .nRegister /deep/.el-link {
    color: rgba(240, 248, 255, 0.87);
    align-items: right;
    text-align: right;
    margin-left: 70%;
    margin-top: -20px;
  }
  .lButton /deep/.el-button {
    padding: 12px 128px;
  }
</style>

<template>
  <el-card style="margin-top: 30%">
    <el-form :model="ruleForm" ref="ruleFormRef" class="demo-ruleForm">
      <el-col align="center">
        <el-avatar
                :size="100"
                :src="require('../assets/images/logo.png')"
        ></el-avatar>
      </el-col>

      <el-row>
        <el-col
                :span="7"
                style="
            line-height: 90px;
            text-indent: 50px;
            font-weight: bold;
            font-size: 18px;
            margin-left: -5%;
          "
        >账号</el-col
        >
        <el-col :span="17" style="line-height: 90px">
          <el-input
                  v-model="ruleForm.userId"
                  placeholder="请输入账号"
                  style="width: 300px; margin-left: -3%"
          ></el-input>
        </el-col>
      </el-row>

      <el-row>
        <el-col
                :span="7"
                style="
            line-height: 90px;
            text-indent: 50px;
            font-weight: bold;
            font-size: 18px;
            margin-left: -5%;
          "
        >密码</el-col
        >
        <el-col :span="17" style="line-height: 90px">
          <el-input
                  type="password"
                  v-model="ruleForm.password"
                  placeholder="请输入密码"
                  style="width: 300px; margin-left: -3%"
          ></el-input>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12"
        ><el-button
                type="primary"
                style="margin-top: 20px; margin-left: 42%; width: 40%"
                @click="submmit"
        >登录</el-button
        ></el-col
        >
        <el-col :span="12"
        ><el-button
                style="margin-top: 20px; margin-left: 22%; width: 40%"
                @click="goRegister"
        >注册</el-button
        ></el-col
        >
      </el-row>
    </el-form>
  </el-card>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          userId: "",
          password: "",
        },

        userId: "",
        password: "",

        rules: {
          username: [
            {
              required: true,
              message: "请输入用户名",
              trigger: "blur",
              min: 3,
              max: 15,
            },
          ],
          password: [
            {
              required: true,
              message: "请输入密码",
              trigger: "blur",
              min: 6,
              max: 15,
            },
          ],
        },
      };
    },

    created() {},

    methods: {
      submmit() {
        this.$refs.ruleFormRef.validate((valid) => {
          if (!valid) return;
          const _this = this;
          this.$axios.post("/login", this.ruleForm).then((res) => {
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
          this.ruleForm.userId=''
          this.ruleForm.password=''
        });
      },

      goRegister() {
        this.$router.push("register");
      },
    },
  };
</script>

<style scoped>
</style>

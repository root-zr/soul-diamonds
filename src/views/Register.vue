<template>
  <div>
    <!-- 页头 -->
    <div style="width:100%;height:60px;">
      <el-page-header @back="goLogin" content="用户注册" >
      </el-page-header>
    </div>

    <el-card style="margin-top:3%; margin-left:5%; margin-right:5%" >
      <el-row>
        <!-- <el-col :span="6">
            <el-button type="text" @click="goLogin" style="font-size:16px; margin-top:-15%">返回登录</el-button>
        </el-col> -->
        <el-col style="font-weight:bold;margin-left:42%; margin-top:2%">用户注册</el-col>
      </el-row>

      <el-form :model="form" status-icon :rules="rules" ref="formref" label-width="100px" style="margin-right:10px; margin-top:8%" >
        <el-form-item label="账号" prop="userId">
          <el-input v-model="form.userId"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop='checkid'>
          <el-input v-model="form.checkid" placeholder="请输入验证码" style="width:182px"></el-input>
          <el-button @click="getVertifyCode" type="primary" plain>获取验证码</el-button>
        </el-form-item>
        <el-form-item label="用户名称" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="邮箱地址" prop="email">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="form.checkPass" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item style="margin-left:10%">
          <el-button type="primary" @click="submitForm('formref')">注册</el-button>
          <el-button @click="resetForm('formref')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

  </div>
</template>

<script>
  export default {
    data() {

      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.form.checkPass !== '') {
            this.$refs.formref.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var vertifyCheck = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'));
        } else if (value !== this.vertify) {
          callback(new Error('验证码错误！'));
        } else {
          callback();
        }
      };

      return {
        form: {
          userId: '',
          checkid: '',
          username: '',
          email: '',
          password: '',
          checkPass: '',
        },

        vertify: '',

        rules: {
          userId: [
            {required: true, message: '请输入手机号', trigger: 'blur'},
            {pattern: /^1[34578]\d{9}$/, message: '请输入正确的11位电话号码'}
          ],
          checkid: [
            {validator: vertifyCheck, trigger: 'blur'},
            {required: true}
          ],
          username: [
            {required: true, message: "请输入名称", trigger: 'blur'}
          ],
          email: [
            {
              required: true,
              pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
              message: "请输入正确的邮箱",
              trigger: 'blur'
            }
          ],
          password: [
            {validator: validatePass, trigger: 'blur'},
            {required: true, min: 6, max: 20, message: "长度在 6 到 20 个字符", trigger: "blur"}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'},
            {required: true}
          ]
        }
      };
    },

    methods: {
      goLogin(){
        this.$router.push('/login')
      },
      // 随机生成验证码
      getVertifyCode() {
        var code = '';
        for (var i = 0; i < 6; i++) {
          var num = Math.round(Math.random() * 9);
          code += num;
        }

        alert(code);
        this.vertify = code;
      },

      submitForm(formName) {

        this.$refs[formName].validate((valid) => {
          if (valid) {
            //this.$message.success('注册成功！')
            //this.$router.push('/login');

            this.$axios.post('/register', this.form).then(res => {

              // 获取
              console.log(this.$store.getters.getUser)

              this.$message.success('注册成功！')

              this.$router.push('/login');
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
  .el-page-header {
    line-height: 60px;
    margin-left: 20px;
  }
</style>

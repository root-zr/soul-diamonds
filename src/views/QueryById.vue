<template>

  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline" align="center">
      <br/><br/><br/><br/>
      <el-form-item label="订单发起人">
        <el-input v-model="formInline.user" placeholder="请输入发起人编号"></el-input>
      </el-form-item>

      <el-form-item>
        <el-col :span="12"><el-button type="primary" @click="onSubmit">查询</el-button></el-col>
      </el-form-item>
    </el-form>

    <h3>查询结果</h3>

  </div>
</template>

<script>

  export default {
    name: "QueryById",
    components:{

    },
    data() {
      return {
        formInline: {
          user: '',
        },

        tableData: [{
          dateToString: '2016-05-02',
          nameFrom: '111111111',
          nameTo: '2222222'
        }, {
          dateToString: '2016-05-04',
          nameFrom: '1111111',
          nameTo: '11111111'
        }, {
          dateToString: '2016-05-01',
          nameFrom: '王小虎',
          nameTo: '上海市普陀区金沙江路 1519 弄'
        }, {
          dateToString: '2016-05-03',
          nameFrom: '王小虎',
          nameTo: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      onSubmit() {

        this.$axios.get("/query/" +this.formInline.user).then((res) => {
          this.tableData = res.data.data

          var tableDa = this.tableData
          this.$message.success( this.tableData);
          this.$router.push({
            path:'/query',
            name:'Query',
            params:{
              tableData: tableDa
            }
          })

        });

      }

    }
  }
</script>

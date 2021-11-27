<template>

  <div>
<!--    <QueryById></QueryById>-->
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

    <el-table
            :data="tableData"
            style="width: 100%"
            :default-sort = "{prop: 'date', order: 'descending'}"
            align="center"
    >
      <el-table-column
              prop="dateToString"
              label="日期"
              sortable
              width="180">
      </el-table-column>
      <el-table-column
              prop="nameFrom"
              label="发起人"
              sortable
              width="180">
      </el-table-column>
      <el-table-column
              prop="nameTo"
              label="发起人伴侣"
              :formatter="formatter">
      </el-table-column>

      <el-table-column
              prop="goodsId"
              label="商品型号"
              :formatter="formatter">
      </el-table-column>

      <el-table-column
              align="right">
        <template slot="header" slot-scope="scope">
          <el-input
                  v-model="search"
                  size="mini"
                  placeholder="输入关键字搜索"/>
        </template>
      </el-table-column>
    </el-table>

  </div>


</template>



<script>
  import QueryById from "../views/QueryById.vue";

  export default {
    name:"Query",
    components:{
      QueryById
    },
    data() {
      return {
        id:'',
        search: '',
        formInline: {
          user: '',
        },
        tableData: [{
          dateToString: '',
          nameFrom: '',
          nameTo: '',
          goodsId:''
        }]
      }
    },

    methods: {

      formatter(row, column) {
        return row.nameTo;
      },

      getInfo(id){

        this.$axios.get("/queryAll").then((res) => {
          this.tableData = res.data.data;
        });
      },


      onSubmit() {
        this.$axios.get("/query/" + this.formInline.user).then((res) => {
          this.tableData = res.data.data;
        });
      }

    },

    created() {
       this.id = this.$store.getters.getUser.id;
       this.getInfo(this.id);
    },




  }
</script>

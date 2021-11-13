<template>
  <el-table
          :data="tableData"
          style="width: 100%"
          :default-sort = "{prop: 'date', order: 'descending'}"
          align="center"
  >
    <el-table-column
            prop="date"
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
            align="right">
      <template slot="header" slot-scope="scope">
        <el-input
                v-model="search"
                size="mini"
                placeholder="输入关键字搜索"/>
      </template>
    </el-table-column>
  </el-table>

</template>

<script>
  export default {
    data() {
      return {

        search: '',
        tableData: [{
          date: '2016-05-02',
          nameFrom: '111111111',
          nameTo: '2222222'
        }, {
          date: '2016-05-04',
          nameFrom: '1111111',
          nameTo: '11111111'
        }, {
          date: '2016-05-01',
          nameFrom: '王小虎',
          nameTo: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          nameFrom: '王小虎',
          nameTo: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      formatter(row, column) {
        return row.nameTo;
      }
    }
  }
</script>

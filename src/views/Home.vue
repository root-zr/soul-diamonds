<template>
  <div style="color:rgba(51,51,51,1); background-color: #EEF1F9;">

    <div class="block">
      <el-carousel height="450px">
        <el-carousel-item >
        <h3 class="small"> <img src="../assets/img/diamond-soul.jpg" alt="华南理工大学" style="vertical-align: bottom; width: 100%; min-width: 1500px"></h3>
       </el-carousel-item>

        <el-carousel-item >
          <h3 class="small"> <img src="../assets/img/diamond-soul.jpg" alt="华南理工大学" style="vertical-align: bottom; width: 100%; min-width: 1500px"></h3>
        </el-carousel-item>

        <el-carousel-item >
          <h3 class="small"> <img src="../assets/img/diamond-soul.jpg" alt="华南理工大学" style="vertical-align: bottom; width: 100%; min-width: 1500px"></h3>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="center-div" style="height: 700px; margin-top: 10px; margin-bottom: 10px; display: block; width: 1200px;overflow:auto">
      <div style="padding-top: 40px;overflow:auto"  >
        <br/><br/>
        <div style="display: flex; height: 20px; margin-left: 40px; width: 1120px; justify-content: space-between">
          <div style="display: flex;">
            <div class="blueStrip"></div>
            <span style="font-size:18px; line-height: 20px">商品列表</span>
          </div>
        </div>
         <br/><br/> <br/><br/>

          <el-descriptions  :column="3" border >
            <el-descriptions-item label="商品类别1" label-class-name="my-label" content-class-name="my-content">
              <img src="../assets/img/display1.jpg" style="vertical-align: bottom; width: 50%; min-width: 150px">
            </el-descriptions-item>
            <el-descriptions-item label="商品类别2" label-class-name="my-label" content-class-name="my-content" >
              <img src="../assets/img/display2.jpg" style="vertical-align: bottom; width: 50%; min-width: 150px">
            </el-descriptions-item>
            <el-descriptions-item label="商品类别3">
              <img src="../assets/img/display3.jpg" style="vertical-align: bottom; width: 50%; min-width: 150px">
            </el-descriptions-item>
            <el-descriptions-item label="商品描述">
              <el-tag size="medium">价格 1000</el-tag>
              <el-tag size="medium">当前订购量 100份</el-tag>
              <el-button type="text" align="left" class="button">订购</el-button>
            </el-descriptions-item>

            <el-descriptions-item label="商品描述">
              <el-tag size="medium">价格 2000</el-tag>
              <el-tag size="medium">当前订购量 100份</el-tag>
            </el-descriptions-item>

            <el-descriptions-item label="商品描述">
              <el-tag size="medium">价格 3000</el-tag>
              <el-tag size="medium">当前订购量 100份</el-tag>
            </el-descriptions-item>

            <el-descriptions-item label="商品类别4"  style="background:#7d7df3;content-class-name:#3ef343" >
              <img src="../assets/img/display4.jpg" style="vertical-align: bottom; width: 50%; min-width: 150px">
            </el-descriptions-item>
            <el-descriptions-item label="商品类别5">
              <img src="../assets/img/display5.jpg" style="vertical-align: bottom; width: 50%; min-width: 150px">
            </el-descriptions-item>
            <el-descriptions-item label="商品类别6">
              <img src="../assets/img/display6.jpg" style="vertical-align: bottom; width: 50%; min-width: 150px">
            </el-descriptions-item>
            <el-descriptions-item label="商品描述">
              <el-tag size="medium">价格 1000</el-tag>
              <el-tag size="medium">当前订购量 100份</el-tag>
            </el-descriptions-item>

            <el-descriptions-item label="商品描述">
              <el-tag size="medium">价格 2000</el-tag>
              <el-tag size="medium">当前订购量 100份</el-tag>
            </el-descriptions-item>

            <el-descriptions-item label="商品描述">
              <el-tag size="medium">价格 3000</el-tag>
              <el-tag size="medium">当前订购量 100份</el-tag>
            </el-descriptions-item>


            <el-descriptions-item label="商品类别7"  style="background:#dff3d4;content-class-name=#dff3d4" >
              <img src="../assets/img/display7.jpg" style="vertical-align: bottom; width: 50%; min-width: 150px">
            </el-descriptions-item>
            <el-descriptions-item label="商品类别8">
              <img src="../assets/img/display8.jpg" style="vertical-align: bottom; width: 50%; min-width: 150px">
            </el-descriptions-item>
            <el-descriptions-item label="商品类别9">
              <img src="../assets/img/display9.jpg" style="vertical-align: bottom; width: 50%; min-width: 150px">
            </el-descriptions-item>
            <el-descriptions-item label="商品描述">
              <el-tag size="medium">价格 1000</el-tag>
              <el-tag size="medium">当前订购量 100份</el-tag>
            </el-descriptions-item>

            <el-descriptions-item label="商品描述">
              <el-tag size="medium">价格 2000</el-tag>
              <el-tag size="medium">当前订购量 100份</el-tag>
            </el-descriptions-item>

            <el-descriptions-item label="商品描述">
              <el-tag size="medium">价格 3000</el-tag>
              <el-tag size="medium">当前订购量 100份</el-tag>
            </el-descriptions-item>

          </el-descriptions>

        <div class="block" align="middle">
          <el-pagination
                  background
                  layout="prev, pager, next"
                  :total="1000">
          </el-pagination>
        </div>

      </div>


    </div>

    <div style="width:1200px; display: flex; margin: 0 auto;">
      <div class="center-div" style="height: 250px; width: 595px;">
        <div style="padding-top: 40px">

          <div class="link">
            <div class="blueStrip1"></div>
            <a href="http://bigd.big.ac.cn/ncov/">National Genomics Data Center</a>
          </div>

          <div class="link">
            <div class="blueStrip1"></div>
            <a href="https://www.kaggle.com/allen-institute-for-ai/CORD-19-research-challenge" target="_blank">Kaggle</a>
          </div>

          <div class="link">
            <div class="blueStrip1"></div>
            <a href="http://news.sciencenet.cn/htmlnews/2020/3/437095.shtm" target="_blank">科学网</a>
          </div>


        </div>
      </div>


      <div class="center-div" style="height: 250px;width: 595px; margin-left: 10px">
        <div style="padding-top: 40px">

          <div class="link">
            <div class="blueStrip1"></div>
            <a href="http://ncov.earthsdk.com/#flatmap/china" target="_blank">基于earthsdk的疫情数据三维地图</a>
          </div>

          <div class="link">
            <div class="blueStrip1"></div>
            <a href="https://www.covidvisualizer.com" target="_blank">Covid 3d Visualize</a>
          </div>
          <div class="link">
            <div class="blueStrip1"></div>
            <a href="https://documenter.getpostman.com/view/1794236/SzYW2f4S?version=latest" target="_blank">getpostman.com</a>
          </div>



        </div>
      </div>
    </div>

  </div>
</template>

<script>
  // import PieChart from "../components/common/pieChart/PieChart"
  import Query from "./Query.vue";
  export default {
    name: "Home",
    components: {
      // PieChart
        Query
    },
    data() {
      return {
        exInfo: {},
        experimentScore: 4.8,
        scoreNumber: 30,
        views: 1218,
        experimentNumber: 30,
        passRate: 0.767,
        excellentNum: 10,
        pass: 14,
        unPass: 6
      }
    },
    methods: {
    },
    created() {

    },
    mounted() {
      this.$http.get('/statistics/').then(res => {
        let data = res.data.data
        this.$refs.lineChart.option.xAxis.data = data.dates
        this.$refs.lineChart.option.series[0].data = data.num
        this.$refs.lineChart.lineChart.setOption(this.$refs.lineChart.option)
      })
    }
  }
</script>

<style scoped>

  .center-div {
    width: 595px;
    margin: 0 auto;
    background-color: white;
    display: flex;
    transform: translate(0, -50px);
  }

  #ex-information div {
    height: 100%;
    font-size: 16px;
    color: rgba(51, 51, 51, 1);
    line-height: 33px;
  }
  .blueStrip {
    width: 4px;
    height: 20px;
    background: rgba(0, 70, 140, 1);
    border-radius: 1px;
    margin-right: 5px;
  }

  .link {
    margin-top: 15px;
    display: flex;
    height: 15px;
    margin-left: 40px;
  }

  .blueStrip1 {
    width: 4px;
    height: 15px;
    background: rgba(0, 70, 140, 1);
    border-radius: 1px;
    margin-right: 5px;
  }

  .link a {
    font-size: 14px;
    line-height: 15px;
    height: 15px;
  }

  .my-label {
    background: #dff3d4;
  }

  .my-content {
    background: #FDE2E2;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

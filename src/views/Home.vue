<template>
  <div style="color:rgba(51,51,51,1); background-color: #EEF1F9;">
    <div>
      <img src="../assets/img/diamond-soul.jpg" alt="华南理工大学" style="vertical-align: bottom; width: 100%; min-width: 1500px">
    </div>

    <div class="center-div" style="height: 460px; margin-top: 10px; margin-bottom: 10px; display: block; width: 1200px">
      <div style="padding-top: 40px">
        <div style="display: flex; height: 20px; margin-left: 40px; width: 1120px; justify-content: space-between">
          <div style="display: flex;">
            <div class="blueStrip"></div>
            <span style="font-size:18px; line-height: 20px">您近期提交的订单</span>
          </div>
        </div>

          <Query></Query>
      </div>


    </div>

    <div style="width:1200px; display: flex; margin: 0 auto;">
      <div class="center-div" style="height: 460px; width: 595px;">
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


      <div class="center-div" style="height: 460px;width: 595px; margin-left: 10px">
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

</style>

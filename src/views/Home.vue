<template>
    <div style="color:rgba(51,51,51,1); background-color: #EEF1F9;">

        <div class="block">
            <el-carousel :interval="4000" type="card" height="350px">
                <el-carousel-item v-for="item in carousels" key="item">
                    <!--          <h3 class="medium">{{ item }}</h3>-->
                    <el-row>
                        <el-col :span="15"><img ref="imgHeight" :src="item" class="banner_img"/></el-col>
                    </el-row>
                </el-carousel-item>
            </el-carousel>
        </div>

        <div class="center-div"
             style="height: 700px; margin-top: 10px; margin-bottom: 10px; display: block; width: 1200px;overflow:auto">
            <div style="padding-top: 40px;overflow:auto">
                <br/><br/>
                <div style="display: flex; height: 20px; margin-left: 40px; width: 1120px; justify-content: space-between">
                    <div style="display: flex;">
                        <div class="blueStrip"></div>
                        <span style="font-size:18px; line-height: 20px">商品列表</span>
                    </div>
                </div>
                <br/><br/> <br/><br/>

                <el-descriptions :column="3" border>
                    <el-descriptions-item label-class-name="my-label" content-class-name="my-content"
                                          v-for="good in goods" :key="good.goodsId" :label="good.description">

                        <el-card :body-style="{ padding: '0px', marginBottom: '1px'}">
                            <img
                                    :src="require('../assets/img/'+ good.photo)"
                                    class="image"
                            />
                            <div style="padding: 14px;">
                                <el-tag size="medium">价格 {{good.price}}</el-tag>
                                <el-tag size="medium">当前订购量 {{good.number}}份</el-tag>
                                <el-button type="text" @click="dialogVisible = true">立刻订购</el-button>

                                <el-dialog
                                        title="提示"
                                        :visible.sync="dialogVisible"
                                        width="30%"
                                        :before-close="handleClose">
                                    <span>请到发布页面下单！</span>
                                    <span slot="footer" class="dialog-footer">
                                        <el-button @click="dialogVisible = false">取 消</el-button>
                                        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                                   </span>
                                </el-dialog>

                            </div>
                        </el-card>

                    </el-descriptions-item>

                </el-descriptions>

                <br/>

                <div class="block" align="middle">
                    <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="1000">
                    </el-pagination>
                </div>

                <br/>

            </div>


        </div>

        <div style="width:1200px; display: flex; margin: 0 auto;">
            <div class="center-div" style="height: 250px; width: 595px;">
                <div style="padding-top: 40px">

                    <div class="link">
                        <div class="blueStrip1"></div>
                        <a href="http://fanque.supplyjewel.com/">FANQUE 钻石订购平台</a>
                    </div>

                    <div class="link">
                        <div class="blueStrip1"></div>
                        <a href="https://www.bluenile.com/cn/diamonds?utm_source=baidu&click_id=937765787&utm_medium=cpc&utm_campaign=SC_PCDY_Diamond&utm_term=%E9%92%BB%E7%9F%B3%E7%BD%91%E8%B4%AD"
                           target="_blank">blue line 钻石网购</a>
                    </div>

                    <div class="link">
                        <div class="blueStrip1"></div>
                        <a href="https://4cs.gia.edu/zh-cn/%E9%92%BB%E7%9F%B3%E8%B4%AD%E4%B9%B0%E6%8C%87%E5%8D%97/?utm_source=N377807.115044Baidu&utm_medium=cpc&utm_campaign=USIM_GIA_CHINA_Q4_2021&renqun_youhua=1998271" target="_blank">GIA钻石鉴定</a>
                    </div>

                    <div class="link">
                        <div class="blueStrip1"></div>
                        <a href="https://www.jd.com/book/6144a9d032a3399f5708.html?page=2" target="_blank">京东钻石预定网站</a>
                    </div>
                </div>
            </div>


            <div class="center-div" style="height: 250px;width: 595px; margin-left: 10px">
                <div style="padding-top: 40px">

                    <div class="link">
                        <div class="blueStrip1"></div>
                        <a href="https://www.fabfile.org/" target="_blank">Fabric 官网</a>
                    </div>
                    <div class="link">
                        <div class="blueStrip1"></div>
                        <a href="https://fabric-chs.readthedocs.io/zh_CN/chs/"
                           target="_blank">fabric 中文文档</a>
                    </div>

                    <div class="link">
                        <div class="blueStrip1"></div>
                        <a href="https://asiablockchainfoundation.org/"
                           target="_blank">亚洲区块链基金会</a>
                    </div>

                    <div class="link">
                        <div class="blueStrip1"></div>
                        <a href="https://www.hyperledger.org/"
                           target="_blank">hyperledger官网</a>
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
                carousels: [
                    require("../assets/img/diamond-soul1.jpg"),
                    require("../assets/img/diamond-soul2.jpg"),
                    require("../assets/img/diamond-soul3.jpg")
                ],
                dialogVisible: false,
                exInfo: {},
                experimentScore: 4.8,
                scoreNumber: 30,
                views: 1218,
                experimentNumber: 30,
                passRate: 0.767,
                excellentNum: 10,
                pass: 14,
                unPass: 6,
                goods: [{
                    description: "商品类别",
                    price: "1000",
                    photo: require("../assets/img/diamond-soul1.jpg"),
                    number: "100",
                    goodsId: "1"
                }],

            }
        },
        methods: {
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {
                    });
            },

            getInfo() {

                this.$axios.get("/goods/getInfo").then(res => {

                    // this.$message.success(res.data.data);
                    this.goods = res.data.data

                })
            },
        },
        created() {
            this.getInfo();
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

<template>
    <div style="background-color: #EEF1F9; width: 100%; min-height: 800px;">
        <div style="width: 1000px; min-height: 740px; margin: 0 auto;">
            <div>
                <top-part-intro>问题与讨论</top-part-intro>

                <div style="background-color: white; width: 100%; min-height: 647px;">
                    <div style="margin:0 50px;">
                        <div style="display:flex; margin-bottom: 18px; padding-top: 20px">
                            <div class="blueStrip"></div>
                            <span class="text">提出问题</span>
                        </div>
                    </div>

                    <div>
                        <div class="m-content">

                            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"
                                     class="demo-ruleForm">
                                <el-form-item label="标题" prop="title">
                                    <el-input v-model="ruleForm.title"></el-input>
                                </el-form-item>

                                <el-form-item label="内容" prop="content">
                                    <el-input type="textarea" v-model="ruleForm.content"></el-input>
                                </el-form-item>

                                <div style="width: 900px; margin-left: 50px">
                                    <editor
                                            ref="editor"
                                            cacheName="problemsCache"
                                    />

                                    <div align="center">
                                        <!--class是要组件局部的class才会覆盖Button组件原有的样式，如果是全局的class不会覆盖原来组件的样式-->
                                        <Button class="override" @click="submitForm('ruleForm')" style="margin-left: 0">保存</Button>
                                        <Button class="override" @click="resetForm('ruleForm')">清空</Button>
                                    </div>
                                </div>

                            </el-form>

                        </div>


                    </div>


                    <div style="margin:0 50px; margin-top: 40px">
                        <div style="display:flex; margin-bottom: 18px">
                            <div class="blueStrip"></div>
                            <span class="text">问题讨论</span>
                        </div>
                    </div>

                    <div class="mcontaner">
                        <div class="block">
                            <el-timeline>
                                <el-timeline-item :timestamp="reviews.created" placement="top"
                                                  v-for="review in reviews" :key="reviews.reviewsId">
                                    <el-card>

                                        <h4>{{ review.title }}</h4>
                                        <br/>
                                        <h5>作者：{{ review.id }}</h5>
                                        <br/>
                                        <p>{{ review.content }}</p>
                                    </el-card>
                                </el-timeline-item>
                            </el-timeline>
                        </div>
                        <el-pagination class="mpage"
                                       background
                                       layout="prev, pager, next"
                                       :current-page="currentPage"
                                       :page-size="pageSize"
                                       :total="total"
                                       @current-change="page">
                        </el-pagination>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TopPartIntro from "../components/content/TopPartIntro";
    import Editor from "../components/common/editor/Editor";
    import Reviews from "./Reviews";
    import ReviewEdit from "./ReviewEdit";

    export default {
        name: "CommonProblems",
        components: {
            TopPartIntro,
            Editor,
            Reviews,
            ReviewEdit
        },
        data() {
            return {
                reviews: {
                    reviewsId: "",
                    title: "",
                    content: "",
                    created: "",
                    id:""
                },
                currentPage: 1,
                total: 0,
                pageSize: 5,

                ruleForm: {
                    id: '',
                    title: '',
                    content: ''
                },
                rules: {
                    title: [
                        {required: true, message: '请输入标题', trigger: 'blur'},
                        {min: 3, max: 25, message: '长度在 3 到 25 个字符', trigger: 'blur'}
                    ],
                    content: [
                        {required: true, message: '请输入内容', trigger: 'blur'}
                    ]

                }
            };
        },
        methods: {

            page(currentPage) {

                this.$axios.get("/reviews?currentPage=" + currentPage).then(res => {
                    this.reviews = res.data.data.records
                    // this.$message.success(res.data.data.records);
                    this.currentPage = res.data.data.current
                    this.total = res.data.data.total
                    this.pageSize = res.data.data.size
                })
            },

            submitForm(formName) {

                this.ruleForm.id = this.$store.getters.getUser.id;
                this.$axios.post('/reviews/edit', this.ruleForm).then(res => {
                    if(res.data.code === 200){
                      this.$message.success("保存成功！");
                    }else{
                      this.$message.fail("保存失败！");
                    }
                })

            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }

        },
        created() {
            this.page(1)
        }
    };
</script>

<style scoped>
    .override {
        background: rgba(0, 70, 140, 1);
        color: rgba(255, 255, 255, 0.95);
        margin: 20px 0 0 20px;
    }

    .text {
        height: 20px;
        font-size: 18px;
        font-family: Microsoft YaHei, serif;
        color: rgba(51, 51, 51, 1);
        line-height: 20px;
    }

    #issueInput {
        width: 894px;
        height: 94px;
        background: rgba(252, 252, 252, 1);
        border: 1px solid rgba(230, 230, 230, 1);
    }

    .unLight {
        width: 25px;
        height: 25px;
        margin-right: 5px;
        cursor: pointer;
    }

    .m-content {
        text-align: center;
    }

    .bottomDiv {
        width: 26px;
        height: 26px;
        border-radius: 4px;
        font-size: 12px;
        line-height: 26px;
        text-align: center;
        margin-left: 10px;
        cursor: pointer;
    }

    .mpage {
        margin: 0 auto;
        text-align: center;
    }

    .specificIssue {
        min-height: 110px;
        color: rgba(51, 51, 51, 1);
    }

    .base-button {
        width: 120px;
        height: 40px;
        background: rgba(0, 70, 140, 1);
        border-radius: 4px;
        margin-top: 20px;
        margin-left: 480px;
        color: white
    }
</style>


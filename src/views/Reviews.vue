<template>
    <div class="mcontaner">
        <div class="block">
            <el-timeline>
                <el-timeline-item :timestamp="reviews.created" placement="top" v-for="review in reviews" :key="reviews.reviews_id">
                    <el-card>
                        <router-link :to="{name: 'Reviews', params: { reviewsId: reviews.reviews_id}}">
                            <h4>{{ reviews.title }}</h4>
                        </router-link>
                        <p>{{ reviews.content }}</p>
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

</template>

<script>

    export default {
        name: "Reviews",

        data() {
            return {
                reviews: {
                         reviews_id: "",
                         title:"sssss",
                         content:"122222222",
                         created:""
                 },
                currentPage: 1,
                total: 0,
                pageSize: 5
            }
        },
        created() {
            this.page(1)
        },
        methods: {
            page(currentPage) {
                const _this = this
                _this.$axios.get("/reviews?currentPage=" + currentPage).then(res => {
                    console.log(res.data)
                    _this.reviews = res.data.data.records
                    _this.currentPage = res.data.data.current
                    _this.total = res.data.data.total
                    _this.pageSize = res.data.data.size
                })
            }
        }
    }
</script>

<style scoped>
    .mpage {
        margin: 0 auto;
        text-align: center;
    }
</style>

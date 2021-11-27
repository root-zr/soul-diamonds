<template>
    <el-descriptions title="自定义样式列表" :column="3" border>
        <el-descriptions-item label="用户名" label-class-name="my-label" content-class-name="my-content">

            <el-card :body-style="{ padding: '0px', marginBottom: '1px'}">
                <img
                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        class="image"
                />
                <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom card-header">
                        <span class="time">{{ currentDate }}</span>
                        <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                </div>
            </el-card>
        </el-descriptions-item>
        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
        <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
        <el-descriptions-item label="备注">
            <el-tag size="small">学校</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="联系地址" :contentStyle="{'text-align': 'right'}">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
    </el-descriptions>
</template>

<script>
    export default {
        name: "Test"
    }
</script>

<style scoped>
    .my-label {
        background: #E1F3D8;
    }

    .my-content {
        background: #FDE2E2;
    }

</style>

<template>
    <el-form :model="receiptForm" label-width="100px" class="demo-ruleForm">

        <el-form-item label="订单发起人" prop="companyIdfrom" :span="10">
            <el-input v-model="receiptForm.companyIdFrom" disabled="true"></el-input>
        </el-form-item>

        <el-form-item label="发起人伴侣" prop="companyIdTo">
            <el-input v-model="receiptForm.companyIdTo"></el-input>
        </el-form-item>

        <el-form-item label="生效日期" prop="maturityDate">
            <el-col :span="11" style="cursor: pointer">
                <el-date-picker
                        type="date"
                        placeholder="选择日期"
                        v-model="receiptForm.maturityDate"
                        style="width: 218%"
                ></el-date-picker>
            </el-col>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('receiptForm')"
            >确认</el-button
            >
            <el-button @click="resetForm('receiptForm')">重置</el-button>
        </el-form-item>
    </el-form>

</template>

<script>

    export default {
        name: "Launch",
        data() {
            return {
                receiptForm: {
                    companyIdFrom: "",
                    companyIdTo: "",
                    maturityDate: "",
                },

            };
        },
        methods: {
            async submitForm() {
                const { data: res } = await this.$http.post(
                    "/invokeContract/useReceipt",
                    this.receiptForm
                );
                if (res.code == 200) {
                    this.$message.success(res.msg); //信息提示
                    this.resetForm();
                } else {
                    this.$message.error(res.msg); //信息提示
                }
            },
            resetForm() {
                this.receiptForm.companyIdTo = "";
                this.receiptForm.maturityDate = "";
                this.$refs.receiptForm.resetFields();
            },
        },
        created() {
            this.receiptForm.companyIdFrom = this.$store.getters.getUser.id;
        },
    };
</script>


<style lang='less' scoped>
    .demo-ruleForm {
        width: 450px;
        align-items: center;
        height: 300px;
        background-color: #3399cc;
        border-radius: 3px;
        opacity: 0.8;
        position: absolute;
        background-color: transparent;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>

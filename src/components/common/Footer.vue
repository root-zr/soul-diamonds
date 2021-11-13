<template>
    <div class="footer">
        <!--下面的div是父级div的第一个元素，所以要用padding-top而不是margin-top-->
        <div class="footer-text" style="padding-top: 20px;">版权所有：华南理工大学</div>
        <div class="footer-text" style="margin-top: 9px;">网站技术支持：华南理工大学计算机科学与工程学院</div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    .footer {
        width: 100%;
        height: 80px;
        background-color: rgba(0,70,140,1);
        min-width: 1500px;
    }
    .footer-text {
        text-align: center;
        font-size:12px;
        color:rgba(254,254,254,1);
        margin: 0 auto;
    }
</style>

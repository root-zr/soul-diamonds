<template>
    <div style="width: 100%; height: 93px">
        <div style="height: 30px"></div>
        <div style="height:30px;font-size:20px;color:rgba(0,70,140,1);line-height:30px;">
            <slot></slot>
        </div>
        <div style="margin-top:11px; width:1000px;height:2px;background:rgba(0,70,140,1);border-radius:1px;"></div>
    </div>
</template>

<script>
    export default {
        name: "TopPartIntro"
    }
</script>

<style scoped>

</style>

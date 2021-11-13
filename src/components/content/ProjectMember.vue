<template>
    <div style="width: 900px; height: auto;">
        <table style="border-collapse: collapse; text-align: center">
            <tr style="background:rgba(252,252,252,1);">
                <td class="td120" style="width: 60px">序号</td>
                <td class="td120">姓名</td>
                <td class="td120">联系电话</td>
                <td class="td120">所在单位</td>
                <td class="td120">承担任务</td>
                <td class="td120">备注</td>
            </tr>
            <tr v-for="obj in this.memberInfo" v-bind:key="obj.name">
                <td class="td120" style="width: 60px">{{increase()}}</td>
                <td class="td120">{{obj.name}}</td>
                <td class="td120">{{obj.phone}}</td>
                <td class="td120">{{obj.unit}}</td>
                <td class="td120">{{obj.responsibility}}</td>
                <td class="td360">{{obj.remarks}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    let sequence = 1;

    export default {
        name: "ProjectMember",
        props: {
            memberInfo: Array,
            default: []
        },
        methods: {
            increase() {
                return sequence++
            }
        }
    }
</script>

<style scoped>
  .td120 {
    width: 120px;
    height: 40px;
    border: 1px solid rgba(230, 230, 230, 1);
    font-size: 14px;
    font-family: Microsoft YaHei, serif;
    color: rgba(102, 102, 102, 1);
    line-height: 32px;
  }
  .td360 {
    width:360px;
    height:40px;
    border:1px solid rgba(230,230,230,1);
    font-size:14px;
    font-family:Microsoft YaHei,serif;
    color:rgba(102,102,102,1);
    line-height:32px;
    }
</style>

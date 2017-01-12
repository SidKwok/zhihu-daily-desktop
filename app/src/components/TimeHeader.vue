<template lang="html">
    <p class="time-header">
        今日要闻
    </p>
</template>

<script>
export default {
    name: 'time-header'
};
</script>

<style lang="less" scoped>
    .time-header {
        position: absolute;
        width: 100%;
        height: 40px;
        text-align: center;
        line-height: 40px;
        color: #fff;
        z-index: 999;
    }
</style>

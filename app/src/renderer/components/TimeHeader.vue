<template lang="html">
    <div class="time-header">
        <div class="layer"
            :style="{opacity: scrollTop / 319}"></div>
        <span>{{title}}</span>
    </div>
</template>

<script>
export default {
    name: 'time-header',
    props: {
        title: {
            type: String,
            default: '今日要闻'
        },
        scrollTop: {
            type: Number,
            default: 0
        }
    }
};
</script>

<style lang="less" scoped>
    .night .time-header {
        .layer {
            background-color: #444;
        }
    }
    .time-header {
        position: fixed;
        left: 0;
        width: 100%;
        padding-left: 80px;
        height: 36px;
        text-align: center;
        line-height: 36px;
        color: #fff;
        z-index: 999;

        -webkit-user-select: none;
        -webkit-app-region: drag;

        .layer {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: #0F88EB;
            box-shadow: 0 2px 2px rgba(0, 0, 0, .5);
            opacity: 0;
            z-index: -1;
            transition: .3s;
        }

        span {
            z-index: 1;
        }
    }
</style>

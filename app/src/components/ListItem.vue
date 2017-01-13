<template lang="html">
    <div class="list-item">
        <p>{{title}}</p>
        <div class="img-box"
            :style="backgroundStyle"></div>
    </div>
</template>

<script>
export default {
    name: 'list-item',
    props: {
        title: {
            type: String,
            default: ''
        },
        img: {
            type: String,
            default: ''
        }
    },
    computed: {
        backgroundStyle() {
            return {
                backgroundImage: `url(${this.img})`,
                backgroundPosition: 'center',
                backgroundSize: '100%'
            };
        }
    }
};
</script>

<style lang="less" scoped>
    .list-item {
        height: 88px;
        border-bottom: 1px solid #ddd;
        position: relative;
        padding: 12px 8px;
        p {
            font-size: 16px;
            color: #444;
            margin-right: 104px;
            height: 64px;
        }

        .img-box {
            position: absolute;
            width: 80px;
            height: 64px;
            border-radius: 2px;
            top: 12px;
            right: 8px;
        }
    }
</style>

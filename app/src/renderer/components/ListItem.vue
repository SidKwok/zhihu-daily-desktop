<template lang="html">
    <router-link tag="div"
        class="list-item"
        :to="{name: 'article-page', params: {id: id}}">
        <p>{{title}}</p>
        <div class="img-box"
            :style="backgroundStyle"></div>
    </router-link>
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
        },
        id: {
            required: true
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
    .night .list-item {
        border-color: #444;

        p {
            color: #888;
        }
    }
    .list-item {
        height: 88px;
        border-bottom: 1px solid #ddd;
        position: relative;
        padding: 12px 8px;
        cursor: pointer;
        transition: .3s;
        p {
            font-size: 16px;
            color: #444;
            margin-right: 104px;
            height: 64px;
            transition: .3s;
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

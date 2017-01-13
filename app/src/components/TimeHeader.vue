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
    data() {
        return {
            title: '今日要闻',
            scrollTop: 0
        };
    },
    created() {
        this.$nextTick(() => {
            window.addEventListener('scroll', () => {
                const top = document.body.scrollTop;
                if (this.scrollTop !== top || top > 319) {
                    this.scrollTop = document.body.scrollTop;
                }
                const headers = document.querySelectorAll('[data-date]');
                let last = '';
                for (let i = 0; i < headers.length; i++) {
                    if (headers[i].offsetTop > (top + 32)) {
                        if (!last) {
                            last = headers[i].dataset.date;
                            break;
                        }
                    } else {
                        last = headers[i].dataset.date;
                    }
                }
                if (last && last !== '0') {
                    this.title = last;
                } else {
                    this.title = '今日要闻';
                }
            });
        });
    }
};
</script>

<style lang="less" scoped>
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
        border-top: 1px solid #ddd;

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
        }

        span {
            z-index: 1;
        }
    }
</style>

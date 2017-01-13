<template lang="html">
    <div class="list-page">
        <time-header
            :title="title"
            :scroll-top="scrollTop"/>
        <top-slides />
        <list-container
            v-for="(container, index) of list"
            :has-header="index !== 0"
            :date="container.date">
            <list-item
                v-for="item of container.stories"
                :title="item.title"
                :img="item.images"
                :id="item.id"
             />
        </list-container>
    </div>
</template>

<script>
import TimeHeader from 'components/TimeHeader';
import TopSlides from 'components/TopSlides';
import ListContainer from 'components/ListContainer';
import ListItem from 'components/ListItem';
import {mapGetters, mapActions} from 'vuex';
import {formatStoriesDate} from 'utils';
export default {
    name: 'list-page',
    data() {
        return {
            title: '今日要闻',
            scrollTop: 0
        };
    },
    components: {
        TimeHeader,
        TopSlides,
        ListContainer,
        ListItem
    },
    computed: {
        ...mapGetters(['list'])
    },
    methods: {
        ...mapActions([
            'startLoading',
            'doneLoading',
            'fetchSlides',
            'fetchStories'
        ]),
        fetchBeforeStories() {
            if (!this.isLoading) {
                const date = this.list[this.list.length - 1].date;
                let newDate = new Date();
                newDate.setFullYear(Number(date.slice(0, 4)));
                newDate.setMonth(Number(date.slice(4, 6)) - 1);
                newDate.setDate(Number(date.slice(6, 8)));
                let before = formatStoriesDate(new Date(newDate - 2 * 24 * 60 * 60 * 1000));
                this.startLoading();
                this.fetchStories(before)
                    .then(() => {
                        this.doneLoading();
                    });
            }
        },
        scrollEvent() {
            const top = document.body.scrollTop;
            const clientHeight = document.body.clientHeight;
            const scrollHeight = document.body.scrollHeight;
            if (top + clientHeight === scrollHeight) {
                this.fetchBeforeStories();
            }
            if (this.scrollTop !== top || top > 319) {
                this.scrollTop = top;
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
        }
    },
    created() {
        let today = formatStoriesDate(new Date());
        this.startLoading();
        Promise.all([
            this.fetchSlides(),
            this.fetchStories(today)
        ])
        .then(() => {
            this.doneLoading();
        });
    },
    activated() {
        this.title = '今日要闻';
        this.scrollTop = 0;
        this.$nextTick(() => {
            window.addEventListener('scroll', this.scrollEvent, false);
        });
    },
    deactivated() {
        this.$nextTick(() => {
            window.removeEventListener('scroll', this.scrollEvent, false);
        });
    }
};
</script>

<style lang="less" scoped>
    .list-page {
        position: relative;
    }
</style>

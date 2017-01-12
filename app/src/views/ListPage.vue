<template lang="html">
    <div class="list-page">
        <time-header />
        <top-slides />
        <list-container
            v-for="(container, index) of list"
            :has-header="index !== 0"
            :date="container.date">
            <list-item
                v-for="item of container.stories"
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
            'fetchSlides',
            'fetchStories'
        ])
    },
    created() {
        let today = formatStoriesDate(new Date());
        this.fetchSlides();
        this.fetchStories(today);
        this.fetchStories(today);
    }
};
</script>

<style lang="less" scoped>
    .list-page {
        position: relative;
    }
</style>

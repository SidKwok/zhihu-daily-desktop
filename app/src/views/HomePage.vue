<template>
    <div :class="['app', isNight ? 'night' : '']">
        <left-menu />
        <div class="page">
            <keep-alive>
                <router-view />
            </keep-alive>
        </div>
    </div>
</template>

<script>
import LeftMenu from 'components/LeftMenu';
import {mapGetters} from 'vuex';
export default {
    name: 'home-page',
    components: {
        LeftMenu
    },
    computed: {
        ...mapGetters(['isNight'])
    }
};
</script>

<style lang="less" scoped>
    .app {
        height: 100%;
    }
    .page {
        height: 100%;
        margin-left: 80px;
        transition: .3s;
    }
    .night .page {
        background-color: #343434;
    }
</style>

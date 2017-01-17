<template>
    <div :class="['app', isNight ? 'night' : '']">
        <left-menu />
        <div class="page">
            <transition :name="'slide-left'" mode="out-in">
                <keep-alive>
                    <router-view />
                </keep-alive>
            </transition>
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
        ...mapGetters(['isNight']),
        transitionType() {
            const isListPage = this.$route.name === 'list-page';
            return isListPage ? 'slide-right' : 'slide-left';
        }
    }
};
</script>

<style scoped>
    .app {
        height: 100%;
    }
    .page {
        height: 100%;
        margin-left: 80px;
    }
    /*.slide-left-enter-active,
    .slide-left-leave-active {
        transition: transform .3s;
    }
    .slide-left-enter,
    .slide-left-leave-active {
        transform: translateX(-100%);
    }

    .slide-right-enter-active,
    .slide-right-leave-active {
        transition: transform .3s;
    }
    .slide-right-enter,
    .slide-right-leave-active {
        transform: translateX(100%);
    }*/
</style>

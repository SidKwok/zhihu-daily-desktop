<template>
    <div class="app">
        <left-menu />
        <div class="page">
            <router-view />
        </div>
    </div>
</template>

<script>
import LeftMenu from 'components/LeftMenu';
export default {
    name: 'home-page',
    components: {
        LeftMenu
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
</style>

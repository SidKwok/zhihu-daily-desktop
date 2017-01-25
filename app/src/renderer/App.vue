<template>
    <div class="main">
        <router-view></router-view>
    </div>
</template>

<script>
import store from 'state/store';

export default {
    store
};
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body,
    .main { height: 100%; }

    html {
        font-family: "PingFang SC","Microsoft Yahei",Arial,sans-serif;
        -webkit-font-smoothing: antialiased;
    }
    body::-webkit-scrollbar {
        background: transparent;
        width: 0;
    }
</style>

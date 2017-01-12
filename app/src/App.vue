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
    }

    html,
    body,
    .main { height: 100%; }

    html {
        font-family: "PingFang SC","Microsoft Yahei",Arial,sans-serif;
        -webkit-font-smoothing: antialiased;
    }
/*
    body {
        align-items: center;
        background:
            radial-gradient(
                ellipse at center,
                rgba(255, 255, 255, 1) 0%,
                rgba(229, 229, 229, .85) 100%
            );
        background-position: center;
        display: flex;
        justify-content: center;
        text-align: center;
  }*/
</style>

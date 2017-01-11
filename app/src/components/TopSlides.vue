<template lang="html">
    <div class="top-slides">
        <button @click="fetchSlides" >fetchSlides</button>
        <button @click="fetchStories(20170113)" >fetchStories</button>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
// const ipc = require('electron').ipcRenderer;

export default {
    name: 'top-slides',
    methods: {
        ...mapActions([
            'fetchSlides',
            'fetchStories'
        ])
    }
};
</script>

<style lang="less" scoped>
    @split-line: 1px solid #ddd;
    .top-slides {
        width: 100%;
        height: 231px;
        border-bottom: @split-line;
    }
</style>

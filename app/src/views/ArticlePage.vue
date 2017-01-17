<template lang="html">
    <div class="article-page">
        <div v-html="body" ref="body"></div>
        <link rel="stylesheet" :href="css">
    </div>
</template>

<script>
import {ipcRenderer} from 'electron';
export default {
    data() {
        return {
            body: '<span>hey</span>',
            css: ''
        };
    },
    watch: {
        $route(route) {
            if (route.name === 'article-page') {
                this.fetchArticle()
                    .then(article => {
                        const {body, css} = article;
                        let imgUrls = body
                            .match(/<img.*?(?:>|\/>)/gi)
                            .map(e => ({image: e.match(/src=['"]?([^'"]*)['"]?/i)[1]}));
                        ipcRenderer.once('getImgs', (event, imgs) => {
                            const imgTags = Array.from(this.$refs.body.querySelectorAll('img'));
                            imgTags.forEach((img, index) => {
                                img.src = imgs[index].image;
                            });
                        });
                        ipcRenderer.send('covertImgs', imgUrls);
                        this.body = body;
                        this.css = css;
                    });
            }
        }
    },
    methods: {
        fetchArticle() {
            return new Promise(resolve => {
                ipcRenderer.once('getArticle', (event, article) => {
                    resolve(article);
                });
                ipcRenderer.send('fetchArticle', this.$route.params.id);
            });
        }
    }
};
</script>

<style lang="less" scoped>
</style>

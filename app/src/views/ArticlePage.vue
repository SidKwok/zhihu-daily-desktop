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
                        const {body, css, title, image} = article;
                        let imgUrls = body
                            .match(/<img.*?(?:>|\/>)/gi)
                            .map(e => ({image: e.match(/src=['"]?([^'"]*)['"]?/i)[1]}));
                        imgUrls.unshift({image});
                        ipcRenderer.once('getImgs', (event, imgs) => {
                            const header = this.$refs.body.querySelector('.headline');
                            header.innerHTML
                                = `<div class="img-wrap" style="background-image: url(${imgs[0].image});">
                                       <div class="img-mask"></div>
                                       <h1 class="headline-title">${title}</h1>
                                       <span class="img-source">图片：${article.image_source}</span>
                                   </div>`;
                            const imgTags = Array.from(this.$refs.body.querySelectorAll('img'));
                            imgTags.forEach((img, index) => {
                                img.src = imgs.slice(1)[index].image;
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

<style lang="less">
.headline {
    height: 231px;
    position: relative;

    h1 {
        font-size: 18px;
        font-weight: 500;
        text-shadow: 0 1px 2px #000;
        color: #fff;
        height: 48px;
        padding: 0 16px;
        margin: 0;
        position: absolute;
        bottom: 32px;
    }

    .img-mask {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: .2;
        cursor: pointer;
    }

    .img-source {
        position: absolute;
        bottom: 10px;
        z-index: 1;
        font-size: 12px;
        color: rgba(255,255,255,.6);
        right: 40px;
        text-shadow: 0px 1px 2px rgba(0,0,0,.3);
    }

    .img-wrap {
        height: 100%;
        background-position: center;
        background-size: 100%;
    }
}
</style>

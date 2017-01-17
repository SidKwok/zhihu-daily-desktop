<template lang="html">
    <div class="top-slides">
        <ul class="slides"
            :style="[
                {width: slides.length * 100 + '%'},
                slidesPos
            ]">
            <li :style="[
                {width: 1 / slides.length * 100 + '%'},
                backgroundStyle(slide.image)]"
                v-for="slide of slides">
                <router-link tag="div"
                    class="gray-layer"
                    :to="{name: 'article-page', params: {id: slide.id}}"
                    />
                <p>{{slide.title}}</p>
            </li>
        </ul>
        <ul class="dots">
            <li v-for="(dot, index) in slides.length">
                <a href="javascript: void(0);"
                    :class="currentSlide === index ? 'active' : ''"
                    @click="switchSlide(index)"></a>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name: 'top-slides',
    data() {
        return {
            currentSlide: 0
        };
    },
    computed: {
        ...mapGetters(['slides']),
        slidesPos() {
            let percentage = this.currentSlide / this.slides.length * 100;
            return {
                transform: `translateX(-${percentage}%)`
            };
        }
    },
    methods: {
        backgroundStyle(url) {
            return {
                backgroundImage: `url(${url})`,
                backgroundPosition: 'center',
                backgroundSize: '100%'
            };
        },
        switchSlide(index) {
            this.currentSlide = index;
        }
    }
};
</script>

<style lang="less" scoped>
    @split-line: 1px solid #ddd;
    .night .top-slides {
        border-color: #444;
    }
    .top-slides {
        width: 100%;
        height: 231px;
        border-bottom: @split-line;
        position: relative;
        overflow: hidden;

        ul {
            position: absolute;

            li {
                list-style: none;
                float: left;
            }
        }

        .slides {
            height: 100%;
            position: absolute;
            transition: transform .3s;

            li {
                width: 100%;
                height: 100%;
                position: relative;
                // filter: brightness(.8);

                .gray-layer {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-color: #000;
                    opacity: .2;
                    cursor: pointer;
                }

                p {
                    font-size: 18px;
                    font-weight: 500;
                    text-shadow: 0 1px 2px #000;
                    color: #fff;
                    height: 48px;
                    padding: 0 16px;
                    position: absolute;
                    bottom: 32px;
                }
            }
        }

        .dots {
            position: absolute;
            bottom: 12px;
            width: 100%;
            height: 12px;
            display: flex;
            justify-content: center;
            align-items: center;

            li {
                width: 16px;
                height: 16px;
                margin: 0 4px;
                display: flex;
                justify-content: center;
                align-items: center;

                &:hover > a,
                .active {
                    width: 16px;
                    height: 16px;
                }
                .active {
                    opacity: 1;
                }

                a {
                    width: 8px;
                    height: 8px;
                    border-radius: 100%;
                    background-color: #fff;
                    opacity: .6;
                    transition: .1s;
                }
            }
        }
    }
</style>

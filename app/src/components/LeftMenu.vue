<template lang="html">
    <div class="left-menu">
        <div class="win-panel"></div>
        <div class="back-tab" @click="fallBack">
            <svg t="1484131196944" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2503" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32">
                <path d="M732.509803 1009.849857l10.397732-23.118774L312.342825 513.260671 742.907535 45.550559 732.509803 16.672507 281.090423 513.260671 732.509803 1009.849857z" p-id="2504"
                    :fill="fillColor"></path>
            </svg>
        </div>
        <div class="refresh-tab" @click="refresh">
            <svg class="rotate" :style="{animationPlayState: isLoading ? 'running' : 'paused'}"
                t="1484131255387" viewBox="0 0 1042 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3551" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32">
                <path d="M520.030168 1007.816561c-154.856794 0-293.377926-66.0588-388.633091-170.135039-2.083392 6.137886-2.048062 11.39174-2.048062 11.39174l0 154.283867c0 0-31.845241 4.459433-31.845241-30.854559 0.003117-31.825182 0-154.286887 0-154.286887s0.003117-30.854559 31.845241-30.851538c31.842123-0.003021 126.385506-0.003021 159.222045-0.003021 36.451562 0 31.845241 30.854559 31.845241 30.854559s-126.388623 0-159.225162 0.003021c-1.098327 0-1.865181 0.286959-2.889732 0.355426 89.296976 96.281043 218.268796 157.335693 362.231686 157.480682 269.105633 0.264807 487.033605-210.898216 486.754088-471.657695-0.05819-54.415342-10.091721-106.472592-27.626502-155.134672l28.994994-16.471405c19.963153 53.499089 31.412975 110.945114 31.412975 171.117745C1040.069685 782.206952 807.240007 1007.816561 520.030168 1007.816561zM910.717555 220.45745c-31.845241 0-126.388623 0-159.225162 0-36.448445 0-31.845241-30.851538-31.845241-30.851538s126.388623 0 159.225162-0.003021c1.134695 0 1.927527-0.29602 2.980133-0.365495C792.549238 92.931183 663.511955 31.907746 519.530361 31.765777 250.423689 31.494928 32.499873 242.660971 32.776273 503.420451c0.048838 45.181328 7.036772 88.731524 19.30956 130.114933l-29.84082 15.954879c-14.343711-46.11369-22.245013-94.935863-22.245013-145.582487 0-278.299174 232.823444-503.904756 520.030167-503.907776 154.853677 0.003021 293.388317 66.046717 388.64556 170.118929 2.07404-6.131845 2.040789-11.372609 2.040789-11.372609L910.716516 4.46044c0 0 31.845241-4.459433 31.845241 30.857579-0.006235 31.825182 0 154.286887 0 154.286887S942.556561 220.45745 910.717555 220.45745z" p-id="3552"
                :fill="isNight ? '#e9e9e9' : '#262626'"></path>
            </svg>
        </div>
        <div class="night-tab" @click="toggleNight">
            <svg t="1484131362479" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4353" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32">
                <path d="M588.87332 118.973672c80.915891 18.036795 154.721851 58.112536 212.753545 116.382661 74.769914 75.077929 115.947755 173.260066 115.947755 276.461519 0 54.328349-11.192923 107.027595-33.265638 156.63441-21.392216 48.075949-52.063773 91.294262-91.160209 128.454604-39.241746 37.297464-84.968184 66.593697-135.912459 87.073124-52.851719 21.24793-109.037369 32.020274-166.995385 32.020274-83.835384 0-164.855652-23.180955-234.301304-67.037812-55.153134-34.831296-100.847849-81.128739-133.913942-135.349641 9.553587 0.685615 18.698874 1.01819 27.669176 1.01819 257.298064 0 466.62558-199.893656 466.62558-445.597661C616.319415 217.829144 606.949001 167.019944 588.87332 118.973672M516.640182 64.920592l-2.078335 2.929726c1.414209 0.116657 2.869351 0.116657 4.28356 0.197498C518.179234 66.938552 517.305331 65.989947 516.640182 64.920592L516.640182 64.920592zM518.844384 68.046792c35.796274 59.249429 56.542784 127.763872 56.542784 200.98757 0 223.466538-190.582593 404.665413-425.693332 404.665413-22.409382 0-44.152593-2.37714-65.606207-5.700839l-18.916838 26.439162c73.464175 154.36267 235.276515 262.495436 425.069115 262.495436 258.598686 0 468.26594-199.245903 468.26594-445.11466C958.506868 275.130198 764.056178 82.176604 518.844384 68.046792L518.844384 68.046792z" p-id="4354"
                    :fill="isNight ? '#e9e9e9' : '#262626'"></path>
            </svg>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
    name: 'left-menu',
    data() {
        return {
            activeDayColor: '#ddd',
            deactiveDayColor: '#262626',
            activeNightColor: '#444',
            deactiveNightColor: '#e9e9e9'
        };
    },
    computed: {
        ...mapGetters([
            'isLoading',
            'isNight'
        ]),
        fillColor() {
            const type = this.isNight ? 'Night' : 'Day';
            return this.isListPage
                ? this[`active${type}Color`]
                : this[`deactive${type}Color`];
        },
        isListPage() {
            return this.$route.name === 'list-page';
        }
    },
    methods: {
        ...mapActions([
            'startLoading',
            'doneLoading',
            'updateNewest',
            'toggleNight'
        ]),
        refresh() {
            this.startLoading();
            this.updateNewest()
                .then(() => {
                    this.doneLoading();
                });
        },
        fallBack() {
            if (!this.isListPage) {
                this.$router.push({name: 'list-page'});
            }
        },
        test() {
            if (this.isLoading) {
                this.doneLoading();
            } else {
                this.startLoading();
            }
        }
    }
};
</script>

<style lang="less" scoped>
    @split-line: 1px solid #ddd;
    .night .left-menu {
        background-color: #1f1f1f;
        border-color: #444;

        .win-panel {
            border-color: #444;
        }

        .back-tab,
        .refresh-tab,
        .night-tab {
            border-color: #444;
        }
    }
    .left-menu {
        position: fixed;
        width: 80px;
        height: 100%;
        z-index: 999;
        -webkit-user-select: none;
        -webkit-app-region: drag;
        border-right: @split-line;
        background-color: #fafafa;
        height: 100%;
        transition: .3s;

        .win-panel {
            width: 100%;
            height: 36px;
            border-bottom: @split-line;
            transition: .3s;
        }

        .back-tab,
        .refresh-tab,
        .night-tab {
            width: 100%;
            border-bottom: @split-line;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: .3s;
        }
        .back-tab {
            height: 50px;
        }
        .refresh-tab,
        .night-tab {
            height: 72px;
        }

        .rotate {
            animation: linear rotate 1s infinite;
            animation-play-state: paused;
        }
        @keyframes rotate {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }

        svg {
            cursor: pointer;
        }
    }
</style>

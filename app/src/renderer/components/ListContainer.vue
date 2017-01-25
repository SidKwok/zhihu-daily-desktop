<template lang="html">
    <div class="list-container"
        :data-date="hasHeader ? title : '0'">
        <p class="header" v-if="hasHeader">
            {{title}}
        </p>
        <div class="list">
            <slot></slot>
        </div>
    </div>
</template>

<script>
const weekdays = [
    '星期日',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六'
];
export default {
    name: 'list-container',
    props: {
        hasHeader: {
            type: Boolean,
            default: false
        },
        date: {
            type: String,
            default: '20130113'
        }
    },
    computed: {
        title() {
            let date = this.date;
            if (date) {
                let year = Number(date.slice(0, 4));
                let tmpMonth = Number(date.slice(4, 6)) + '';
                let month = tmpMonth.length === 2 ? tmpMonth : ('0' + tmpMonth);
                let tmpDay = Number(date.slice(6, 8)) - 1 + '';
                let day = tmpDay.length === 2 ? tmpDay : ('0' + tmpDay);
                let realDate = new Date();
                realDate.setFullYear(year);
                realDate.setMonth(Number(month) - 1);
                realDate.setDate(day);
                return `${month}月${day}日 ${weekdays[realDate.getDay()]}`;
            } else {
                return '';
            }
        }
    }
};
</script>

<style lang="less" scoped>
    .night .list-container {
        background-color: #343434;

        .header {
            background-color: #444;
        }
    }
    .list-container {
        min-height: 32px;
        transition: .3s;

        .header {
            height: 32px;
            line-height: 32px;
            text-align: center;
            font-size: 14px;
            background-color: #0F88EB;
            color: #fff;
            transition: .3s;
        }
    }
</style>

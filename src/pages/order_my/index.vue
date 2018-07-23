<template>
    <div>
        <div class="tab_top">
        <zanTab v-bind="tab" :componentId="'tab'" @change="handleZanTabChange"/>   
        </div>
        <div class="order-list">
            <div v-if="tab.selectedId === 'all'">
                <block v-for="num in 10" :key="num">
                <orderItem></orderItem>
                </block>
            </div>
            <div v-else-if="tab.selectedId === 'obligation'">
                <div class="zan-btn">待付款</div>
            </div>
            <div v-else-if="tab.selectedId === 'overhang'">
                <div class="zan-btn">待发货</div>
            </div>
            <div v-else-if="tab.selectedId === 'wait_receiving'">
                <div class="zan-btn">待收货</div>
            </div>
            <div v-else>
                <div class="zan-btn zan-btn--loading">评价</div>
            </div>
        </div>
    </div>
</template>

<script>
import zanTab from '@/components/mpvue/tab'
import orderItem from '@/components/mpvue/order/order'
export default {
    data () {
        return {
            tab: {
                list: [{
                    id: 'all',
                    title: '全部'
                }, {
                    id: 'obligation',
                    title: '待付款'
                }, {
                    id: 'overhang',
                    title: '待发货'
                }, {
                    id: 'wait_receiving',
                    title: '待收货'
                }, {
                    id: 'evaluate',
                    title: '评价'
                }],
                scroll: false,
                selectedId: 'all'
            }
        }
    },
    components: {
        zanTab,
        orderItem
    },
    methods: {
        handleZanTabChange (e) {
            console.log(e)
            const {componentId, selectedId} = e
            this[componentId].selectedId = selectedId
        }
    },
    onShow () {
        this.tab.selectedId = this.$root.$mp.query.tag
        console.log(this.tab.selectedId)
    }
}
</script>

<style lang="less" scoped>
@import url("~@/styles/color.less");
.tab_top {
position: fixed;
top: 0;
left: 0;
right: 0;
overflow: hidden;
z-index: 99;
}
.order-list{
margin-top: 45px;
}
</style>
    
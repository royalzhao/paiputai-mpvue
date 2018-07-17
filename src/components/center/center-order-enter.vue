<template>
    <div class="zan-panel">
        <div class="zan-cell zan-cell--access">
        <!-- <div class="zan-cell__icon zan-icon zan-icon-checked" style="color:#38f;"></div> -->
        <div class="zan-cell__bd zan-font-16 zan-font-bold">全部订单</div>
        <div class="zan-cell__ft" @click="handleOrderEnter('all')">查看全部订单</div>
        </div>
        <div class="zan-cell">
        <div class="enter" @click="handleOrderEnter('obligation')">
            <i class=" zan-icon zan-icon-pending-payment"></i>
            <span class="zan-c-gray-darker" >待付款</span>
        </div>
        <div class="enter" @click="handleOrderEnter('overhang')">
            <i class="zan-icon zan-icon-pending-deliver"></i>
            <span class="zan-c-gray-darker" >待发货</span>
        </div>
        <div class="enter">
            <i class="zan-icon zan-icon-point-gift"></i>
            <span class="zan-c-gray-darker" @click="handleOrderEnter('wait_receiving')">待收货</span>
        </div>
        <div class="enter"  @click="handleOrderEnter('evaluate')">
            <i class="zan-icon zan-icon-pending-evaluate"></i>
            <span class="zan-c-gray-darker">待评价</span>
        </div>
        <div class="enter">
            <i class="zan-icon zan-icon-after-sale"></i>
            <span class="zan-c-gray-darker" >退款/售后</span>
        </div>
        </div>
    </div>
</template>

<script>
export default {
name: 'CenterEnter',
    methods: {
        handleOrderEnter (tag) {
            wx.navigateTo({
                url: `/pages/order_my/main?tag=${tag}`
            })
        }
    }
}
</script>

<style lang="less" scoped>
@import url("~@/styles/color.less");
.zan-cell {
.enter{
    width: 20vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    i{
    font-size: 24px;
    color: @minColor;
    font-weight: 800;
    }
}
}
</style>
    
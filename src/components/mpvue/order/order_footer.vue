<template>
<div class="zan-cell order-cost">
  <div class="zan-cell__bd"></div>
  <div class="zan-cell__ft">
    <block v-if="orderType === 0">
      <button class="zan-btn zan-btn--small">取消订单</button>
      <button class="zan-btn zan-btn--small zan-btn--danger ">立即付款</button>
    </block>
    <block v-if="orderType === 1">
      <button class="zan-btn zan-btn--small">提醒发货</button>
      <button class="zan-btn zan-btn--small">取消订单</button>
      <button class="zan-btn zan-btn--small">查看物流</button>
    </block>
    <block v-if="orderType === 2">
      <button class="zan-btn zan-btn--small">查看物流</button>
      <button class="zan-btn zan-btn--small">取消订单</button>
      <button class="zan-btn zan-btn--small zan-btn--danger">确认收货</button>
    </block>
    <block v-if="orderType === 3">
      <button class="zan-btn zan-btn--small">再次购买</button>
      <button class="zan-btn zan-btn--small">查看物流</button>
      <button class="zan-btn zan-btn--small">评价</button>
    </block>         
  </div>
</div>
</template>
<script>
export default {
  name: 'OrderFooter',
  props: {
    orderType: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="less" scoped>

</style>

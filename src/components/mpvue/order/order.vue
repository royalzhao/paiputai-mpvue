<template>
  <div class="order-item zan-panel">
    <OrderTitle></OrderTitle>
    <OrderCentre></OrderCentre>
    <OrderFooter></OrderFooter>
  </div>
</template>

<script>
import OrderTitle from './order_title'
import OrderCentre from './order_centre'
import OrderFooter from './order_footer'
export default {
  components: {
    OrderTitle,
    OrderCentre,
    OrderFooter
  }
}
</script>

<style>

</style>

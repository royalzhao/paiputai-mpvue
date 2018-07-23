<template>
    <div class="zan-panel">
      <div class="zan-panel-title zan-c-black zan-font-14">必备工具</div>
      <div class="zan-cell instrument">
        <div class="enter">
          <i class="zan-icon zan-icon-add2"></i>
          <span class="zan-c-gray-darker">系统通知</span>
        </div>
        
        <div class="enter">
          <i class="zan-icon zan-icon-add2"></i>
          <span class="zan-c-gray-darker">优惠券</span>
        </div>
        <div class="enter">
          <i class="zan-icon zan-icon-add2"></i>
          <span class="zan-c-gray-darker">积分</span>
        </div>
        <div class="enter">
          <i class="zan-icon zan-icon-add2"></i>
          <span class="zan-c-gray-darker">中奖记录</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
name: 'CenterEssential'
}
</script>

<style lang="less" scoped>
@import url("~@/styles/color.less");
.instrument{
justify-content: space-between;
}
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
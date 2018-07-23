<template>
    <div class="zan-panel">
      <div class="zan-panel-title zan-c-black zan-font-14">基本工具</div>
      <div class="zan-cell zan-cell--access">
        <div class="zan-cell__icon zan-icon zan-icon-debit-pay zan-font-18 zan-c-gray" ></div>
        <div class="zan-cell__bd">购物车</div>
        <div class="zan-cell__ft"></div>
      </div>
      <div class="zan-cell zan-cell--access">
        <div class="zan-cell__icon zan-icon zan-icon-debit-pay zan-font-18 zan-c-gray"></div>
        <div class="zan-cell__bd">客服</div>
        <div class="zan-cell__ft"></div>
      </div>
      <div class="zan-cell zan-cell--access">
        <div class="zan-cell__icon zan-icon zan-icon-debit-pay zan-font-18 zan-c-gray"></div>
        <div class="zan-cell__bd">地址管理</div>
        <div class="zan-cell__ft"></div>
      </div>
      <div class="zan-cell zan-cell--access">
        <div class="zan-cell__icon zan-icon zan-icon-debit-pay zan-font-18 zan-c-gray"></div>
        <div class="zan-cell__bd">设置</div>
        <div class="zan-cell__ft"></div>
      </div>
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'CenterBasic'
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
  
<template>
  <block>
    <div class="zan-cell order-info">
      <div class="zan-cell__icon">
        <img src="http://p5za7ep72.bkt.clouddn.com/TB2wGAAueOSBuNjy0FdXXbDnVXa_%21%213066239737-0-item_pic.jpg_150x150Q60s150.jpg" alt="">
      </div>
      <div class="zan-cell__bd">
        <div class="zan-cell__text">2件装夏季潮流青年圆领T恤纯色V领半袖体恤打底...</div>
        <div class="zan-cell__desc">
          <span>颜色：自由组合；尺码170/M</span>
          <span class="zan-tag zan-tag--danger zan-tag--plain">七天退换</span>
        </div>
      </div>
      <div class="zan-cell__ft">
        <span class="money">￥66</span>
        <span>x1</span>
      </div>
    </div>
    <div class="zan-cell order-cost">
      <div class="zan-cell__bd"></div>
      <div class="zan-cell__ft">
        <span class="zan-font-12">共 1 件商品</span>
        <span>合计:<em>￥66</em></span>
        <span class="zan-font-12">(含运费￥0.00)</span>          
      </div>
    </div>
  </block>
</template>

<script>
export default {
  name: 'OrderCentre'
}
</script>

<style lang="less" scoped>
@import url("~@/styles/color.less");

.order-info{
  .zan-cell__text{
    line-height: 18px;
  }
  .zan-cell__icon{
    width: 45px;
    height: 45px; 
  }
  .zan-cell__desc{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    span{
      margin: 2px 0;
    }
  }
  .zan-cell__ft{
     display: flex;
    flex-direction: column;
    .money{
      color: @minColor;
      font-weight: bold;
    }
  }
  img{
    width: 100%;
    height: 100%;
  } 
}
.order-cost{
  .zan-cell__ft{
    display: flex;
    align-items: center;
    span{
      margin: 0 2px;
    }
    em{
      display: inline-block;
    }
  }
}
</style>

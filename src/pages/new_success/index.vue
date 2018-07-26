<template>
    <div class="order-type">
        <div class="order-cell border_bottom">
            <i :style="{color: color.affirm }" class="item-icon zan-icon zan-icon-checked"></i>
            <h4>支付订单成功</h4>
            <span @click="complete">完成</span>
        </div>
        <!-- <div class="order-item">
            <p :style="{color: color.cancel }" class="zan-font-20 zan-font-bold">取消订单成功</p>
            <i :style="{color: color.cancel }" class="item-icon zan-icon zan-icon-checked"></i>
            <em class="zan-font-12 zan-c-gray-dark">注意：平台及销售商不会以订单异常、系统升级为由要求您点击任何网址链接进行退款操作</em>
        </div> -->
        <div class="store">
        <div class="zan-panel">
            <div class="zan-cell">
            <div class="zan-cell__icon">
            <img src="http://p5za7ep72.bkt.clouddn.com/213.png" alt="" mode="aspectFill">
            </div>
            <div class="zan-cell__bd">
            <div class="zan-cell__text">精品女装专营店</div>
            <div class="zan-cell__desc">
                <i class="zan-tag zan-tag--danger">平台自营</i>
                <i class="zan-c-red">10分</i>
            </div>
            </div>
            <div class="zan-cell__ft">
            <button class="zan-btn zan-btn--small zan-btn--danger">
                <i class="zan-icon zan-icon-like-o"></i>
                关注
            </button>
            </div>
        </div>
        </div>
        </div>
        <p class="recommend-title zan-font-16 zan-c-gray-dark">——为你推荐——</p>
        <div class="commodity">
        <block v-for="num in 10" :key="num">
            <Commodity></Commodity>
        </block>
        </div>
    </div>
</template>

<script>
import Commodity from '@/components/commodity'
export default {
    data () {
        return {
            color: {
                cancel: '#e82050',
                affirm: '#8bc34a',
                evaluate: '#ff6c02'
            }
        }
    },
    methods:{
        complete(){
            wx.switchTab({
                url: '/pages/me/main'
            })
        }
    },
    components: {
        Commodity
    }
}
</script>

<style lang="less" scoped>
@import url("~@/styles/color.less");
@import url("~@/styles/border.less");
.order-cell {
position: relative;
background: #ffffff;
display: flex;
height: 45px;
align-items: center;
justify-content: space-between;
padding: 0 10px;
i{
    width: 2em;
}
h4{
    font-size: 16px;
}
em{
    color: @secondaryFontColor;
}
}
.order-item{
background: #ffffff;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
padding: 20px 10px;
.item-icon{
    font-size: 120px;
    // margin: -10px;
}
}
.store{
.zan-cell__icon{
    img{
    width: 50px;
    height: 50px;
    }
}
.zan-cell__desc{
    display: flex;
    i:last-child{
    margin: 0 10px;
    }
}
}
.commodity{
display: flex;
flex-wrap: wrap
}
.recommend-title{
height: 40px;
line-height: 40px;
text-align: center;
}
</style>
  
<template>
    <div class="new-order">
        <div class="zan-panel order-adderss">
        <div class="zan-cell" >
            <i class="zan-icon zan-icon-location order-location"></i>
            <div class="zan-cell__bd">
            <div class="zan-cell__text cell__bd___top">
                <div class="">收货人：南方先生</div>
                <div class="">18390902222</div>
            </div>
            <div class="zan-cell__desc">
                收货地址：福建省厦门市思明区莲前街道软件园二期望海路
            </div>
            </div>
            <div class="zan-cell__ft"> 
            <i class="zan-icon zan-icon-arrow"></i>
            </div>
        </div>
        </div>
    
        <div class="zan-panel zan-panel--without-border">
        
        </div>
        <div class="zan-panel">
        <div class="shop-name">
            <span class="zan-icon zan-icon-shop-collect"></span>
            德玛西亚旗舰店
        </div>
        <div class="zan-cell commodity-info">
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
        <div class="zan-cell">
            <div class="zan-cell__bd">购买数量</div>
            <div class="zan-cell__ft">
            <stepper
            v-bind="stepper1"
            componentId="stepper1"
            size="small"
            @handleZanStepperChange="handleZanStepperChange"
            >
            </stepper>
            </div>
        </div>
        <div class="zan-cell">
            <div class="zan-cell__bd">配送方式</div>
            <div class="zan-cell__ft">快递 免费<i class="zan-icon zan-icon-arrow"></i></div>
        </div>
        <div class="zan-cell">
            <div class="zan-cell__bd">运费险</div>
            <div class="zan-cell__ft">卖家送，确认收货前退货可赔<i class="zan-icon zan-icon-arrow"></i></div>
        </div>
        
        <div class="zan-cell">
            <div class="zan-cell__bd">买家留言</div>
            <div class="zan-cell__ft">选填<i class="zan-icon zan-icon-arrow"></i></div>
        </div>
        </div>
        <div class="order-footer">
        <div class="footer-left">
            <span>
            共<i>1</i>件
            </span>
            <span class="sum">
            合计:<i>￥66</i>
            </span>
        </div>
        <div class="submit" @click="submit">提交订单</div>
    </div>
</div>
</template>

<script>
import stepper from '@/components/mpvue/stepper'
export default {
    data () {
        return {
            stepper1: {
                stepper: 10,
                min: 1,
                max: 10
            }
        }
    },
    components: {
        stepper
    },
    methods: {
        handleZanStepperChange (e) {
        const {componentId, stepper} = e
        this[componentId].stepper = stepper
        },
        submit(){
            wx.navigateTo({
                url: `../new_success/main`
            })
        }
    }
}
</script>

<style lang="less" scoped>
@import url("~@/styles/color.less");
.order-adderss{
margin:0;
border-bottom: 4px solid #00acc1;
.order-location{
    font-weight: bold;
    font-size: 16px;
    margin-right: 10px;
}
.cell__bd___top,.zan-cell__desc{
    display: flex;
    justify-content: space-between; 
    padding-right: 20px;
}
}
.shop-name{
    padding: 10px;
    span{
    margin-right: 10px;
    font-size: 16px;
    color: @minColor;
    }
}
.commodity-info{
background: #f5f5f5;
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
.order-footer{
display: flex;
justify-content: flex-end;
align-items: center;
height: 45px;
background: #ffffff;
width: 100vw;
position:fixed;
bottom: 0;
.footer-left{
    display: flex;
    span{
    display: flex;
    margin: 0 5px;
    i{
        color: @minColor;
    }
    }
    .sum{
    font-size: 16px;
    i{
        font-weight: bold;
    }
    }
}
.submit{
    width: 30vw;
    background: @bntBackgroundColor;
    color: #fff;
    height: 100%;
    line-height: 45px;
    text-align: center;
}
}
</style>
      
<template>
    <div class="commodity">
        <div class="commodity-img">
        <img src="http://p5za7ep72.bkt.clouddn.com/raw_1526631391.jpeg" mode="widthFix">
        </div>
        <div class="commodity-title">2018春季新款复古绣花网纱刺刺刺刺</div>
        <div class="commodity-footer">
        <div class="commodity-price">
            <span class="zan-font-16 zan-font-bold zan-c-red">￥666&nbsp;</span>
            <span class="zan-font-12 zan-c-gray-dark zan-text-deleted">9999</span>
        </div>
        <i class="zan-icon zan-font-18 zan-c-red zan-icon-shopping-cart"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Commodity'
    }
</script>

<style lang="less" scoped>
    .commodity{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        box-sizing:border-box;
        margin:1vw;
        padding:1.5vw;
        width:48vw;
        background:#ffffff;
        .commodity-img{
            width: 100%;
            height: 100%;
            overflow: hidden;
            img{
            width: 100%;
            }
        }
        .commodity-footer{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
</style>
      
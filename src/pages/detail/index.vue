<template>
    <div class="details">
        <!-- tab -->
        <div class="zanTab">
            <zanTab v-bind="tab1" :componentId="'tab1'" @change="handleZanTabChange"/>
        </div>

        <div class="details-tab-selected">
            <section class="productinfo" :class="{'zoomIn':tab1.selectedId === 'goods'}" v-if="tab1.selectedId === 'goods'">
                <!-- 轮播图 -->
                <scroll :scrollList="slideList"></scroll>
                <!-- info -->
                <div class="details-info">
                    <div class="info-main">
                        <div class="info-title">
                            {{productinfoList.name}}
                        </div>
                        <div class="info-share">
                            <img :src="stare.imgUrl" alt="">
                            <span>{{stare.text}}</span>
                        </div>
                    </div>
                    <div class="info-price">
                        <span>￥{{productinfoList.price}}</span>
                        <badge
                        v-bind="styles"
                        ></badge>
                    </div>
                    <div class="info-footer">
                        <span class="zan-c-gray-dark zan-font-12">快递 0.000</span>
                        <span class="zan-c-gray-dark zan-font-12">月销 9999</span>
                        <span class="zan-c-gray-dark zan-font-12">傲来国花果山</span>
                    </div>
                </div>
                <!-- explain -->
                <div class="details-explain">
                    <span class="zan-font-14">说明:</span>
                    <block v-for="(item, index) in capsuleData" :key="index">
                        <capsule v-bind="item" ></capsule>
                    </block>
                </div>
                <!-- cell -->
                <div class="zan-panel">
                    <div class="zan-cell zan-cell--access"  @click="togglePopup(false)">
                    <div class="zan-cell__bd">选择颜色,尺码</div>
                    <div class="zan-cell__ft"></div>
                    </div>
                </div>
                <div class="zan-panel">
                    <div class="zan-cell zan-cell--access">
                    <div class="zan-cell__bd">产品参数</div>
                    <div class="zan-cell__ft"></div>
                    </div>
                    <div class="zan-cell zan-cell--access">
                    <div class="zan-cell__bd">配送 美国 至 佛山市</div>
                    <div class="zan-cell__ft"></div>
                    </div>
                </div>

            </section>
            <section class="productDetails" :class="{'zoomIn' : tab1.selectedId === 'details'}">
                <block v-for="(item, index) in detailsLsit" :key="index">
                    <img v-if="item.type === 1" :src="item.path" mode="widthFix" />
                    <video 
                    v-else
                    :src="item.path"
                    ></video>
                </block>
            </section>
            <section class="" :class="{'zoomIn' : tab1.selectedId === 'comment'}">
                <div class="zan-panel">
                    <div class="zan-cell">
                    <div class="zan-cell__bd">
                        <div class="zan-cell__user">
                        <span>墨刀用户</span>
                        <span class="comment-time">2017.04.05</span>
                        </div>
                        <div class="zan-cell__text">如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它。</div>
                        <div class="zan-cell__desc">颜色：自由组合；尺码175/M</div>
                    </div>
                    </div>
                </div>
            </section>
        </div>

        <!-- 底部option -->
        <div class="details-action">
            <a class="action-bnt__min">
                <i class="zan-icon zan-icon-chat"></i>
            </a>
            <!-- <a class="action-bnt__min">
                <i class="action_icon"></i>
                <span>进店</span>
            </a>
            <a class="action-bnt__min">
                <i class="action_icon"></i>
                <span>收藏</span>
            </a> -->
            <a class="action-bnt__big bnt_secondary" @click="togglePopup(false)">加入购物车</a>
            <a class="action-bnt__big bnt_mian" @click="togglePopup">立即购买</a>
        </div>

        
    </div>
</template>
<script>
    import zanTab from '@/components/mpvue/tab'
    import scroll from '@/components/scroll'
    import enter from '@/components/mpvue/enter'
    import badge from '@/components/mpvue/badge'
    import capsule from '@/components/mpvue/capsule'
    export default {
        data(){
            return{
                // 商品
                productinfoList: {
                    img:"https://test-1255594100.cosgz.myqcloud.com/carousel.jpg",
                    name:"七匹狼夹克男士外套春装",
                    price:699
                },
                // 详情
                detailsLsit: [],
                // 评价
                appraiseList: [],
                popupData: {},
                tab1: {
                    list: [{
                        id: 'goods',
                        title: '商品'
                    }, {
                        id: 'details',
                        title: '详情'
                    }, {
                        id: 'comment',
                        title: '评论'
                    }],
                    scroll: false,
                    selectedId: 'goods'
                },
                capsuleData: [
                    {
                        leftText: '优惠',
                        rightText: '买一送一',
                        color: '#e93f45',
                        onclick: null
                    }, {
                        leftText: '正',
                        rightText: '正品保证',
                        color: '#5cb45b',
                        onclick: null
                    }, {
                        leftText: '惠',
                        rightText: '赠送费险',
                        color: '#ff9595',
                        onclick: null
                    }, {
                        leftText: '保',
                        rightText: '急速退货',
                        color: '#e26359',
                        onclick: null
                    }
                ],
                popupData: {
                  imgUrl: 'http://suo.im/5qYDOH',
                  stepper1: {
                    stepper: 10,
                    min: 1,
                    max: 10
                  },
                  productinfoList: []
                },
                slideList: [
                    {img:'http://img.weiye.me/zcimgdir/album/file_5a0e33739bff2.jpg'},
                    {img:'http://img.weiye.me/zcimgdir/album/file_5a0e334da3ad2.jpg'},
                    {img:'http://img.weiye.me/zcimgdir/album/file_5a0d397999872.jpg'}
                ],
                stare: {
                    imgUrl: '/static/img/share.png',
                    text: '分享'
                },
                styles: {
                    color: '#d91f2f',
                    backgroundColor: '#fff',
                    fontSize: '10',
                    boxShadow: '0 0 0 2px #d91f2f',
                    content: '买一送一',
                    borderRadius: 'none'
                },
            }
        },
        components: {
            zanTab,scroll,enter,badge,capsule
        },
        methods:{
            handleZanTabChange (e) {
                console.log(e)
                const {componentId, selectedId} = e
                this[componentId].selectedId = selectedId
            }
        }
    }
</script>
<style scoped lang="less">
@import url("~@/styles/color.less");
@import url("~@/styles/animate.less");
.details{
  margin-bottom: 60px;
  margin-top: 50px;
}
.zanTab{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.details-info{
  display: flex;
  background: #ffffff;
  flex-direction: column;
  padding: 5px;
  .info-main{
    display: flex;
    justify-content: space-between;
    .info-title{
      flex: 1;
      
    }
    .info-share{
        display:flex;
        width:70px;

        img{
            width:30px;
            height: 30px;
        }
        span{
            height: 30px;
        }
    }
  }
  .info-price{
    overflow: hidden;
    display: flex;
    align-items: center;
    span{
      color: @minColor;
      font-size: 16px;
      font-weight: bold;
    }
  }
  .info-footer{
    display: flex;
    justify-content: space-between;
  }
}

.details-explain{
  background: #ffffff;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px 5px;
  margin-top: 10px;

}
.details-action{
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 100vw;
  background: #ffffff;
  display: flex;
  a{
    text-align: center;
    line-height: 50px;
  }
  .bnt_secondary{
    background: @secondaryBntBackgroundColor;
  }
  .bnt_mian{
    background: @bntBackgroundColor;
  }
  .action-bnt__min{
    flex: 1;
  }
  .action-bnt__big{
    flex:2.5;
    color: #ffffff;
  }
}

section {
  display: none;
  width: 100vw;
}
.productDetails{
  img{
    width: 100%;
  }
}
</style>
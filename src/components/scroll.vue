<template>
    <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
        <block v-for="(item,index) in scrollList" :key="index">
            <swiper-item>
                <image :src="item.img" class="slide-image" width="355" height="150"/>
            </swiper-item>
        </block>
    </swiper>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        props: {
            scrollList: {
                type: Array,
            },
            interval: {
                type: Number,
                default:5000
            },
            duration: {
                type: Number,
                default:1000
            },
            indicatorDots: {
                type: Boolean,
                default:true
            },
            autoplay: {
                type: Boolean,
                default:true
            }
        },
    }
</script>
<style>
swiper {
  height: 450rpx;
}
image{
  width: 100%;
  height: 100%;
}
</style>
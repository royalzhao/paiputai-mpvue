<template>
    <div class="popup">
      <div class="popup-example--bottom zan-popup zan-popup--bottom" :class="{ 'zan-popup--show' : showPopup }">
        <div class="zan-popup__mask" @click="togglePopup"></div>
        <div class="zan-popup__container">
        <div class="imgthumb">
        <img :src="popupData.img" alt="">
      </div>
      <div class="commodity">
        <div class="commodity-info">
          <span class="text-overflow">{{popupData.name}}</span>
          <em>￥{{popupData.price}}</em>
        </div>
        <div class="sku">
          <div>
            <span></span>
            
          </div>
        </div>
        <div class="popup-footer">
          <div class="footer-left">
            <span>购买数量</span>
            <em>剩余{{popupData.stock}}件</em>
          </div>
          <stepper
          v-bind="popupData.stepper"
          size="small"
          componentId="stepper"
          @handleZanStepperChange="handleZanStepperChange"
          ></stepper>
        </div>
      </div>
      <button class="zan-btn zan-btn--danger popup-border--none" @click="handleAffirm">{{ skip ? '下一步':'确定' }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'
import stepper from '@/components/mpvue/stepper'
export default {
  data () {
    return {
      stepper: {}
    }
  },
  props: {
    showPopup: {
      type: Boolean,
      default: true
    },
    popupData: Object
  },
  components: {
    stepper
  },
  methods: {
    togglePopup () {
      this.showPopup = !this.showPopup
      this.$emit('togglePopup', this.showPopup)
    },
    handleZanStepperChange (e) {
      const {componentId, stepper} = e
      this.popupData[componentId].stepper = stepper
      console.log(this.popupData[componentId].stepper)
      this.$emit('handleZanStepperChange', componentId, stepper)
    }
  },
  mounted () {
    console.log(store.state.details)
  }
}
</script>

<style lang="less" scoped>
@import url("~@/styles/color.less");
@import url("~@/styles/animate.less");
.popup-example--bottom .zan-popup__container {
  left: 0;
  right: 0;
}
.popup-border--none{
  border-radius: 0;
}
.imgthumb{
  position: absolute;
  top: -20px;
  left: 20px;
  z-index: 9999;
  border-radius: 6px;
  border: 1px solid @borderColor;
  overflow: hidden;
  img{
    height: 80px;
    width: 80px;
  }
}
.popup-footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.commodity{
  display: flex;
  flex-direction: column;
  .commodity-info{
    display: flex;
    flex-direction: column;
    padding-left: 120px;
    height: 75px;
    border-bottom: 1px solid @borderColor;
    span{
      width:240px;
    }
    em{
      color: @minColor;
    }
  }
}
</style>

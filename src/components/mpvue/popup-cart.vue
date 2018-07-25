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
        <!-- <div class="sku">
          <div>
            <p>颜色</p>
            <select-radio v-bind="{ items, checkedValue: checked.color, activeColor, componentId: 'color'}" @handleZanSelectChange="handleZanSelectChange"></select-radio>
          </div>
        </div> -->
        <div class="popup-footer">
          <div class="footer-left">
            <span class="zan-font-14">购买数量</span>
            <em class="zan-font-14">剩余{{popupData.stock}}件</em>
          </div>
          <zan-stepper
          size="small"
          v-bind="stepper1" componentId="stepper1" @handleZanStepperChange="handleZanStepperChange"
          ></zan-stepper>
        </div>
      </div>
      
      <button class="zan-btn zan-btn--danger popup-border--none" @click="handleAffirm">{{ skip ? '下一步':'确定' }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'
import zanStepper from '@/components/mpvue/stepper1'
import selectRadio from '@/components/mpvue/select'
import { showToast } from '@/utils/index'
export default {
  data () {
    return {
      stepper: {},
      items: [
          {
            value: '1',
            name: '选项一'
          },
          {
            value: '2',
            name: '选项二'
          }
        ],
        checked: {
          base: '-1',
          color: '-1',
          form: '-1'
        },
        activeColor: '#4b0',
        stepper1: {
          stepper: 1,
          min: 1,
          max: 20
        },
    }
  },
  props: {
    showPopup: {
      type: Boolean,
      default: true
    },
    skip: {
      type: Boolean
    },
    popupData: Object
  },
  components: {
    zanStepper,selectRadio
  },
  methods: {
    togglePopup () {
      this.showPopup = !this.showPopup
      this.$emit('togglePopup', this.showPopup)
    },
    handleZanSelectChange ({ componentId, value }) {
      this.checked[componentId] = value
    },
    handleZanStepperChange (e) {
      
      const {componentId, stepper} = e
      this[componentId].stepper = stepper
    },
    handleAffirm(){
      if(this.skip){
        wx.navigateTo({
          url: `../new_order/main`
        })
      }else{
        showToast('加入购物车成功')
        this.showPopup = !this.showPopup
        this.$emit('togglePopup', this.showPopup)
      }
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

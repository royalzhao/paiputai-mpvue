<template>
  <div class="popup">
    <div class="popup-example--bottom zan-popup zan-popup--bottom" :class="{ 'zan-popup--show' : showPopup }">
      <div class="zan-popup__mask" @click="togglePopup"></div>
      <div class="zan-popup__container">
        <slot></slot>
        <button class="zan-btn zan-btn--danger popup-border--none" @click="handleAffirm">{{ skip ? '下一步':'确定' }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { showToast } from '@/utils/index'
export default {
  data () {
  },
  props: {
    showPopup: {
      type: Boolean,
      default: false
    },
    skip: {
      type: Boolean,
      default: false
    },
    popupData: {
      type: Object
    },
    popupPicture: String
  },
  methods: {
    togglePopup () {
      this.showPopup = !this.showPopup
      this.$emit('togglePopup', this.showPopup)
    },
    handleAffirm (e) {
      if (this.skip) {
        showToast('下一步')
      } else {
        showToast('加入购物车成功')
        this.togglePopup()
      }
      this.$emit('handleAffirm', this.skip)
    }
  }
}
</script>

<style lang="less" scoped>
.popup-example--bottom .zan-popup__container {
  left: 0;
  right: 0;
}
.popup-border--none{
  border-radius: 0;
}
</style>

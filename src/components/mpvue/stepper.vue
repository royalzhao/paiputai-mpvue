<template >
  <div class="stepper">
    <div 
    @click="handleMinus" 
    class="stepper_minus"
    :data-disabled="quantity <= min"
    :class="{ 'stepper--disabled' :quantity <= min }"
    ></div>
      <input 
      class="stepper_input" 
      v-model="quantity" 
      type="number" 
      @change="handleCount"
      >
    <div 
    @click="handlePlus"
    class="stepper_plus"
    :data-disabled="quantity >= max"
    :class="{ 'stepper--disabled' : quantity >= max }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    quantity: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 10
    }
  },
  methods: {
    handleMinus (e) {
      this.handle(e, -1)
    },
    handlePlus (e) {
      this.handle(e, 1)
    },
    handleCount (e) {
      let val = e.target.value
      if (val > this.max) {
        val = this.max
      } else if (val < this.min) {
        val = this.min
      } else {
        val = this.min
      }
      // this.quantity = val
      this.$emit('handleStepper', e, val)
    },
    handle (e, num) {
      const disabled = e.currentTarget.dataset.disabled
      if (disabled) return
      const val = this.quantity + num
      // console.log(val)
      this.$emit('handleStepper', e, val)
      // console.log(this.quantity, num)
    }
  }
}
</script>

<style lang="less" scoped>
//步进器
 .stepper {
      display: flex;
      flex-direction: row;
      font-size: 0;
      min-width: 80px;
    .stepper_minus {
      border-radius: 2px 0 0 2px;
    }

    .stepper_input {
      width: 33px;
      height: 21px;
      min-height: 20px;
      padding: 1px;
      border: 1px solid #eee;
      border-width: 1px 0;
      border-radius: 0;
      box-sizing: content-box;
      color: #666;
      font-size: 14px;
      vertical-align: middle;
      text-align: center;
      -webkit-appearance: none;
    }

    .stepper_plus {
      border-radius: 0 2px 2px 0;

    }

    .stepper_plus::after {
      content: '';
      position: absolute;
      margin: auto;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #6c6c6c;
      width: 1px;
      height: 9px;
    }

    .stepper_minus,
    .stepper_plus {
      width: 30px;
      height: 25px;
      box-sizing: border-box;
      background-color: #fff;
      border: 1px solid #eee;
      position: relative;
      padding: 5px;
      vertical-align: middle;
    }

    .stepper_minus::before,
    .stepper_plus::before {
      content: '';
      position: absolute;
      margin: auto;
      width: 9px;
      height: 1px;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #6c6c6c;
    }
 }
.stepper--disabled{
  background: #f5f5f5 !important;
}
</style>
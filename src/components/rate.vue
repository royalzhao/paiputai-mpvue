<template>
  <div class="rate-map">
    <div class="rate"  :style="{fontSize: rateStyles.fontSize + 'px',color:rateStyles.color}">
      <span class="iconfont icon-xingxu"  @click="handlerate(num)" v-for="num in length" :key="num" :style="{fontSize: rateStyles.fontSize + 'px' }"></span>
      <span  class="rate-hide" :style="{width: rateWidth + 'em'}">
         <span class="rete-select iconfont icon-xingshi" @click="handlerate(num)" v-for='num in length' :key="num" :style="{fontSize: rateStyles.fontSize + 'px'}"></span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      domWidth: 0,
      rateWidth: 0
    }
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    rateStyles: {
      type: Object
    },
    length: {
      type: Number,
      default: 5
    }
  },
  methods: {
    handlerate (i) {
      // let width = this.domWidth
      // this.rateWidth = width * i
      this.rateWidth = i
      this.$emit('handleStar', i)
    }
  },
  mounted () {
    console.log(this.length)
    const query = wx.createSelectorQuery()
    query.select('.rete-select').boundingClientRect()
    query.exec((res) => {
      this.domWidth = res[0].width
      this.rateWidth = this.value
    })
  },
  computed () {
  }
}
</script>

<style lang="less" scoped>
@import url('~@/font/iconfont.css');
.rate-map{
  display: inline-block;
}
.rate{
  position: relative;
  color: #fbda15;
  display: inline-block;
  overflow: hidden;
  .rate-hide {
    position:absolute;
    display: inline-block;
    top:0;
    left:0;
    width:0;
    overflow: hidden;
  }
}
</style>

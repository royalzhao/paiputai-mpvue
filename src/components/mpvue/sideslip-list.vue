<template>
  <div class="container">
    <div class="touch-item " 
    :class="[item.isTouchMove? 'touch-move-active'  : '']"
    v-for="(item, index) in items"
    :data-index="index"
    @touchstart="touchstart" 
    @touchmove="touchmove"
    :key="index">
      <div class="content">
        <slot></slot>
      </div>
      <div class="del" @click="del" :data-index="index">删除</div>
          <!--  -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'sideslipList',
  data () {
    return {
      items: [],
      startX: 0, // 开始坐标
      startY: 0
    }
  },
  mounted () {
    for (let i = 0; i < 1000; i++) {
      this.items.push({
        content: i + '=-=-=-=-=-=-=-=',
        isTouchMove: false // 默认全隐藏删除
      })
    }
  },
  methods: {
    touchstart (e) {
      console.log(e)
      this.items.forEach((element, i) => {
        if (element.isTouchMove) element.isTouchMove = false // 只操作为true的
      })
      this.startX = e.clientX
      this.startY = e.clientY
      this.items = this.items
    },
    touchmove (e) {
      // const that = this
      console.log(e)
      const index = e.currentTarget.dataset.index// 当前索引
      const startX = this.startX// 开始X坐标
      const startY = this.startY// 开始Y坐标
      const touchMoveX = e.clientX// 滑动变化坐标
      const touchMoveY = e.clientY// 滑动变化坐标
      // 获取滑动角度
      const angle = this.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY })
      this.items.forEach((element, i) => {
        element.isTouchMove = false
        // 滑动超过30度角 return
        if (Math.abs(angle) > 30) return
        if (i === index) {
          if (touchMoveX > startX) {
            // 右滑
            element.isTouchMove = false
          } else {
            // 左滑
            element.isTouchMove = true
          }
        }
      })
    },
    angle (start, end) {
      const _X = end.X - start.X
      const _Y = end.Y - start.Y
      // 返回角度 /Math.atan()返回数字的反正切值
      return 360 * Math.atan(_Y / _X) / (2 * Math.PI)
    },
    del: function (e) {
      this.items.splice(e.currentTarget.dataset.index, 1)
    }
  }
}
</script>

<style lang="less" scoped>
.touch-item {
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  border-bottom:1px solid #ccc;
  width: 100%;
  overflow: hidden
}
.content {
  width: 100%;
  padding: 10px;
  line-height: 22px;
  margin-right:0;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
  -webkit-transform: translateX(90px);
  transform: translateX(90px);
  margin-left: -90px
}
.del {
  background-color: orangered;
  width: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  -webkit-transform: translateX(90px);
  transform: translateX(90px);
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
}
.touch-move-active .content,
.touch-move-active .del {
  -webkit-transform: translateX(0);
  transform: translateX(0);
}
</style>


<template>
  <div class="zan-badge">
  <div
    class="zan-badge__text"
    :style="{color : color, backgroundColor: backgroundColor, fontSize: (fontSize * 2)+'px', boxShadow:boxShadow , borderRadius:borderRadius }"
  >
    <span>{{content}}</span>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#fff'
    },
    backgroundColor: {
      type: String,
      default: '#f44'
    },
    fontSize: {
      type: Number,
      default: 10
    },
    boxShadow: {
      type: String,
      default: '0 0 0 2px #fff'
    },
    borderRadius: {
      type: String,
      default: '0.8em'
    },
    content: {
      type: String,
      default: '9999'
    }
  }
}
</script>

<style lang="less" scoped>
.zan-badge {
  position: relative;
  display: inline-block;
}
.zan-badge__text {
  height: 1.6em;
  min-width: 1.6em;
  line-height: 1.6;
  padding: 0 0.4em;
  font-size: 20px;
  background: #f44;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  transform: scale(0.5);
  transform-origin: center;
  z-index: 10;
  box-shadow: 0 0 0 2px #fff;
  box-sizing: border-box;
}
</style>

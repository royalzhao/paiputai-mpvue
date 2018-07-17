<template>
  <div class="enter" @click="handleEnter">
    <div class="zan-badge" v-if="content">
      <div
        class="zan-badge__text"
        :style="{color : color, backgroundColor: backgroundColor, fontSize: (fontSize * 2)+'px', boxShadow:boxShadow }"
      >
        <span>{{content}}</span>
      </div>
    </div>
    <div class="icon-parcel">
      <img :src="imgUrl" alt="">
    </div>
    <span>{{text}}</span> 
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
    content: {
      type: String
    },
    imgUrl: {
      type: String
    },
    text: {
      type: String
    }
  }
}
</script>

<style lang="less" scoped>
.enter{
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .icon-parcel{
    width: 40px;
    height: 40px;
    img{
      height: 100%;
      width: 100%;
    }
  }
  span{
    text-align:center;
  }
}


.zan-badge__text {
  position: absolute;
  top: -0.5em;
  right: 0;
  height: 1.6em;
  min-width: 1.6em;
  line-height: 1.6;
  padding: 0 0.4em;
  font-size: 20px;
  border-radius: 0.8em;
  background: #f44;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  -webkit-transform: translateX(50%) scale(0.5);
  transform: translateX(50%) scale(0.5);
  -webkit-transform-origin: center;
  transform-origin: center;
  z-index: 10;
  box-shadow: 0 0 0 2px #fff;
  box-sizing: border-box;
}
</style>

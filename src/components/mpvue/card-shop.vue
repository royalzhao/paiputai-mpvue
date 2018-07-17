<template>
  <div class="card-shop">
    <div class="title">
      <h5>{{title}}</h5>
      <span>{{subhead}}</span>
    </div>
    <img :src="imgUrl" alt="" mode="top">
  </div>
</template>

<script>
export default {
  props: ['title', 'subhead', 'imgUrl']
}
</script>

<style lang="less" scoped>
@import url("~@/styles/color.less");

.card-shop{
  display: flex;
  flex-direction: column;
  width: 48vw;
  box-sizing: border-box;
  background: #ffffff;
  margin: 1vw;
  padding: 1vw;
  height: 150px;
  .title {
    display: flex;
    overflow: hidden;
    height: 30px;
    justify-content: center;
    align-content: center;
    h5,span{
      width: 50%;
      text-align: center;
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
    }
    span{
      font-size: 12px;
      color: secondaryFontColor;
    }
  }
  img {
    width: 100%;
    height: 90px;
  }
}
</style>

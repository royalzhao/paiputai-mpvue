<template>
  <div class="card">
    <div class="card-img">
      <img :src="imgUrl" alt="">
    </div>
    <div class="card-info">
      <h5>{{title}}</h5>
      <span>{{subhead}}</span>
    </div>
    <div class="card-footer">
      <span class="card-fonter_left">￥{{price}}</span>
      <button class="van-button_min">找相似</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    imgUrl: {
      type: String,
      default: 'http://p5za7ep72.bkt.clouddn.com/raw_1526631352.jpeg'
    },
    price: {
      default: '999.99'
    },
    title: {
      type: String,
      default: '2018春季新款复古绣花网纱刺'
    },
    subhead: {
      type: String
      // default: '绣金线连衣裙女中长款连体裙绣金线连衣裙女中长款连体裙'
    }
  }
}
</script>

<style lang="less" scoped>
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing:border-box;
  margin:1vw;
  padding: 1.5vw;
  width: 48vw;
  background: #ffffff;
  .card-img{
    width: 46vw;
    height: 200px;
    overflow: hidden;
    img{
      width: 100%;
      height: 250px;
    }
  }
  .card-info{
    display:flex;
    flex-direction: column;
    align-content: center;
    width:100%;
    h5,span{
      text-align: center;
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
    }
  }
  .card-footer{
    width: 100%;
   display: flex;
   justify-content: space-between; 
   align-items: center;
   .card-fonter_left{
     color: #e51c23;
     font-size: 12px;
   }
  }
}
.van-button_min{
    -webkit-user-select: none;
    user-select: none;
    position: relative;
    padding: 0;
    display: inline-block;
    height: 45px;
    line-height: 43px;
    border-radius: 3px;
    box-sizing: border-box;
    font-size: 16px;
    text-align: center;
    -webkit-appearance: none;
  &:before {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0;
    width: 100%;
    height: 100%;
    border: inherit;
    border-color: #000;
    background-color: #000;
    border-radius: inherit;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
    color: #333;
    background-color: #fff;
    border: 1px solid #eee;
    display: inline-block;
    width: 50px;
    height: 22px;
    line-height: 20px;
    font-size: 10px;
}
</style>

<template>
<div class="center-user-info">
    <div class="user-portrait">
        <img :src="avatarUrl" mode="aspectFill" alt="">        
    </div>
    <div class="user-info-right">
        <em class="zan-font-14">{{nickName}}</em>
        <button class="zan-font-12">更新资料</button>
    </div>
    <i class="message zan-icon zan-icon-chat"></i>
</div>
</template>

<script>
export default {
    name: 'CenterInfo',
    props: ['nickName','avatarUrl']
}
</script>

<style lang="less" scoped>
@import url("~@/styles/color.less");
.center-user-info {
position: relative;
box-sizing: border-box;
background: @bntBackgroundColor;
padding: 30px 20px;
height: 150px;
display: flex;
align-items: center;
color: #ffffff;
.user-portrait{
    height: 70px;
    width: 70px;
    border-radius: 50%;
    border: 2px solid @backgroundColor;
    overflow: hidden;
    margin-right: 10px;
    img{
    height: 100%;
    width: 100%;
    }
}
.user-info-right{
    button{
    margin-top: 5px;
    background: none;
    color: #ffffff;
    border: 1px solid #fff;
    line-height: 1.5
    }
}
.message{
    font-size: 20px;
    position: absolute;
    right: 10px;
    top: 5px;
}
}
</style>
      
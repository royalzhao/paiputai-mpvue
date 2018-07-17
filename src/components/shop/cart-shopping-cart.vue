<template>
    <div class="zan-cell shopping-cart">
      <div v-if="cart.select" class="zan-cell__icon zan-icon zan-icon-checked" @click="handleSelect"></div>
      <div v-else class="zan-cell__icon zan-icon zan-icon-check" @click="handleSelect"></div>
      <div class="zan-cell__bd-img">
          <img :src="cart.headimg" alt="">
      </div>
      <div class="zan-cell__bd">
        <span class="zan-font-16 zan-font-bold">
          <!-- <i class="zan-tag zan-tag--danger zan-tag--plain">特价</i> -->
          <!-- 3件装 | MEDIHEAL 美迪惠尔 N.M.F针剂水库保湿面膜 10片/盒 -->
          {{cart.name}}
        </span>
        <p>
            <span class="zan-font-12 zan-c-red">价格￥{{cart.price}}</span>
        </p>
        
      </div>
      <div class="zan-cell__ft">
        <stepper
        @handleStepper="handleZanStepperChange"
        :quantity="cart.sum"
        :max="cart.stock"
        >
        </stepper>
        <!-- <span class="zan-font-12 zan-c-gray-darker">邮费:包邮<i class="zan-font-10 zan-icon zan-icon-arrow cart-icon"></i></span> -->
      </div>
    </div>
  </template>
  
  <script>
  import store from '@/store'
  import stepper from '@/components/mpvue/stepper'
  export default {
    props: {
      cart: {
        type: Object,
        default: {}
      },
      index: {
        type: Number
      }
    },
    components: {
      stepper
    },
    methods: {
      handleZanStepperChange (e, v) {
        // console.log(this.index, v)
        store.commit('cart/stepper', {
          index: this.index,
          v
        })
      },
      handleSelect (e) {
        store.commit('cart/select', this.cart.id)
      }
    }
  }
  </script>
  
  <style lang="less" scoped>
  @import url("~@/styles/color.less");
  .shopping-cart {
    .zan-cell__icon{
      font-size: 20px;
      margin-right: 10px;
    }
  
    .zan-icon-checked{
        color:#38f;
    } 
    .zan-icon-check{
      color: #666;
    }
       
    .zan-cell__bd{
      padding: 0 10px;
    }
  }
  .zan-cell__bd-img{
    height: 60px;
    width: 60px;
    overflow: hidden;
    img{  
      width: 100%;
    }
  }
  .zan-cell__ft{
    display:flex;
    flex-direction: column;
    align-items: center;
    .cart-icon{
      transform:rotate(90deg)
    }
  }
  </style>
  
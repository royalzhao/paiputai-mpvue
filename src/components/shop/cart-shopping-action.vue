<template>
    <div class="action-cart">
      <div class="action-checked" @click="handleAll">
          <i class="zan-cell__icon zan-icon zan-icon-check" v-if="!checked"></i>
          <i class="zan-cell__icon zan-icon zan-icon-checked" v-else></i>
          全选
      </div>
      <div class="action-right">
        <block v-if="!cartAdmin">
          <div class="action-info">
            <h3 class="zan-font-16 zan-font-bold">
              总计
              <!-- <span class="zan-font-10 zan-c-gray-dark">(不含税)</span> -->
              ：<span>￥{{sum}}</span>
            </h3>
            <!-- <span class="zan-font-12 zan-c-gray-dark">商品税费￥{{sum /100}}</span> -->
          </div>
          <div class="settle  zan-font-bold">结算<span class="zan-font-12">({{checkedLength}})</span></div>
        </block>
        <block v-else>
          <div class="settle  zan-font-bold" @click="deleteCart">删除</div>
        </block>
      </div>
    </div>
  </template>
  
  <script>
  import store from '@/store'
  import { showToast, showLoding } from '@/utils'
//   import { delShoppingCarts } from '@/api/cart'
  export default {
    name: 'CartAction',
    props: ['sum', 'dues', 'checkedLength', 'checked'],
    methods: {
      handleAll () {
        this.checked = !this.checked
        console.log(this.checked)
        //this.$emit('handleAll', this.checked)
        store.commit('cart/selectAll',this.checked)
      },
      deleteCart () {
        const ids = []
        const cartList = store.state.cart.cartList
        const ls = cartList.length
        const initCartList = cartList.filter(element => {
          if (element.select) ids.push(element.id)
          return !element.select
        })
        if (ls === initCartList.length) {
          showToast('请选择要删除的商品')
        } else {
          showLoding('提示', '是否删除购物车商品')
            .then(response => {
              console.log('确定')
              //this._delShoppingCarts(ids, initCartList)
            })
        }
      },
    //   _delShoppingCarts (ids, initList) {
    //     const postData = JSON.stringify({
    //       ids,
    //       token: 'string'
    //     })
    //     console.log(postData)
    //     delShoppingCarts(postData)
    //       .then(response => {
    //         showToast(response.data)
    //         store.commit('cart/init', initList)
    //       })
    //   }
    },
    computed: {
      cartAdmin () {
        return store.state.cart.cartAdmin
      }
    }
  }
  </script>
  
  <style lang="less" scoped>
  @import url("~@/styles/color.less");
  .zan-cell__icon {
    font-size: 20px;
    padding: 0 15px;
  }
  .zan-icon-checked {
    color:#38f;
  }
  .zan-icon-check {
    color: #666;
  }
  .action-cart {
    position: fixed;
    display: flex;
    bottom: 0;
    height:45px;
    width: 100vw;
    background: #ffffff;
    .action-checked {
      display: flex;
      align-items: center;
      justify-content: center;
      .checked-icon {
        margin: 0 9.7px;
      }
    }
    .action-right {
      flex: 1;
      display:flex;
      justify-content: flex-end;
      .action-info {
        margin-right: 5px;
        display:flex;
        h3 {
          display: flex;
          align-items: center;
          span {
            color: @minColor;
          }
        }
      }
      .settle {
        width: 200rpx;
        text-align: center;
        line-height: 45px;
        background: @minColor;
        color: #ffffff;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  </style>
  
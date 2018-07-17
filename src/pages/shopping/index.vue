<template>
    <div>
        <CartTop :address="address"></CartTop>

        <div class="zan-panel cart-list">
            <block v-for="(item, index) in shoppingLsit" :key="index">
              <cardCart
              :cart="item"
              :index="index"
              @handleSelect="handleSelect"
              ></cardCart>
            </block>
        </div>
        <block v-if="shoppingLsit.length">
            <CartAction
            @handleAll="handleAll"
            :sum="sum"
            :dues="dues"
            :checkedLength="checkedLength"
            :checked="checkedAll"
            ></CartAction>
        </block>
        <block v-else>
            暂无商品
        </block>
    </div>
</template>
<script>
import store from '@/store'
import cardCart from '@/components/shop/cart-shopping-cart'
import CartAction from '@/components/shop/cart-shopping-action'
import CartTop from '@/components/shop/cart-shopping-top'
export default {
    data(){
        return{
            address: '阿里'
        }
    },
    components:{
        cardCart,CartAction,CartTop
    },
    computed: {
        shoppingLsit () {
            return store.state.cart.cartList
        },
        sum () {
            let sum = 0
            this.shoppingLsit.forEach(e => {
                if (e.select) {
                sum += e.price * e.sum
                }
            })
            return sum
        },
        checkedAll () {
            let judge = this.shoppingLsit.find(e => {
                return e.select === false
            })
            if (judge) {
                return false
            } else {
                return true
            }
        },
        checkedLength () {
            const size = this.shoppingLsit.filter(e => {
                return e.select
            })
            return size.length
        }
    }
}


</script>
<style scoped lang="less">

</style>
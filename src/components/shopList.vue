<template>
    <div class="shopList">
        <ul>
            <li v-for="item in list" :key="index" @click="handleClick(index)">
                <a><img :src="item.img" alt=""></a>
                <!--  :href="'/pages/article/main?id='+item.id" -->
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                
            }
        },
        props:{
            list: {
                type: Array,
                default: []
            }
        },
        methods:{
            handleClick (index) {
                this.$emit('handleEnterClick', index)
            }
        }
    }   
</script>

<style scoped lang="less">
.shopList{
  ul li{
    width:100%;
    a{
      display: block;
      width: 100%;
      img{
        width:100%;
        height: 350rpx;
      }
    }
  }
}

</style>
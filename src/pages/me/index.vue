<template>
    <div>
        <CenterInfo :nickName="nickName" :avatarUrl="avatarUrl" />
        <CenterEnter/>
    </div>
</template>
<script>
import store from '@/store'
import CenterInfo from '@/components/center/center-user-info'
import CenterEnter from '@/components/center/center-order-enter'
export default {
  components: {
    CenterInfo,
    CenterEnter,
    // CenterEssential,
    // CenterBasic
  },
  data(){
      return{
          userInfo:{},
          nickName:'',
          avatarUrl:''
      }
  },
  onLoad(){
    this.nickName = store.state.userInfo.nickName
    this.avatarUrl = store.state.userInfo.avatarUrl
  },
  methods:{
    
  }
}
</script>

<style lang="less" scoped>
@import url("~@/styles/color.less");



</style>

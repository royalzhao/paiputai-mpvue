<template>
  <div class="address-select">
    <div class="zan-panel animated"  v-for="(item, index) in cellList" :key="item.id" :class="{ bounceOutRight : Del === item.id}">
      <div class="zan-cell">
        <div class="zan-cell__bd">
          <div class="zan-cell__text cell__bd___top">
            <div class="">{{item.uname}}</div>
            <div class="">{{item.phone}}</div>
          </div>
          <div class="zan-cell__desc">
           {{item.province + item.city + item.area + item.address }}
          </div>
          <div class="cell_bt">
            <div class="cell_bt__left">
              <span @click="handleDefault(item.id, index)">
                <i class="zan-icon zan-icon-checked"  v-if="checked === index"></i>
                <i class="zan-icon zan-icon-check"  v-if="checked !== index"></i>
              </span>
              <span>设为默认地址</span>
            </div>
            <div class="cell_bt__right">
              <button class="zan-btn zan-btn--small" @click="handleCompile(index)">编辑</button>
              <button class="zan-btn zan-btn--small" @click="handleDel(index)">删除</button>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>

import store from '@/store'
import { showToast } from '@/utils/index'
import { addressList, delAddress, setDefaultAddress } from '@/api/address'
export default {
  data () {
    return {
      cellList: [],
      checked: 0,
      Del: null
    }
  },
  methods: {
    handleDefault (id, key) {
      if (this.checked === key) return
      this.SetDefaultAddress(id, key)
    },
    handleDel (index) {
      const id = this.cellList[index].id
      console.log()
      this.DelAddress(id, index)
    },
    handleCompile (index) {
      const options = JSON.stringify(this.cellList[index])
      wx.navigateTo({
        url: `/pages/address/main?option=${options}`
      })
    },
    AddressList () {
      const postData = JSON.stringify({
        id: 1,
        token: 'string'
      })
      addressList(postData)
        .then(response => {
          this.cellList = response.data
        })
    },
    DelAddress (id, index) {
      const postData = JSON.stringify({
        id,
        token: 'string'
      })
      delAddress(postData)
        .then(response => {
          if (response.code === 0) {
            showToast('删除成功')
            this.Del = id
            setTimeout(() => {
              this.cellList.some((e, i) => {
                if (e.id === id) {
                  this.cellList.splice(i, 1)
                  console.info(this.Del)
                  return true
                }
              })
            }, 750)
          }
        })
    },
    SetDefaultAddress (id, key) {
      const postData = JSON.stringify({
        id,
        token: 'string'
      })
      setDefaultAddress(postData)
        .then(response => {
          showToast(response.data)
          this.checked = key
        })
    }
  },
  mounted () {
    this.AddressList()
    // console.log(this.$data, this.$options.data())
    //console.log(store.state.adderss.a)
  }
}
</script>

<style lang="less" scoped>
@import url("~@/styles/color.less");
@import url("~@/styles/animate.less");
.zan-cell{
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
}
.cell__bd___top{
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  
}
.zan-cell__desc{
  padding: 0  15px 10px 15px;
}
.cell_bt{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 0.2px dotted #e3e3e3;
  height: 45px;
  padding: 0 15px;
  .zan-btn--small{
    height: 25px;
    line-height: 25px;
  }
  .zan-icon{
    font-size: 16px;
    margin-right: 5px;
  }
  .zan-icon-checked{
    color: @bntBackgroundColor;
  }
}
</style>

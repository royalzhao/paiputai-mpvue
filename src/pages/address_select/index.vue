<template>
  <div class="address-select">
    <div class="zan-panel">
      <div class="zan-cell" v-for="(item, index) in cellList" :key="index" @click="handleChecked(e,index)">
        <div class="zan-cell__bd">
          <div class="zan-cell__text cell__bd___top">
            <div class="">{{item.uname}}</div>
            <div class="">{{item.phone}}</div>
          </div>
          <div class="zan-cell__desc">
            <span class="default-address zan-c-red" v-if="index === 0">[默认地址]</span> {{item.province + item.city + item.area + item.address }}
          </div>
        </div>
        <div class="zan-cell__ft">
          <i class="zan-icon zan-icon-checked" v-if="checked === index"></i>
          <i class="zan-icon zan-icon-check" v-if="checked !== index"></i>
        </div>
      </div>
    </div>
    <div class="adderss-footer">
      <div @click="handleToAdmin">--管理--</div>
      <div @click="handleTo">--新增地址--</div>
    </div>

    <button class="address-save zan-btn zan-btn--danger" @click="handleComfirm">确定</button>
  </div>
</template>

<script>
  import {
    addressList
  } from '@/api/address'

  export default {
    data() {
      return {
        cellList: [],
        checked: 0
      }
    },
    methods: {
      handleChecked(e, key) {
        if (this.checked === key) return
        this.checked = key
      },
      handleTo() {
        wx.navigateTo({
          url: `/pages/address/main`
        })
      },
      handleToAdmin() {
        wx.navigateTo({
          url: `/pages/address_admin/main`
        })
      },
      handleComfirm() {
        const address = JSON.stringify(this.cellList[this.checked])
        wx.setStorageSync('SelectAddress', address)
        wx.navigateBack()
      },
      AddressList() {
        const postData = JSON.stringify({
          id: 1,
          token: 'string'
        })
        addressList(postData)
          .then(response => {
            this.cellList = response.data
          })
      }
    },
    onShow() {
      this.AddressList()
      console.log(this.$data, this.$options.data())
    }
  }

</script>

<style lang="less" scoped>
  @import url("~@/styles/color.less");
  .adderss-footer {
    margin-bottom: 45px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    div {
      margin: 10px;
      color: #3f51b5;
    }
  }

  .cell__bd___top {
    display: flex;
    justify-content: space-between;
    padding-right: 20px;
  }

  .address-save {
    position: fixed;
    border: none;
    border-radius: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: @bntBackgroundColor;
  }

  .zan-cell__ft {
    i {
      font-size: 20px;
    }
    .zan-icon-checked {
      color: @bntBackgroundColor;
    }
  }

</style>

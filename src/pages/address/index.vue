<template>
  <div class="address">
    <div class="zan-panel address-panel">
      <zan-field v-bind="Object.assign({}, handleFunctions, inputDeploy.uname)" :value="adderrData.uname" @handleZanFieldChange="handleZanFieldChange"/>
      <zan-field v-bind="Object.assign({}, handleFunctions, inputDeploy.phone)" :value="adderrData.phone" @handleZanFieldChange="handleZanFieldChange"/>
      <picker class="address-picker zan-cell zan-field" mode="region" @change="bindRegionChange" :value="region" :custom-item="customItem">
        <div class="picker">
           <span>省,市,区</span><span>{{adderrData.province}} {{adderrData.city}}  {{adderrData.area}}</span>
           <i class="zan-icon zan-icon-arrow"></i>
        </div>
      </picker>
      <!-- <zan-field v-bind="Object.assign({}, handleFunctions, inputDeploy.street)" :value="street"/> -->
      <zan-field v-bind="Object.assign({}, inputDeploy.zip_code)" :value="adderrData.zip_code" @handleZanFieldChange="handleZanFieldChange"/>
      <zan-field v-bind="Object.assign({}, inputDeploy.address)" :value="adderrData.address" @handleZanFieldChange="handleZanFieldChange"/> 
    </div>
    <button class="address-save zan-btn zan-btn--danger" @click="handleSubmit">保存</button>
  </div>
</template>

<script>
import ZanField from '@/components/mpvue/field'
import store from '@/store'
import { addAddress } from '@/api/address'
import { showToast, isPhoneNum } from '@/utils/index'
export default {
  components: {
    ZanField
  },
  data () {
    return {
      region: [],
      customItem: null,
      inputDeploy: {
        uname: {
          placeholder: '收货人姓名',
          componentId: 'uname'
        },
        phone: {
          placeholder: '手机号码',
          componentId: 'phone',
          inputType: 'number'
        },
        zip_code: {
          placeholder: '邮编地址',
          componentId: 'zip_code',
          inputType: 'number'
        },
        address: {
          placeholder: '详细地址',
          componentId: 'address',
          type: 'textarea',
          textareaHeight: '100px'
        },
        province: {
          placeholder: '省市区'
        },
        area: {
          placeholder: '省市区'
        },
        city: {
          placeholder: '省市区'
        }
      },
      adderrData: {
        uname: '', // (string, optional): 收货人姓名 ,
        phone: '', // (string, optional): 收货人手机号码 ,
        area: '', // (string, optional): 区 ,
        city: '', // (string, optional): 市 ,
        province: '', // (string, optional): 省 ,
        address: '', // (string, optional): 详细地址 ,
        token: 'string', // (string, optional): token认证 ,
        zip_code: ''// (integer, optional): 邮政编码
      }
    }
  },
  methods: {
    handleZanFieldChange (e) {
      const {dataset: { componentId }, value} = e.target
      this.adderrData[componentId] = value
      console.log(this.adderrData)
    },
    bindRegionChange (e) {
      this.adderrData.province = e.target.value[0]
      this.adderrData.city = e.target.value[1]
      this.adderrData.area = e.target.value[2]
    },
    handleSubmit () {
      const keys = Object.keys(this.adderrData)
      const fix = keys.filter(e => {
        return this.adderrData[e] === ''
      })
      if (fix.length > 0) {
        showToast(`请填写${this.inputDeploy[fix[0]].placeholder}`)
        return
      }
      if (!isPhoneNum(this.adderrData.phone)) {
        showToast('请填写正确的手机号码')
        return
      }
      this.AddAddress(JSON.stringify(this.adderrData))
    },
    AddAddress (data) {
      addAddress(data)
        .then(response => {
          if (response.code === 0) {
            showToast(response.data)
            setTimeout(_ => {
              wx.navigateBack()
            }, 1000)
          }
        })
    }
  },
  mounted () {
    const options = this.$root.$mp.query.option
    Object.assign(this.$data, this.$options.data())
    if (options) this.adderrData = JSON.parse(options)
    console.log(store)
  }
}
</script>
<style lang="less" scoped>
@import url("~@/styles/color.less");
.address-picker{
  min-height: 45px;
  .picker{
    box-sizing: border-box;
    width: 100vw;
    padding-right: 15vw;
    display: flex;
    justify-content: space-between;
    position: relative;
    .zan-icon-arrow{
      position: absolute;
      right: 6vw;
      top: 50%;
      transform: translateY(-50%)
    }
  }
}
.address-save{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: @bntBackgroundColor;
}
.address-panel{
  margin-top: 0;
}
</style>
<template>
  <div>
    <div class="comment-commodity">
      <div class="commodity-top">
        <div class="comment-img">
        <img src="http://p5za7ep72.bkt.clouddn.com/raw_1526631391.jpeg" alt="">
      </div>
      <div class="commodity-rate">
        <div class="describe rate-item ">
          <span>描述相符</span>
          <Rate
          :rateStyles="styleObject"
          @handleStar="handleStar"
          ></Rate>
        </div>
        <!-- <div class="numn">
          <span v-for="num in 10" :key="num">
            {{num}}
          </span>
        </div> -->
        <div class="grade rate-item ">
          <span>商品评分</span>
          <Rate
          :rateStyles="styleObject"
          @handleStar="handleStar"
          ></Rate>
        </div>
        <div class="quality rate-item ">
          <span>服务质量</span>
          <Rate
          :rateStyles="styleObject"
          @handleStar="handleStar"
          ></Rate>
        </div>
      </div>
      </div>
      <div class="commodity-bt">
       <zan-field v-bind="Object.assign({}, inputDeploy)" :value="commentData.comment" @handleZanFieldChange="handleZanFieldChange"/> 
        <div class="up-file">
          <div class="img-group">
            <img v-for="(imgURl, index) in imglist" :key="index" :src="imgURl" alt="">
          </div>
          <div class="uploading" @click="handleUploading">
            <i class="iconfont icon-camera"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="comment-logistics">
      <div class="logistics-top border_bottom">
        <i class="iconfont icon-huoche"></i>
        <span>物流评价</span>
      </div>
      <div class="commodity-rate">
        <div class="describe rate-item ">
          <span>描述相符</span>
          <Rate
          :rateStyles="styleObject"
          @handleStar="handleStar"
          ></Rate>
        </div>
        <div class="describe rate-item ">
          <span>描述相符</span>
          <Rate
          :rateStyles="styleObject"
          @handleStar="handleStar"
          ></Rate>
        </div>  
      </div>
    </div>
    <button class="comment-bnt zan-btn zan-btn--danger">提交</button>
  </div>
</template>

<script>
import Rate from '@/components/rate'
import ZanField from '@/components/mpvue/field'
export default {
  data () {
    return {
      inputDeploy: {
        placeholder: '请输入评价...',
        componentId: 'comment',
        type: 'textarea',
        textareaHeight: '100px'
      },
      commentData: {
        comment: ''
      },
      styleObject: {
        fontSize: 20,
        color: '#fbda15'
      },
      imglist: []
    }
  },
  components: {
    Rate,
    ZanField
  },
  methods: {
    handleStar (v) {
      console.log(v)
    },
    handleZanFieldChange (e) {
      const {dataset: { componentId }, value} = e.target
      console.log(componentId, value)
    },
    handleUploading (e) {
      const that = this
      wx.chooseImage({
        count: 9,
        sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
        sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
        success (res) {
          console.log(this.imglist)
          that.imglist.push(res.tempFilePaths[0])
          console.log(res, this.imglist, this.imglist)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import url("~@/styles/border.less");
.comment-commodity{
  background: #ffffff;
  .commodity-top{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    .comment-img{
      img{
        display: inline-block;
        width: 90px;
        height: 90px;
        margin: 10px;
      }
    }
    .commodity-rate{
      .rate-item{
        display: flex;
        align-items: center;
        span{
          margin-right: 10px;
          margin-bottom:5px;
        }
      }
    }
  }
}
.commodity-bt{
  .uploading{
    position: relative;
    background: @secondaryFontColor;
    height: 90px;
    width: 90px;
    margin: 10px;
    i {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      font-size: 24px;
    }
  }
  .up-file{
    display: flex;
  }
  img {
    height: 90px;
    width: 90px;
  }
}
.comment-logistics{
  background: #ffffff;
  margin: 20px 0 90px 0;
  .logistics-top{
    position: relative;
    display: flex;
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    i{
      margin-right: 10px;
    }
  }
  .rate-item{
    display: flex;
    align-items: center;
    padding:10px;
    span{
      margin-right: 10px;
      margin-bottom:5px;
    }
  }
}
.comment-bnt{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>

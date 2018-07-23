<template>
  <div class="container">
    <scroll :scrollList="imgUrls"></scroll>

    <div class="navbar">
      <ul>
        <li v-for="item in navList" :key="index">
          <a :href="item.href">
              <div class="img">
                <image :src="item.img" />
              </div>
              <div class="title">
                {{item.title}}
              </div>
          </a>
        </li>
      </ul>
      
    </div>

    <div class="head-title">
      <div class="line"></div>
      <div class="title">热卖中</div>
      <div class="line"></div>
    </div>

    <shop-list
    @handleEnterClick="handleEnterClick"
    :list="shops"
    ></shop-list>
    
  </div>
</template>

<script>
import store from '@/store'
import card from '@/components/card'
import scroll from '@/components/scroll'
import shopList from '@/components/shopList'
export default {
  data () {
    return {
      userInfo: {},
      imgUrls: [
        {img:'http://img.weiye.me/zcimgdir/album/file_5a0e33739bff2.jpg'},
        {img:'http://img.weiye.me/zcimgdir/album/file_5a0e334da3ad2.jpg'},
        {img:'http://img.weiye.me/zcimgdir/album/file_5a0d397999872.jpg'},
      ],
      navList:[
        {
          img:'http://img.weiye.me/zcimgdir/album/file_5a012592a5e0d.png',
          href:'#',
          title:'企业介绍'
        },
        {
          img:'http://img.weiye.me/zcimgdir/album/file_5a01259fd9afc.png',
          href:'#',
          title:'新品上市'
        },
        {
          img:'http://img.weiye.me/zcimgdir/album/file_5a0125abe9999.png',
          href:'#',
          title:'最新活动'
        },
        {
          img:'http://img.weiye.me/zcimgdir/album/file_5a0125b6e5e9c.png',
          href:'#',
          title:'优惠礼券'
        },
        {
          img:'http://img.weiye.me/zcimgdir/album/file_5a0125c232bd4.png',
          href:'#',
          title:'互动社区'
        },
        {
          img:'http://img.weiye.me/zcimgdir/album/file_5a0125ceadbe5.png',
          href:'#',
          title:'联系我们'
        },
        {
          img:'http://img.weiye.me/zcimgdir/album/file_5a0125d9bdc86.png',
          href:'#',
          title:'相关知识'
        },
        {
          img:'http://img.weiye.me/zcimgdir/album/file_5a0125e557316.png',
          href:'#',
          title:'新闻动态'
        },
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      shops:[
        {
          id:1,
          img:'http://img.weiye.me/zcimgdir/thumb/t_15108160045a0d39046d341.jpg'
        },
        {
          id:2,
          img:'http://img.weiye.me/zcimgdir/album/file_59fadcd67eb95.jpg'
        },
        {
          id:3,
          img:'http://img.weiye.me/zcimgdir/album/file_59fadd70dfc81.jpg'
        },
      ]
    }
  },

  components: {
    card,scroll,shopList
  },
  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  },
  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    handleEnterClick (index) {
      const id = this.shops[index].id
      wx.navigateTo({
        url: `../detail/main?id=${id}`
      })
    },
    
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
              // wx.setStorage({
              //   key:"userInfo",
              //   data:res.userInfo
              // })
              store.state.userInfo.nickName = res.userInfo.nickName
              store.state.userInfo.avatarUrl = res.userInfo.avatarUrl
            }
          })
        }
      })
    },
    choose(){
      wx.showToast({
            title: '代完善',
            icon: 'success',
            duration: 2000
            })
        
    }
  }

 
}
</script>

<style lang="less" scoped>

.navbar{
  width: 100%;
  padding: 30rpx 20rpx;
}
.navbar ul{
  display: flex;
  justify-content: space-around;
  flex-wrap:wrap;
}
.navbar ul li{
  width: 25%;
  margin-bottom: 15px;
}
.navbar ul li .img{
  width: 100rpx;
  height: 100rpx;
  text-align: center;
  margin:0 auto;
}
.navbar ul li .img image{
  width: 100%;
  height: 100%;
}
.navbar ul li .title{
  font-size: 24rpx;
  text-align: center;
}
.head-title{
  width: 100%;
  height: 60rpx;
  background: #cfe2f3;
  position: relative;
  text-align: center;
  font-size: 34rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  .line{
    height: 6rpx;
    width:100rpx;
    background:#0b5394;
  }
  .title{
    background: #cfe2f3;
    z-index: 222;
    margin: 2px 10px;
  }
}

</style>

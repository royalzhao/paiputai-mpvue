<template>
    <div>
        <scroll :scrollList="imgUrls"></scroll>
        <div class="search-bg">
            <search-content></search-content>
        </div>
        <div class="select">
            <div class="sort-list">
                <div class="sort" @click="onOverallTag">综合排序{{sortSelected}}</div>
                <div :data-index="0" @click="onTapTag" class="sort " :class="{'sort-active': selected == 0}">销量最高</div>
                <div :data-index="1" @click="onTapTag" class="sort" :class="{'sort-active': selected == 1}">价格升序</div>
            </div>
        </div>
        <scroll-view>
            <div class="shopping">
                <div class="shoppingItem" v-for="item in shoppingList" :key="index">
                    <div class="img">
                        <img :src="item.img" alt="">
                    </div>
                    <p>{{item.title}}</p>
                    <div class="info">
                        <span>¥{{item.price}}</span>
                        <span>销量：{{item.saleNum}}</span>
                    </div>
                </div>
            </div>
        </scroll-view>
        
    </div>
</template>
<script>
import scroll from '@/components/scroll'
import searchContent from '@/components/search-content'

export default {
    data(){
        return{
            imgUrls: [
                {img:'http://img.weiye.me/zcimgdir/thumb/t_15108161405a0d398c3f5ac.jpg'},
                {img:'http://img.weiye.me/zcimgdir/album/file_59f7e8e9438c1.jpg'},
                {img:'http://img.weiye.me/zcimgdir/album/file_59f7e94a0106e.jpg'},
            ],
            selected:null,
            shoppingList:[
                {
                    img:'http://img.weiye.me/zcimgdir/album/file_59f7dd6007fdb.jpg',
                    title:'派普肽大豆蛋白肽',
                    price:790.00,
                    saleNum:0
                },
                {
                    img:'http://img.weiye.me/zcimgdir/album/file_59f7dd444b9b9.jpg',
                    title:'派普肽大豆蛋白肽',
                    price:790.00,
                    saleNum:0
                },
                {
                    img:'http://img.weiye.me/zcimgdir/album/file_5a1e0b18d12bb.jpg',
                    title:'派普肽大豆蛋白肽',
                    price:790.00,
                    saleNum:0
                },
                {
                    img:'http://img.weiye.me/zcimgdir/album/file_5a1e0ae30205e.jpg',
                    title:'派普肽大豆蛋白肽',
                    price:790.00,
                    saleNum:0
                },
            ]
        }
    }, 
    components: {
        scroll,searchContent
    },
}
</script>
<style scoped lang="less">
.search-bg{
    background: #efeff4;
    padding: 10px 30px;
}
.select{
    margin-bottom:30rpx;
    .sort-list{
        justify-content:space-around;
        display:flex;
        background:white;
        width: 100%;
        height: 80rpx;
        font-size: 27rpx;
        color: #6A6A6A;
        align-content: center;
        border: 1rpx solid #ECECEC;
        .sort{
            text-align: center;
            margin: auto 0;
            height: 30rpx;
            line-height: 30rpx;
            border-right: 1rpx solid #ECECEC;
            flex: 1;
            .sort-active{
                color: black;
                font-weight: 800;
            }
                    
        }
    }
}
@imgHeight:180px;
.shopping{
    width: 100%;
    display: flex;
    flex-wrap:wrap;
    .shoppingItem{
        width: 48%;
        margin:10px 1%;
        .img{
            width: 100%;
            height: @imgHeight;
            img{
                width: 100%;
                height: 100%;
            }
        }
        p{
            font-size: 14px;
            color: #666;
            padding: 10px 15px 0 15px;
        }
        .info{
            padding: 0px 15px 0px 15px;
        }
        .info span:nth-of-type(1){
            font-size: 14px;
            color: #fc6632;
        }
        .info span:nth-of-type(2){
            font-size: 12px;
            color: #999;
            margin-left: 30px;
        }
    }
}
        
        
            
            
                
</style>
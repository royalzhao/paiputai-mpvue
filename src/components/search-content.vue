<template>
    <div class="search">
        <div class="search-content">
            <img src="/static/img/search.png" alt="">
            <input type="text" placeholder="请输入...">
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{

            }
        }
    }
</script>
<style scoped lang="less">
.search{
    .search-content{
        background: #fff;
        border-radius:5px;
        display:flex;
        justify-content: flex-start;
        padding-left:20px;
        align-items:center;
        font-size:16px;

        img{
            width: 16px;
            height: 16px;
        }
        input{
            border: 0;
            background: #fff;
            height: 16px;
            margin-left:10px;
        }
    }
}
</style>
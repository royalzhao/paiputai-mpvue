const state = {
    cartList:[
        {
            id:1,
            headimg:'http://img.weiye.me/zcimgdir/thumb/t_15108161405a0d398c3f5ac.jpg',
            name:'派普肽',
            price:680,
            sum:1,
            stock:10,
            select:false
        },
        {
            id:2,
            headimg:'http://img.weiye.me/zcimgdir/thumb/t_15108161405a0d398c3f5ac.jpg',
            name:'派普肽固体饮料',
            price:680,
            sum:1,
            stock:10,
            select:false
        },
    ],
    cartAdmin:false
}
const mutations ={
    init (state,obj){
        state.cartList = obj
    },
    select (state,id){
        state.cartList.some(e=>{
            if(e.id === id){
                e.select = !e.select
                return true
            }
        })
    },
    selectAll (state,check){
        state.cartList.map(e=>{
           e.select = check
           return true
           
        })
    },
    stepper (state, payload) {
        state.cartList[payload.index].sum = payload.v
    },
    cartAdminCut (state) {
        state.cartAdmin = !state.cartAdmin
    },
}

export default {
    namespaced:true,
    state,
    mutations
}
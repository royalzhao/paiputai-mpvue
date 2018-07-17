import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        cart
    },
    state:{
        userInfo:{
            nickName:'',
            avatarUrl:''
        }
    },
    mutations:{

    },
    actions:{

    },
    getters:{

    }
})

export default store
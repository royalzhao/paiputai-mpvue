import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import details from './modules/details'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        cart,details
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
import Vue from 'vue'
import Vuex from 'vuex'
import ads from './ads'
import user from './user'
import shared from './shared'
import discipline from './discipline'

Vue.use(Vuex)

export default new Vuex.Store({
    data() {
        return {
            serverUrl: "http://teachforallserver.ahtem.ru/"
        }
    },
    modules: {
        ads,
        user,
        shared,
        discipline
    }
})
import Vuex from 'vuex'
import Vue from 'vue'
import basic from './modules/basic.js'
import getters from './getters'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        basic
    },
    getters
})
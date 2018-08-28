/*
* @Author: xiaoc
* @Date:   2018-08-05 22:26:49
* @Last Modified by:   xiaoc
* @Last Modified time: 2018-08-05 22:31:43
*/
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
const debuger = process.env.NODE_ENV !='production'
export default new Vuex.Store({
	actions,
	getters,
	state,
	mutations,
	strict: debuger,
	plugins: debuger ? [createLogger()] : []
})
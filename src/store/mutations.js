import * as types from './mutation-type'
import { appRouter } from '@/router/routers'
import { transcoding } from 'base/geocoder'
const mutations = {
    [types.SET_QUNIU_TOKEN](state, qiniuToken) {
        state.qiniuToken = qiniuToken
    },
    [types.SET_SIDE_ROUTER](state) {
        // if(!localStorage.getItem('userInfo')) return
        // let routeArr = []
        // let conyRouter = JSON.parse(JSON.stringify(appRouter))
        // let menu = JSON.parse(localStorage.getItem('userInfo')).admin.menu
        // if (!menu.length) {
        //     state.sideRouter = conyRouter
        // } else {
        //     menu.map(item => {
        //         conyRouter.map(rou => {
        //             if(item.mark === rou.name) {
        //                 routeArr.push(rou)
        //             }
        //         })
        //     })
        //     state.sideRouter = routeArr
        // }
        state.sideRouter = appRouter
    },
    [types.SET_TOTAL_SUM](state, totalSum) {
        state.totalSum = totalSum
    },
    [types.SET_PAGE_SIZE](state, pageSize) {
        state.pageSize = pageSize
    },
    [types.SET_CURRENT_PAGE](state, currentPage) {
        state.currentPage = currentPage
    },
    [types.SET_TABEL_LOAD_INDEX](state, tabelLoadIndex) {
        state.tabelLoadIndex = tabelLoadIndex
    },
    [types.SET_USER_INFO](state, UserInfo) {
        state.UserInfo = UserInfo
    },
    [types.SET_TABEL_LOAD_MODAL](state, tabelLoadModal) {
        state.tabelLoadModal = tabelLoadModal
    },
    [types.SET_TOTAL_SUM_MODAL](state, totalSumModal) {
        state.totalSumModal = totalSumModal
    },
    [types.SET_PAGE_SIZE_MODAL](state, pageSizeModal) {
        state.pageSizeModal = pageSizeModal
    },
    [types.SET_CURRENT_PAGE_MODAL](state, currentPageModal) {
        state.currentPageModal = currentPageModal
    },
   
}

export default mutations
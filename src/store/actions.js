import * as api from '../api/config'
import { BACK_CODE } from 'base/common'
import { transcoding } from 'base/geocoder'
import { Message } from 'iview'

const actions = {
  // 七牛上传token
  REQ_qiniuToken({commit}, ) {
    return new Promise((resolve, reject) => {
			api.qiniuToken().then(response => {
        const data = response.data
        if (data.code === BACK_CODE) {
          commit('SET_QUNIU_TOKEN', data.data)
        }
				resolve(response)
			}).catch(error => {
				reject(error)
			})
		})
  },
  // 登录
  REQ_login({commit}, form) {
    return new Promise((resolve, reject) => {
			api.login(form).then(response => {
        const data = response.data
        if (data.code === BACK_CODE) {
          Message.success('登录成功')
          const info = JSON.stringify(data.data)
          localStorage.setItem('userInfo', info)
          commit('SET_USER_INFO', data.data)
          commit('SET_SIDE_ROUTER')
				} else {
          if (data.code === 120) {
            Message.error('密码长度不能少于6个字符')
          } else if (data.code === 121) {
            Message.error('账号长度不能少于2个字符')
          } else if (data.code === 123) {
            Message.error('账号不存在或已禁用，请重试')
          } else if (data.code === 124) {
            Message.error('密码错误，请重新填写')
          }
				}
				resolve(response)
			}).catch(error => {
				reject(error)
			})
		})
  },

  // 页面列表 ----------------------------------------
  // REQ_userPage({commit}, form) {
  //   commit('SET_TABEL_LOAD_INDEX', true)
	// 	return new Promise((resolve, reject) => {
	// 		api.userPage(form).then(response => {
  //       commit('SET_TABEL_LOAD_INDEX', false)
  //       const data = response.data
	// 			if (data.code === BACK_CODE) {
	// 				commit('SET_ADMIN_LIT', data.data.data)
	// 				commit('SET_TOTAL_SUM', data.data.total)
	// 				commit('SET_PAGE_SIZE', parseInt(data.data.page_size))
	// 				commit('SET_CURRENT_PAGE', parseInt(data.data.current_page))
	// 			}
	// 			resolve(response)
	// 		}).catch(error => {
  //       commit('SET_TABEL_LOAD_INDEX', false)
	// 			reject(error)
	// 		})
	// 	})
  // },

  // modal列表
  // REQ_uservideoPage({commit}, form) {
  //   commit('SET_TABEL_LOAD_MODAL', true)
	// 	return new Promise((resolve, reject) => {
	// 		api.videoPage(form).then(response => {
  //       commit('SET_TABEL_LOAD_MODAL', false)
  //       const data = response.data
	// 			if (data.code === BACK_CODE) {
	// 				commit('SET_VIDEO_LIST', data.data.data)
	// 				commit('SET_TOTAL_SUM_MODAL', data.data.total)
  //         commit('SET_PAGE_SIZE_MODAL', parseInt(data.data.page_size))
  //         commit('SET_CURRENT_PAGE_MODAL', parseInt(data.data.current_page))
	// 			}
	// 			resolve(response)
	// 		}).catch(error => {
  //       commit('SET_TABEL_LOAD_MODAL', false)
	// 			reject(error)
	// 		})
	// 	})
  // },



 
}

export default actions
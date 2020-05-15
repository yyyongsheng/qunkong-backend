import fetch from '../utils/fetch'

const env = 'production'

const hosts = {
	development: 'http://api.yixiu08.com/well',
	production: 'http://v1.actuive.com/well'
}

//    /api代理地址，文件config/index.js
const LongURL = (url) => {
	return `${process.env.API_HOST}${url}`
  // return hosts[env] + url
}

// 七牛上传token
export const qiniuToken = () => {
  return fetch({
		url: LongURL('/Medal/imageUploadToken'),
		method: 'GET'
	})
}

// 登录
export const login = (data) => {
  return fetch({
		url: LongURL('/Util/login'),
		method: 'POST',
		data
	})
}

// 获取管理员分页列表
export const userPage = (data) => {
  return fetch({
		url: LongURL('/Admin/index'),
		method: 'POST',
		data
	})
}

// 增加修改管理员
export const editUser = (data) => {
	return fetch({
		url: LongURL('/Admin/edit'),
		method: 'POST',
		data
	})
}

// 删除管理员
export const deleteUser = (id) => {
  return fetch({
		url: LongURL('/Admin/del'),
		method: 'POST',
		data: { id }
	})
}

// 获取用户分页列表
export const userlistPage = (data) => {
	return fetch({
		url: LongURL('/User/index'),
		method: 'POST',
		data
	})
}

// 用户详情
export const userDetails = (id) => {
  return fetch({
		url: LongURL('/User/detail'),
		method: 'POST',
		data: { id }
	})
}

// 用户增加、修改
export const editUserInfo = (data) => {
  return fetch({
		url: LongURL('/User/edit'),
		method: 'POST',
		data
	})
}

// 删除用户
export const deleteUserInfo = (id) => {
  return fetch({
		url: LongURL('/User/del'),
		method: 'POST',
		data: { id }
	})
}

// 视频管理分页列表
export const videoPage = (data) => {
	return fetch({
		url: LongURL('/Video/index'),
		method: 'POST',
		data
	})
}

// 视频审核通过
export const videoPass = (data) => {
	return fetch({
		url: LongURL('/Video/agreeRobotFaild'),
		method: 'POST',
		data
	})
}

// 视频违规
export const videoIllegal = (data) => {
	return fetch({
		url: LongURL('/Video/violation'),
		method: 'POST',
		data
	})
}

// 视频上架
export const videoShow = (data) => {
	return fetch({
		url: LongURL('/Video/show'),
		method: 'POST',
		data
	})
}

// 视频下架
export const videoHide = (data) => {
	return fetch({
		url: LongURL('/Video/hide'),
		method: 'POST',
		data
	})
}

// 视频删除
export const videoDel = (data) => {
	return fetch({
		url: LongURL('/Video/del'),
		method: 'POST',
		data
	})
}

// 视频评论分布列表
export const videoComment = (data) => {
	return fetch({
		url: LongURL('/VideoComment/list'),
		method: 'POST',
		data
	})
}
// 视频显示
export const commentShow = (id) => {
	return fetch({
		url: LongURL('/VideoComment/show'),
		method: 'POST',
		data: {
			id
		}
	})
}
// 视频隐藏
export const commentHide = (data) => {
	return fetch({
		url: LongURL('/VideoComment/hide'),
		method: 'POST',
		data
	})
}

// 申诉分布列表
export const appealPage = (data) => {
	return fetch({
		url: LongURL('/Appeal/list'),
		method: 'POST',
		data
	})
}
// 申诉通过
export const appealPass = (data) => {
	return fetch({
		url: LongURL('/Appeal/pass'),
		method: 'POST',
		data
	})
}
// 申诉拒绝
export const appealRefuse = (data) => {
	return fetch({
		url: LongURL('/Appeal/refuse'),
		method: 'POST',
		data
	})
}

// 文章分页列表
export const articlePage = (data) => {
	return fetch({
		url: LongURL('/Article/list'),
		method: 'POST',
		data
	})
}
// 文章新增
export const articlAdd = (data) => {
	return fetch({
		url: LongURL('/Article/add'),
		method: 'POST',
		data
	})
}
// 文章详情
export const articleDetail = (id) => {
	return fetch({
		url: LongURL('/Article/detail'),
		method: 'GET',
		params: { id }
	})
}
// 文章编辑
export const articlEdit = (data) => {
	return fetch({
		url: LongURL('/Article/edit'),
		method: 'POST',
		data
	})
}
// 文章显示
export const articleShow = (id) => {
	return fetch({
		url: LongURL('/Article/show'),
		method: 'GET',
		params: { id }
	})
}
// 文章隐藏
export const articleHide = (id) => {
	return fetch({
		url: LongURL('/Article/hide'),
		method: 'GET',
		params: { id }
	})
}

// 类型列表
export const typeList = () => {
	return fetch({
		url: LongURL('/Article/allType'),
		method: 'GET'
	})
}
// 类型新增
export const typeAdd = (data) => {
	return fetch({
		url: LongURL('/Article/typeAdd'),
		method: 'POST',
		data
	})
}
// 类型编辑
export const typeEdit = (data) => {
	return fetch({
		url: LongURL('/Article/typeEdit'),
		method: 'POST',
		data
	})
}
// 类型显示
export const typeShow = (id) => {
	return fetch({
		url: LongURL('/Article/typeShow'),
		method: 'GET',
		params: { id }
	})
}
// 类型隐藏
export const typeHide = (id) => {
	return fetch({
		url: LongURL('/Article/typeHide'),
		method: 'GET',
		params: { id }
	})
}

// 权限树
export const authTree = () => {
	return fetch({
		url: LongURL('/system/AuthRule/tree'),
		method: 'GET'
	})
}
// 权限树2
export const authTree2 = () => {
	return fetch({
		url: LongURL('/system/Menu/tree'),
		method: 'GET'
	})
}
// 权限管理列表
export const authArr = () => {
	return fetch({
		url: LongURL('/system/AuthGroup/all'),
		method: 'GET'
	})
}
// 权限组开启
export const authGroupStart = (id) => {
	return fetch({
		url: LongURL('/system/AuthGroup/normal'),
		method: 'GET',
		params: { id }
	})
}
// 权限组禁用
export const authGroupDisable = (id) => {
	return fetch({
		url: LongURL('/system/AuthGroup/close'),
		method: 'GET',
		params: { id }
	})
}
// 权限组保存
export const authEdit = (data) => {
	return fetch({
		url: LongURL('/system/AuthGroup/edit'),
		method: 'POST',
		data
	})
}
// 权限组详情
export const ruleDetail = (id) => {
	return fetch({
		url: LongURL('/system/AuthGroup/detail'),
		method: 'GET',
		params: { id }
	})
}
// 权限组添加
export const authAdd = (data) => {
	return fetch({
		url: LongURL('/system/AuthGroup/add'),
		method: 'POST',
		data
	})
}
// 规则添加
export const ruleAdd = (data) => {
	return fetch({
		url: LongURL('/system/AuthRule/add'),
		method: 'POST',
		data
	})
}
// 规则启用
export const ruleStart = (id) => {
	return fetch({
		url: LongURL('/system/AuthRule/normal'),
		method: 'GET',
		params: { id }
	})
}
// 规则禁用
export const ruleDisable = (id) => {
	return fetch({
		url: LongURL('/system/AuthRule/close'),
		method: 'GET',
		params: { id }
	})
}

// 勋章类型分页列表
export const medalTypePage = (data) => {
	return fetch({
		url: LongURL('/Medal/typeList'),
		method: 'POST',
		data
	})
}
// 勋章所有类型列表
export const medalTypeList = () => {
	return fetch({
		url: LongURL('/Medal/allType'),
		method: 'POST'
	})
}
// 勋章类型添加
export const medalTypeAdd = (data) => {
	return fetch({
		url: LongURL('/Medal/typeAdd'),
		method: 'POST',
		data
	})
}
// 勋章类型编辑
export const medalTypeEdit = (data) => {
	return fetch({
		url: LongURL('/Medal/typeEdit'),
		method: 'POST',
		data
	})
}

// 勋章管理分页列表
export const medalPage = (data) => {
	return fetch({
		url: LongURL('/Medal/list'),
		method: 'POST',
		data
	})
}
// 勋章管理添加
export const medalAdd = (data) => {
	return fetch({
		url: LongURL('/Medal/add'),
		method: 'POST',
		data
	})
}
// 勋章管理编辑
export const medalEdit = (data) => {
	return fetch({
		url: LongURL('/Medal/edit'),
		method: 'POST',
		data
	})
}

// 系统配置详情
export const systemDetail = () => {
	return fetch({
		url: LongURL('/system/Config/index'),
		method: 'GET'
	})
}

// 链接库视频分页列表
export const videoSuper = (data) => {
	return fetch({
		url: LongURL('/Resource/videoList'),
		method: 'POST',
		data
	})
}

// 链接库视频违规
export const videoSuperRule = (data) => {
	return fetch({
		url: LongURL('/Resource/videoViolation'),
		method: 'POST',
		data
	})
}
// 链接库显示视频
export const videoSuperShow = (data) => {
	return fetch({
		url: LongURL('/Resource/videoShow'),
		method: 'POST',
		data
	})
}
// 链接库隐藏视频
export const videoSuperHide = (data) => {
	return fetch({
		url: LongURL('/Resource/videoHide'),
		method: 'POST',
		data
	})
}
// 链接库视频数量刷新
export const videoSumUpdate = (id) => {
	return fetch({
		url: LongURL('/Subject/updateVideoTotal'),
		method: 'GET',
		params: { id }
	})
}

// 主题TOKEN
export const themeToken = () => {
	return fetch({
		url: LongURL('/Subject/imageUploadToken'),
		method: 'GET'
	})
}
// 主题分页列表
export const themePath = (data) => {
	return fetch({
		url: LongURL('/Subject/list'),
		method: 'POST',
		data
	})
}
// 主题添加
export const addTheme = (data) => {
	return fetch({
		url: LongURL('/Subject/add'),
		method: 'POST',
		data
	})
}
// 主题编辑
export const editTheme = (data) => {
	return fetch({
		url: LongURL('/Subject/edit'),
		method: 'POST',
		data
	})
}
// 主题显示
export const showTheme = (id) => {
	return fetch({
		url: LongURL('/Subject/show'),
		method: 'GET',
		params: { id }
	})
}
// 主题隐藏
export const hideTheme = (id) => {
	return fetch({
		url: LongURL('/Subject/hide'),
		method: 'GET',
		params: { id }
	})
}

// 广告分页列表
export const advertPath = (data) => {
	return fetch({
		url: LongURL('/Advertising/list'),
		method: 'POST',
		data
	})
}
// 广告TOKEN
export const advertToken = () => {
	return fetch({
		url: LongURL('/Advertising/imageUploadToken'),
		method: 'GET'
	})
}
// 广告添加
export const addAdvert = (data) => {
	return fetch({
		url: LongURL('/Advertising/add'),
		method: 'POST',
		data
	})
}
// 广告添加
export const editAdvert = (data) => {
	return fetch({
		url: LongURL('/Advertising/edit'),
		method: 'POST',
		data
	})
}
// 广告类型分页列表
export const advertType = (data) => {
	return fetch({
		url: LongURL('/Advertising/typeList'),
		method: 'POST',
		data
	})
}
// 广告类型列表
export const advertTypeList = () => {
	return fetch({
		url: LongURL('/Advertising/allType'),
		method: 'GET'
	})
}
// 广告类型添加
export const addAdvertType = (data) => {
	return fetch({
		url: LongURL('/Advertising/typeAdd'),
		method: 'POST',
		data
	})
}
// 广告类型编辑
export const editAdvertType = (data) => {
	return fetch({
		url: LongURL('/Advertising/typeEdit'),
		method: 'POST',
		data
	})
}
// 广告显示
export const showAdvert = (id) => {
	return fetch({
		url: LongURL('/Advertising/show'),
		method: 'GET',
		params: { id }
	})
}
// 广告隐藏
export const hideAdvert = (id) => {
	return fetch({
		url: LongURL('/Advertising/hide'),
		method: 'GET',
		params: { id }
	})
}

// 视频日志列表
export const logList = (form) => {
	return fetch({
		url: LongURL('/Video/logList'),
		method: 'GET',
		params: form
	})
}
// 系统配置上传TOKEN
export const systemToken = () => {
	return fetch({
		url: LongURL('/Medal/imageUploadToken'),
		method: 'GET'
	})
}
// 勋章列表
export const medalList = () => {
	return fetch({
		url: LongURL('/Medal/all'),
		method: 'GET'
	})
}
// 给予用户勋章
export const userMedal = (data) => {
	return fetch({
		url: LongURL('/Medal/giveUserMedal'),
		method: 'POST',
		data
	})
}
// 链接库日志列表
export const resourceList = (form) => {
	return fetch({
		url: LongURL('/Resource/logList'),
		method: 'GET',
		params: form
	})
}
// 文章上传token
export const articleToken = () => {
	return fetch({
		url: LongURL('/Article/uploadToken'),
		method: 'GET'
	})
}
// 文章删除
export const articleDelete = (id) => {
	return fetch({
		url: LongURL('/Article/del'),
		method: 'GET',
		params: {id}
	})
}
// 广告删除
export const advertDelete = (id) => {
	return fetch({
		url: LongURL('/Advertising/del'),
		method: 'GET',
		params: {id}
	})
}

// 举报列表
export const repostPage = (form) => {
	return fetch({
		url: LongURL('/ContentReport/getList'),
		method: 'GET',
		params: form
	})
}
// 举报处理完成
export const repostPass = (data) => {
	return fetch({
		url: LongURL('/ContentReport/finish'),
		method: 'POST',
		data
	})
}
// 获取举报内容详情
export const repostDetail = (report_id) => {
	return fetch({
		url: LongURL('/ContentReport/contentDetail'),
		method: 'GET',
		params: {report_id}
	})
}

// 链接库视频删除
export const deleteSuper = (data) => {
	return fetch({
		url: LongURL('/Resource/videoDel'),
		method: 'POST',
		data
	})
}

// 链接库视频解除违规
export const unlockSuper = (data) => {
	return fetch({
		url: LongURL('/Resource/videoRemoveViolation'),
		method: 'POST',
		data
	})
}

// 视频列表解除违规
export const unlockVideo = (data) => {
	return fetch({
		url: LongURL('/Video/removeViolation'),
		method: 'POST',
		data
	})
}


// 系统配置增加分组
export const addConfigMenu = (data) => {
	return fetch({
		url: LongURL('/system/Config/groupAdd'),
		method: 'POST',
		data
	})
}

// 系统配置增加分组
export const editConfigMenu = (data) => {
	return fetch({
		url: LongURL('/system/Config/groupEdit'),
		method: 'POST',
		data
	})
}

// 系统配置组列表
export const configMenuGroup = () => {
	return fetch({
		url: LongURL('/system/Config/allGroup'),
		method: 'GET'
	})
}

// 系统分组添加配置
export const addConfig = (data) => {
	return fetch({
		url: LongURL('/system/Config/add'),
		method: 'POST',
		data
	})
}

// 系统配置上传TOKEN
export const configToken = () => {
	return fetch({
		url: LongURL('/system/Config/uploadToken'),
		method: 'GET'
	})
}

// 提交表单
export const configform = (data) => {
	return fetch({
		url: LongURL('/system/Config/submit'),
		method: 'POST',
		data
	})
}

// 所有主题
export const allTheme = () => {
	return fetch({
		url: LongURL('/Subject/getAll'),
		method: 'GET'
	})
}

// 视频编辑
export const editVideo = (data) => {
	return fetch({
		url: LongURL('/Video/edit'),
		method: 'POST',
		data
	})
}

// 修改密码
export const editPass = (data) => {
	return fetch({
		url: LongURL('/Common/changePassword'),
		method: 'POST',
		data
	})
}
// 热门视频列表
export const  hotList= (data) => {
	return fetch({
		url: LongURL('/Video/hotList'),
		method: 'GET',
		data
	})
}
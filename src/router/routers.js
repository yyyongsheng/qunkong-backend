const Home = resolve => { require(['views/layout/home'], resolve) }
const Login = resolve => { require(['views/layout/login'], resolve) }

const userAdmin = resolve => { require(['views/user-admin'], resolve) }
const wechatAdmin = resolve => { require(['views/wechat-admin'], resolve) }
const addressAdmin = resolve => { require(['views/address-admin'], resolve) }
const flowAdmin = resolve => { require(['views/flow-admin'], resolve) }




const loginRouter = {
    path: '/login',
    name: 'login',
    component: Login
}

const oterRouter = {
    path: '/',
    name: 'home',
    component: Home
}

export const appRouter = [
    {
        path: '/user',
        icon: 'android-image',
        title: '用户管理',
        name: 'user',
        component: Home,
        redirect: '/user/index',
        children: [
            { path: 'index', name: 'userIndex', title: '平台用户管理', meta: { keepAlive: false }, component: userAdmin },
            { path: 'wechat', name: 'userWechat', title: '微信账号管理', meta: { keepAlive: false }, component: wechatAdmin },
            { path: 'address', name: 'userAddress', title: '通讯录管理', meta: { keepAlive: false }, component: addressAdmin }
            
        ]
    },
   
    {
        path: '/operate',
        icon: 'asterisk',
        title: '运营管理',
        name: 'Operate',
        component: Home,
        redirect: '/Operate/operateflow',
        children: [
            { path: 'operateflow', name: 'operateFlow', title: '流量监控', meta: { keepAlive: false }, component: flowAdmin },
        ]
    }
  
  
]

export const routers = [
    loginRouter,
    oterRouter,
    ...appRouter
]
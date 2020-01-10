import router from '@/router/router.js';
import store from '@/store/index.js';

function checkLogin() {
    // todo 校验用户是否登录
    return !store.getters.loginStatus;
}

// @param to 到哪里去，跳转到哪个路由
// @param from 从哪里来，从哪个路由跳转过来的
// @param next 执行跳转
router.beforeEach((to, from, next) => {
    // 判断用户是否登录，
    // 如果用户已经登录，执行 next() 方法，
    // 如果用户未登录，则跳转到登录页面
    if (to.path != '/login' && checkLogin()) {
        next({ path: '/login' })
    } else {
        next()
    }

})
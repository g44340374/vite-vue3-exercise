/*
 * @Author: dengyuanjie 18600523@qq.com
 * @Date: 2022-05-13 14:45:26
 * @LastEditors: dengyuanjie 18600523@qq.com
 * @LastEditTime: 2022-05-13 14:53:38
 * @FilePath: \vite-vue3-exercise\src\permission.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import router from './router';

// 白名单
const whiteList = ['/login', '/401', '/404'];

router.beforeEach((to, from, next) => {
    let getToken = '';
    // 是否有token
    if (getToken) {
        // 有token并进入登录页 直接跳转到首页
        if (to.path === '/login') {
            next({ path: '/dashboard' });
        } else {
            next();
        }
    } else {
        // 没有token 查看是否在白名单里面，如果是直接执行，
        if (whiteList.includes(to.path)) {
            next();
        } else {
            next('/login');
        }
    }
});

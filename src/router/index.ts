/*
 * @Author: dengyuanjie 18600523@qq.com
 * @Date: 2022-05-12 17:12:25
 * @LastEditors: dengyuanjie 18600523@qq.com
 * @LastEditTime: 2022-05-13 14:47:30
 * @FilePath: \vite-vue3-exercise\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuth: true,
        },
        component: () => import('@/views/dashboard/index.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
            keepAlive: true,
            requireAuth: true,
        },
        component: () => import('@/views/login/index.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;

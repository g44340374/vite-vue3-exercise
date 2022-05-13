/*
 * @Author: dengyuanjie 18600523@qq.com
 * @Date: 2022-05-12 16:32:00
 * @LastEditors: dengyuanjie 18600523@qq.com
 * @LastEditTime: 2022-05-13 14:49:26
 * @FilePath: \vite-vue3-exercise\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from '@/router';

import 'normalize.css/normalize.css'; // reset css

// 路由重定向
import './permission';

// 引入ui组件
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

createApp(App).use(store).use(router).use(ElementPlus).mount('#app');

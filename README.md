# vite+vue3

## 1、创建项目

1、使用 vite-cli 命令

```javascript
// npm
npm create vite
```

2、输入项目名

```
project name: vite-vue3-exercise
```

3、选择框架

```
vue/vue-ts
```

4、启动项目

```
cd 	vite-vue3-exercise
	npm install
	npm run dev
```

## 2、集成配置

1、为保证 node 使用

```
npm i @types/node --save-dev
```

2、修改 tsconfig.json

```json
{
    "compilerOptions": {
        "typeRoots": [
            "node_modules/@types", // 默认值
            "src/types"
        ],
        "target": "esnext",
        "useDefineForClassFields": true,
        "module": "esnext",
        "moduleResolution": "node",
        "strict": true,
        "jsx": "preserve",
        "sourceMap": true,
        "resolveJsonModule": true,
        "esModuleInterop": true,
        "lib": ["esnext", "dom"],
        "baseUrl": "./",
        "paths": {
            "@": ["src"],
            "@/*": ["src/*"]
        }
    },
    "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"]
}
```

3、修改 vite.config.ts

```typescript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        //设置别名
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    plugins: [vue()],
    server: {
        port: 8080, //启动端口
        hmr: {
            host: '127.0.0.1',
            port: 8080,
        },
        // 设置 https 代理
        proxy: {
            '/api': {
                target: 'your https address',
                changeOrigin: true,
                rewrite: (path: string) => path.replace(/^\/api/, ''),
            },
        },
    },
});
```

## 3、代码风格统一

### 1、eslint

​ 1、安装

```
npm i eslint eslint-plugin-vue --save-dev

// ESLint 默认使用 Espree 进行语法解析，无法识别 TypeScript 的一些语法，故我们需要安装 @typescript-eslint/parser 替代掉默认的解析器
npm install @typescript-eslint/parser --save-dev
```

​ 2、创建配置文件： `.eslintrc.js` or `.eslintrc.json`

```js
module.exports = {
    parser: 'vue-eslint-parser',

    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },

    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
    ],

    rules: {
        // override/add rules settings here, such as:
    },
};
```

​ 3、创建忽略文件： `.eslintignore`

```
node_modules/
dist/
index.html
```

4、修改 package.json

```json
{
 "scripts": {
        ...
"eslint:comment": "使用 ESLint 检查并自动修复 src 目录下所有扩展名为 .js 和 .vue 的文件",
  "eslint": "eslint --ext .js,.vue --ignore-path .gitignore --fix src",
    }
    ...
}
```

### 2、prettier

1、安装

```
npm i prettier eslint-config-prettier eslint-plugin-prettier --save-dev
```

2、创建配置文件：`prettier.config.js` or `.prettierrc.js`

```js
module.exports = {
    // 一行最多 80 字符
    printWidth: 80,
    // 使用 4 个空格缩进
    tabWidth: 4,
    // 不使用 tab 缩进，而使用空格
    useTabs: false,
    // 行尾需要有分号
    semi: true,
    // 使用单引号代替双引号
    singleQuote: true,
    // 对象的 key 仅在必要时用引号
    quoteProps: 'as-needed',
    // jsx 不使用单引号，而使用双引号
    jsxSingleQuote: false,
    // 末尾使用逗号
    trailingComma: 'all',
    // 大括号内的首尾需要空格 { foo: bar }
    bracketSpacing: true,
    // jsx 标签的反尖括号需要换行
    jsxBracketSameLine: false,
    // 箭头函数，只有一个参数的时候，也需要括号
    arrowParens: 'always',
    // 每个文件格式化的范围是文件的全部内容
    rangeStart: 0,
    rangeEnd: Infinity,
    // 不需要写文件开头的 @prettier
    requirePragma: false,
    // 不需要自动在文件开头插入 @prettier
    insertPragma: false,
    // 使用默认的折行标准
    proseWrap: 'preserve',
    // 根据显示样式决定 html 要不要折行
    htmlWhitespaceSensitivity: 'css',
    // 换行符使用 lf
    endOfLine: 'auto',
};
```

3、修改 .eslintrc.js 配置

```js
module.exports = {
    ...

    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended'
    ],

    ...
};

```

4、 修改 package.json

```
{
    ...
    "scripts": {
        ...
        "prettier:comment": "自动格式化当前目录下的所有文件",
        "prettier": "prettier --write"
    }
    ...
}
```

## 4、 集成 pinia

特点：

1. 完整的 ts 支持
2. 足够轻量，压缩后体积小
3. 去除 mutations， 只有 state，getters，actions
4. actions 支持同步异步
5. 没有模块嵌套，只有 store 概念，store 之间自由使用
6. 无需手动添加 store，store 创建成功就会自动添加

1、安装

```
npm i pinia --save
```

2、新建 src/store/index.ts

```
 import { createPinia } from 'pinia'

 const store = createPinia()

 export default store
```

3、 在 main.ts 使用

```typescript
import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

createApp(App).use(store).mount('#app');
```

4、定义 state， src/store/username.ts

```typescript
import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id: 'user', // id必填，且需要唯一
    state: () => {
        return {
            name: '名字',
        };
    },
    actions: {
        updateName(name: string) {
            this.name = name;
        },
    },
});
```

5、使用

```vue
<script setup lang="ts">
import { userNameStore } from '@/store/username';

const userName = userNameStore();
// 修改值的变化
userName.updateName('aaa');
</script>

<template>
    <div>{{ userName.name }}</div>
</template>
```

## 5、 router

1、 安装

```
npm i vue-router --save
```

2、使用： src/router/index.ts

```typescript
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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
```

3、引入 main

```
import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from '@/router';

createApp(App).use(store).use(router).mount('#app');
```

4、修改 app.vue

```vue
<script setup lang="ts"></script>

<template>
    <router-view />
</template>
```

## 6、css 集成

### 1、normalize.css（reset.css）

1、安装

```
npm install normalize.css
```

2、main 引用

```
import 'normalize.css/normalize.css'; // reset css
```

### 2、sass

```
npm add -d sass
```

## 7、集成 vueuse

1、安装

```
npm i @vueuse/core
```

[官网链接]: https://vueuse.org/

2、简单的 demo

```vue
 
<template>
       
    <h1>测试 vueUse 的鼠标坐标</h1>
       
    <h3>Mouse: {{ x }} x {{ y }}</h3>
     
</template>

 
<script lang="ts">
import { defineComponent } from 'vue';
import { useMouse } from '@vueuse/core';

export default defineComponent({
    name: 'VueUse',
    setup() {
        const { x, y } = useMouse();

        return {
            x,
            y,
        };
    },
});
</script>
```

## 8、axios

1、安装

```
npm i axios
```

2、src/utils/axios.ts

```typescript
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const service = axios.create(); // Request interceptors

service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // do something
        return config;
    },
    (error: any) => {
        Promise.reject(error);
    },
); // Response interceptors

service.interceptors.response.use(
    async (response: AxiosResponse) => {
        // do something
    },
    (error: any) => {
        // do something
        return Promise.reject(error);
    },
);

export default service;
```

3、封装 axios 请求、响应。

src/api/index.ts

```typescript
import * as login from './module/login';

export default Object.assign({}, login);
```

src/api/module/login.ts

```typescript
import request from '@/utils/axios';

/**
 * 登录
 */

interface IResponseType<P = {}> {
    code?: number;
    status: number;
    msg: string;
    data: P;
}
interface ILogin {
    token: string;
    expires: number;
}
export const login = (username: string, password: string) => {
    return request<IResponseType<ILogin>>({
        url: '/api/auth/login',
        method: 'post',
        data: {
            username,
            password,
        },
    });
};
```

4、由于使用了 TS，需要增加 src/types/shims-axios.d.ts

```typescript
import { AxiosRequestConfig } from 'axios';
/**
 * 自定义扩展axios模块
 * @author Maybe
 */
declare module 'axios' {
    export interface AxiosInstance {
        <T = any>(config: AxiosRequestConfig): Promise<T>;
        request<T = any>(config: AxiosRequestConfig): Promise<T>;
        get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
        delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
        head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
        post<T = any>(
            url: string,
            data?: any,
            config?: AxiosRequestConfig,
        ): Promise<T>;
        put<T = any>(
            url: string,
            data?: any,
            config?: AxiosRequestConfig,
        ): Promise<T>;
        patch<T = any>(
            url: string,
            data?: any,
            config?: AxiosRequestConfig,
        ): Promise<T>;
    }
}
```

5、 页面中使用

```
<script lang="ts">
    import API from '@/api';
    const requestRes = async () => {
        let result = await API.login('zhangsan', '123456');
    }
</script>

```

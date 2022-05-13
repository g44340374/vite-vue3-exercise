<!--
 * @Author: dengyuanjie 18600523@qq.com
 * @Date: 2022-05-12 17:13:05
 * @LastEditors: dengyuanjie 18600523@qq.com
 * @LastEditTime: 2022-05-13 14:16:49
 * @FilePath: \vite-vue3-exercise\src\views\dashboard\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts">
import VueUse from './components/VueUse.vue';
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
    name: 'Dashboard',
    components: {
        VueUse,
    },
    setup() {
        const title = ref('title');
        const list = reactive({
            name: '张三',
            age: 15,
            sex: 'man',
        });
        const str = ref('1');
        const num = ref(0);
        const boo = ref(false);
        const obj = reactive({
            name: 'inline',
            age: '18',
        });
        const arr = reactive(['0', '1', '2']);
        return { str, num, boo, obj, arr, title, list };
    },
});
</script>

<template>
    <div>首页11111111</div>
    <VueUse :title="title" :list="list" />
    <h2>数据类型</h2>
    <p>number: {{ num }}</p>
    <p>string: {{ str }}</p>
    <p>boolean： {{ boo }}</p>
    <p>obj: {{ obj }}</p>
    <p>arr: {{ arr }}</p>
    <button @click="obj.name = '更改字符串'">改变</button>
    <button @click="obj.age = '更改nianl'">改变</button>
    <button @click="title = '更改title'">title改变</button>
</template>

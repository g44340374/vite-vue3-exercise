<!--
 * @Author: dengyuanjie 18600523@qq.com
 * @Date: 2022-05-12 17:50:17
 * @LastEditors: dengyuanjie 18600523@qq.com
 * @LastEditTime: 2022-05-13 14:43:55
 * @FilePath: \vite-vue3-exercise\src\views\dashboard\components\VueUse.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <h1>测试 vueUse 的鼠标坐标</h1>
    <div>title: {{ title }}</div>
    <div>list: {{ list }}</div>
    <h3>Mouse: {{ x }} x {{ y }}</h3>
</template>

<script lang="ts">
import { defineComponent, toRefs, ref } from 'vue';
import { useMouse } from '@vueuse/core';

export default defineComponent({
    name: 'VueUse',
    props: {
        title: {
            type: String,
            default: '',
        },
        list: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    setup(props, context) {
        console.log('context', context);

        const { x, y } = useMouse();
        // const { title, list } = toRefs(props);
        // console.log(title.value);
        // console.log(list.value);
        const { title, list } = toRefs(props);
        console.log(title);
        console.log(list);
        return {
            x,
            y,
            title,
            list,
        };
    },
});
</script>

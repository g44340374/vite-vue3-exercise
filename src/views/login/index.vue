<!--
 * @Author: dengyuanjie 18600523@qq.com
 * @Date: 2022-05-13 14:46:24
 * @LastEditors: dengyuanjie 18600523@qq.com
 * @LastEditTime: 2022-05-13 14:54:09
 * @FilePath: \vite-vue3-exercise\src\views\login\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import DefaultLogin from './components/DefaultLogin.vue';
// import { defineComponent } from 'vue';

// export default defineComponent({
// });
</script>

<template>
    <div class="login">
        <el-card class="box-card">
            <DefaultLogin />
            <el-row class="row-bg" justify="space-between">
                <el-col :span="7">
                    <el-button>手机登录</el-button>
                </el-col>
                <el-col :span="7">
                    <el-button>二维码登录</el-button>
                </el-col>
                <el-col :span="7">
                    <el-button>注册</el-button>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<style lang="scss" scoped>
.login {
    width: 100vw;
    height: 100vh;
    background-color: #03a9f48c;
    display: flex;
    justify-content: center;
    align-items: center;
}
.el-row {
    width: 100%;
    .el-button {
        width: 100%;
    }
}
.box-card {
    width: 400px;
    height: 340px;
}
</style>

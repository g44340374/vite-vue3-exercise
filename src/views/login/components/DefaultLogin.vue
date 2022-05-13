<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';

export default defineComponent({
    setup() {
        const loginForm = reactive({
            userName: '',
            passWord: '',
        });
        const isPassword = ref(false);
        return { loginForm, isPassword };
    },
});
</script>

<template>
    <div class="DefaultLogin">
        <el-form class="loginForm" :model="loginForm">
            <el-form-item>
                <h2>登录</h2>
            </el-form-item>
            <el-form-item label="账号" prop="name">
                <el-input
                    v-model="loginForm.userName"
                    placeholder="请输入账号"
                />
            </el-form-item>
            <el-form-item label="密码" prop="name">
                <el-input
                    v-model="loginForm.passWord"
                    placeholder="请输入密码"
                />
            </el-form-item>
            <el-form-item>
                <el-row>
                    <el-col :span="12">
                        <el-checkbox v-model="isPassword">记住密码</el-checkbox>
                    </el-col>
                    <el-col class="el-col-right" :span="12">
                        <span class="forgetPassword">忘记密码？</span>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-button type="primary">登录</el-button>
            <el-divider />
        </el-form>
    </div>
</template>

<style lang="scss" scoped>
.el-form-item {
    margin-bottom: 12px;
    h2 {
        width: 100%;
        text-align: center;
    }
    .el-row {
        width: 100%;
        .el-col-right {
            text-align: right;
            span {
                cursor: pointer;
                color: #03a9f4;
            }
        }
    }
    img {
        width: 40px;
        height: 40px;
    }
}
.el-button {
    width: 100%;
}
.el-divider {
    margin: 10px 0 16px 0;
}
</style>

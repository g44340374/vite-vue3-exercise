<script setup lang="ts">
import { userNameStore } from '@/store/username';

const userName = userNameStore();
userName.updateName('aaa');
</script>

<template>
    <div>{{ userName.name }}</div>
</template>

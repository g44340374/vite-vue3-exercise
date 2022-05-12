import { defineStore } from 'pinia';

export const userNameStore = defineStore({
    id: 'userName', // id必填，且需要唯一
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

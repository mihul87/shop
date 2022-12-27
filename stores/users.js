import { defineStore } from 'pinia';

const state = () => ({
    user: {
        name: "Mihail",
        surename: "Botnari",
        email: "botnari@gmail.com",
        id: "123456789",
        userType: "admin"
    },
});

const getters = {};

const actions = {};

export const useUser = defineStore("user", {
    state,
    getters,
    actions,
});
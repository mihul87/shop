// import { defineStore } from 'pinia';

export const useUserStore = defineStore("user", () => {
     
    const user = ref({
            name: "Mihail",
            surename: "Botnari",
            email: "botnari@gmail.com",
            id: "123456789",
            userType: "buyer"
            // userType: "admin"
        });
    
    const isAuthenticated = computed(() => {
        return !!user.value;
    })
    
    // const actions = {};

    return {user, isAuthenticated}
});
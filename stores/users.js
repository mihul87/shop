// import { defineStore } from 'pinia';

export const useUserStore = defineStore("user", () => {
     
    const user = ref(null
        // {
        //     // name: "Mihail",
        //     // surename: "Botnari",
        //     // email: "botnari@gmail.com",
        //     // id: "123456789",
        //     // userType: "buyer"
        //     // userType: "admin"
        // }
        );
    
    const isAuthenticated = computed(() => {
        return user.value !== null
        // return !!user.value;
    })
    
    function signup(userData) {
        if (!userData) {
            user.value = {
                id: '1',
                name: "Vasile",
                surname: "Mahu",
                username: userData.username,
                email: "mahu@gmail.com"
            }    
        }
    }

    return {user, isAuthenticated, signup}
});
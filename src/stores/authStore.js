import {create} from "zustand";
import axios from "axios";

const authStore = create((set) => ({
    loggedIn: null,

    loginForm: {
        email: "",
        password: "",
    },

    UserloginForm: {
        email: "",
        password: "",
    },

    signupForm: {
        email: "",
        password: "",
    },

    updateLoginForm: (e) => {
        const{name, value} = e.target;

        set((state) => {
            return{
                loginForm: {
                    ...state.loginForm,
                    [name]: value,
                },
            };
        });
    },

    updateUserLoginForm: (e) => {
        const{name, value} = e.target;

        set((state) => {
            return{
                UserloginForm: {
                    ...state.UserloginForm,
                    [name]: value,
                },
            };
        });
    },


    updateSignupForm: (e) => {
        const{name, value} = e.target;

        set((state) => {
            return{
                signupForm: {
                    ...state.signupForm,
                    [name]: value,
                },
            };
        });
    },

    login: async () => {
        const { loginForm } = authStore.getState();

        const res = await axios.post("/login", loginForm);

        set({ 
            loggedIn: true, 
            loginForm: {
                email: "",
                password: "",
        },
    });
    },

    Userlogin: async () => {
        const { UserloginForm } = authStore.getState();

        const res = await axios.post("/login", UserloginForm);

        set({ 
            loggedIn: true, 
            UserloginForm: {
                email: "",
                password: "",
        },
    });
    },

    logout: async () => {
        await axios.get("/logout",);

        set({ 
            loggedIn: false,
    });
    },

    signup: async () => {
        const { signupForm } = authStore.getState();

        const res = await axios.post("/signup", signupForm,);

        set({
            signupForm: {
                email: "",
                password: "",
            },
        });
        console.log(res);
    },

    checkAuth: async () => {
        try {
            await axios.get("/check-auth", {withCredentials: true});
            set({ loggedIn: true });
        }
     catch (err) {
        set({ loggedIn: false });
    }
    },
}));
    

export default authStore;    
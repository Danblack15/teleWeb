import TeleWeb from '@/utils/teleWeb'
import axios from "axios";

export const UserData = {
    state: () => ({
        userData: Telegram.WebApp.initDataUnsafe.user
    }),

    getters: {
        getUserData(state) {
            return state.userData;
        }
    },

    mutations: {
        
    },

    actions: {
        async registerUser({ state, commit }) {
            if (!state.userId) return;

            let registerURL = process.env.VUE_APP_API_URL;

            axios.post(`${registerURL}/users`, {
                telegramId: state.userId
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
        }
    },

    namespaced: true
}
import TeleWeb from '@/utils/teleWeb'
import axios from "axios";

export const BasesData = {
    state: () => ({
        userId: '720413663' || Telegram.WebApp.initDataUnsafe.user?.id,
        basesData: null
    }),

    getters: {
        getBasesData(state) {
            return state.basesData;
        }
    },

    mutations: {
        setBases(state, data) {
            state.basesData = data;
        }
    },

    actions: {
        async getBaseByUser({ state, commit }) {
            if (!state.userId) return;

            let registerURL = process.env.VUE_APP_API_URL;

            axios.post(`${registerURL}/db/get-by-user`, {
                userId: state.userId
            })
            .then((res) => {
                console.log(res);
                commit('setBases', res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        }
    },

    namespaced: true
}
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTelegram from 'vue-tg'

import '@/assets/sass/colors.sass'
import '@/assets/sass/config.sass'
import '@/assets/sass/reset.sass'
import '@/assets/sass/btn.sass'

createApp(App).use(store).use(router).use(VueTelegram).mount('#app')

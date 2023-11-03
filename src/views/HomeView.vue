<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TeleWeb from '@/utils/teleWeb'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },

  mounted() {
    // let teleWeb = document.createElement('script');
    // teleWeb.setAttribute('src', 'https://telegram.org/js/telegram-web-app.js');
    // document.head.appendChild(teleWeb);
    Telegram.WebApp.expand()
    this.initData();
  },

  methods: {
    initData() {
      console.log(Telegram.WebApp.initDataUnsafe.user?.id);
    }
  }
}
</script>

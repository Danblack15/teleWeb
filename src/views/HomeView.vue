<template>
  <div class="home">
    <img alt="logo" src="../assets/logo.png">
    <h1>Привет, {{ userTelegramData?.first_name }} ({{ userTelegramData?.username }})!</h1>
    <h1>Твой ID: {{ userTelegramData?.id }}</h1>
    <h2>user: {{ userTelegramData }}</h2>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },

  mounted() {
    this.registerUser();
  },

  methods: {
    ...mapActions({
      registerUser: 'userData/registerUser'
    }),
  },

  computed: {
    ...mapGetters({
      userTelegramData: 'userData/getUserData'
    })
  }
}
</script>

<style lang="sass" scoped>
.home img
  max-width: 70%
  max-height: 200px
  aspect-ratio: 1
</style>

<template>
    <header class="header container">
        <img src="@/assets/logo-long.svg" alt="logo-long" />
        <p>Умный мониторинг<br>PostgreSQL</p>
    </header>
</template>
  
<script>
import { mapGetters } from 'vuex'

export default {
    name: 'HeaderBlock',

    computed: {
        ...mapGetters({
            userTelegramData: 'userData/getUserData'
        })
    }
}
</script>
  
<style lang="sass" scoped>
.header
    padding-top: 18px
    width: 100%
    display: flex
    justify-content: space-between
    align-items: center

    & img
        max-width: 152px

    & p
        font-size: 14px
        line-height: normal
        text-align: right
</style>
  
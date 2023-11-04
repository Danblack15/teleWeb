<template>
  <div class="home">
    <section class="home__list" v-if="basesData && basesData.length > 0">
      <BasePreview 
        v-for="baseData in basesData"
        :key="baseData"
        :data="baseData"
      />
    </section>

    <h1 class="container home__title" v-else-if="!basesData">Загрузка</h1>

    <h1 class="container home__title" v-else>Нет Базы Данных</h1>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BasePreview from '@/components/BasePreview';

export default {
  name: 'HomeView',

  components: {
    BasePreview
  },

  mounted() {
    this.registerUser();
    this.getBasesByUser();
  },

  methods: {
    ...mapActions({
      registerUser: 'userData/registerUser',
      getBasesByUser: 'basesData/getBaseByUser'
    }),
  },

  computed: {
    ...mapGetters({
      userTelegramData: 'userData/getUserData',
      basesData: 'basesData/getBasesData'
    })
  }
}
</script>

<style lang="sass" scoped>
.home
  padding: 24px 0

  &__list
    display: flex
    flex-direction: column
    grid-gap: 20px

  &__title
    margin-top: 100px
.home img
  max-width: 70%
  max-height: 200px
  aspect-ratio: 1
</style>

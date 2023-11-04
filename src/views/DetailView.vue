<template>
    <div class="detail">
        <BasePreview 
            :data="dataBase" 
            detail 
            v-if="dataBase"
        />
        <h1 v-else>Загрузка..</h1>
        <MetricBlock :data="dataBase" class="detail__metric"/>
    </div>
</template>
  
<script>
import { mapActions, mapGetters } from 'vuex'
import BasePreview from '@/components/BasePreview';
import MetricBlock from '@/components/MetricBlock';

export default {
    name: 'HomeView',

    data() {
        return {
            data: null
        }
    },

    components: {
        BasePreview,
        MetricBlock
    },

    mounted() {
        console.log(this.$route.params.id);

        if (!this.basesData)
            this.getBasesByUser()
    },

    methods: {
        ...mapActions({
            getBasesByUser: 'basesData/getBaseByUser'
        })
    },

    computed: {
        ...mapGetters({
            basesData: 'basesData/getBasesData'
        }),

        dataBase() {
            return this.basesData?.filter(base => base.id === this.$route.params.id)[0];
        }
    }
}
</script>
  
<style lang="sass" scoped>
.detail
    padding: 24px 0
    
    &__metric
        margin-top: 12px
</style>
  
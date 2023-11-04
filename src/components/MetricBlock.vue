<template>
    <div class="matric container" v-if="data">
        <div class="matric__item matric__item--small">
            <p>Размер</p>
            <span>{{ data.actualStatus?.state }}</span>
        </div>
        <router-link to="/" class="matric__item matric__item--back">
            <p>Ко всем метрикам</p>
        </router-link>
        <div class="matric__item matric__item--small">
            <p>Кол-во подключений</p>
            <span>Работает</span>
        </div>
        <div class="matric__item matric__item--small-two">
            <p>Кол-во подключений</p>
            <span>3</span>
        </div>
        <div class="matric__item matric__item--big">
            <p>Метрика с графиком:</p>
        </div>
        <div class="matric__item matric__item--long">
            <p>Мет. 3</p>
            <span>Числовое значение</span>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'MetricBlock',

    props: {
        data: {
            type: Object,
            required: true
        }
    },

    computed: {
        // getMetric() {
        //     return data?.metrics
        // }
    }
}
</script>
  
<style lang="sass" scoped>
@import '@/assets/sass/colors'

.matric
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    grid-template-rows: repeat(4, 112px)
    grid-gap: 12px
    overflow: hidden

    &__item
        position: relative
        background: $deep-blue
        border-radius: 10px
        padding: 12px
        text-align: left    
        animation-name: small-metric
        animation-duration: .4s
        animation-timing-function: ease
        animation-fill-mode: forwards    

        & p
            font-size: 14px

        & span
            font-size: 12px
            position: absolute
            bottom: 12px
            right: 12px

        &--small
            transform: translate(-100%, 0)
            opacity: 0

        &--big
            background: $white
            grid-column-start: 2
            grid-column-end: 4
            grid-row-start: 1
            grid-row-end: 3
            transform: translate(100%, 0)
            animation-delay: .2s
            opacity: 0

            & p
                color: $blue
                font-weight: 600

        &--small-two
            grid-column-start: 2
            grid-column-end: 4
            grid-row-start: 3
            grid-row-end: 3
            transform: translate(100%, 0)
            animation-delay: .3s
            opacity: 0

        &--long
            grid-column-start: 1
            grid-column-end: 4
            grid-row-start: 4
            grid-row-end: 4
            transform: translate(0, 100%)
            animation-delay: .4s
            opacity: 0

        &--back
            background: $blue
            display: flex
            align-items: flex-end
            animation-delay: .1s
            transform: translate(-100%, 0)
            opacity: 0

    @keyframes small-metric 
        100%
            transform: translate(0)
            opacity: 1
</style>
  
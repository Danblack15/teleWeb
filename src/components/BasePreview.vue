<template>
    <!-- <div class="base-preview container">
        <div class="base-preview__main">
            <p>{{ data.name }}</p>
            <span>{{ naturalIp }}</span>
            <div class="base-preview__status"></div>
        </div>
        <ButtonUI blue>Перезагрузка</ButtonUI>
        <ButtonUI :link="'#'">Подробнее</ButtonUI>
    </div> -->

    <div class="base-preview container">
        <div class="base-preview__main" @click="$router.push(`/${data.id}`)">
            <p>{{ data.name }}</p>
            <span>{{ data.ip }}</span>
            <div :class="['base-preview__status', {
                'base-preview__status--error': data.actualStatus?.state === 'error'
            }]"></div>
        </div>
        <div class="base-preview__btns">
            <ButtonUI 
                blue 
                icon 
                class="base-preview__btn"
            >
                <img src="@/assets/refresh.svg" alt="refresh" />
            </ButtonUI>
            <ButtonUI 
                link="/" 
                icon 
                class="base-preview__btn" 
                v-if="detail"
            >
                <img src="@/assets/back.svg" alt="more" />
            </ButtonUI>
            <ButtonUI 
                :link="`/${data.id}`" 
                icon 
                class="base-preview__btn" 
                v-else
            >
                <img src="@/assets/more.svg" alt="more" />
            </ButtonUI>
        </div>
    </div>
</template>
  
<script>
import ButtonUI from "@/components/ButtonUI";

export default {
    name: 'Basepreview',

    props: {
        data: {
            type: Object,
            required: true
        },
        detail: {
            type: Boolean,
            default: false
        }
    },

    components: {
        ButtonUI
    },

    computed: {

    }
}
</script>
  
<style lang="sass" scoped>
@import '@/assets/sass/colors'
// .base-preview
//     display: grid
//     grid-template-columns: 1fr 1fr
//     grid-template-rows: 95px 42px
//     grid-gap: 12px

//     &__main
//         position: relative
//         grid-column-start: 1
//         grid-column-end: 3
//         background: $deep-blue
//         border-radius: 10px
//         padding: 16px
//         display: flex
//         flex-direction: column
//         align-items: flex-start
//         justify-content: space-between

//         & p
//             font-size: 24px
//             font-weight: 600

//         & span
//             font-size: 18px
//             font-weight: 500

//     &__status
//         position: absolute
//         bottom: 16px
//         right: 16px
//         width: 17px
//         aspect-ratio: 1
//         border-radius: 50%
//         background: $green

.base-preview
    display: flex
    grid-gap: 7px

    &__main
        position: relative
        width: 100%
        background: $deep-blue
        border-radius: 10px
        padding: 12px 22px 12px
        display: flex
        flex-direction: column
        align-items: flex-start
        grid-gap: 12px
        overflow: hidden

        & p
            font-size: 20px
            font-weight: 600

        & span
            font-size: 14px
            font-weight: 500

    &__status
        position: absolute
        width: 5px
        height: 100%
        left: 0
        top: 0
        background: $green

        &--error
            background: $red

    &__btns
        display: flex
        flex-direction: column
        grid-gap: 7px

    &__btn
        aspect-ratio: 1
        width: 100% 
        height: 100%
        max-width: 35px
        min-width: 35px
        display: flex
        justify-content: center
        align-items: center

        & img
            max-width: 16px

</style>
  
<template>
    <router-link 
        v-if="link"
        :to="link"
        :class="['btn', {
            'btn--blue': blue,
            'btn--icon': icon
        }]"
    >
        <slot></slot>
    </router-link>

    <button
        v-else
        :class="['btn', {
            'btn--blue': blue,
            'btn--icon': icon
        }]"
    >
        <slot></slot>
    </button>
</template>
  
<script>
export default {
    name: 'ButtonUI',

    props: {
        link: {
            type: String
        },
        blue: {
            type: Boolean,
            default: false
        },
        icon: {
            type: Boolean,
            default: false
        }
    }
}
</script>
  
<style lang="sass" scoped>
@import '@/assets/sass/colors'
</style>
  
<template>
    <router-link to="/song">
        <div class="back-to-player button__container button__circle--white" :class="{button__circle : haveBg}">
            <img class="back-to-player__icon" :src="backToPlayerIcon" alt="Back to player icon">
        </div>
    </router-link>
</template>

<script>
import backToPlayerIcon from '@/assets/icons/back-to-player-icon.svg'

export default {
    name: 'ButtonBackToPlayer',
    props:{
        haveBg: Boolean
    },
    data(){
        return{
            backToPlayerIcon
        }
    }
}
</script>

<style lang="scss" scoped>
    .back-to-player{
        &__icon{
            width: 18px;
        }
    }
</style>
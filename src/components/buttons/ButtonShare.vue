<template>
    <div class="share button__container button__circle--white" :class="{button__circle : haveBg}">
        <img class="share__icon" :src="shareIcon" alt="Share the song icon">
    </div>
</template>

<script>
import shareIcon from '@/assets/icons/share-icon.svg'

export default {
    name: 'ButtonShare',
    props:{
        haveBg: Boolean
    },
    data(){
        return{
            shareIcon
        }
    }
}
</script>

<style lang="scss" scoped>
    .share{
        &__icon{
            filter: invert(35%) sepia(45%) saturate(528%) hue-rotate(211deg) brightness(88%) contrast(88%);
        }
    }
</style>
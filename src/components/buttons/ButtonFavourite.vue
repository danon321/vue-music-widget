<template>
    <div class="favourite button__container button__circle--white" :class="{button__circle : haveBg}">
        <img class="favourite__icon" :src="heartIcon" alt="Add song to favourite - heart icon">
    </div>
</template>

<script>
import heartIcon from '@/assets/icons/heart-icon.svg'

export default {
    name: 'ButtonFavourite',
    props:{
        haveBg: Boolean
    },
    data(){
        return{
            heartIcon
        }
    }
}
</script>

<style lang="scss" scoped>
    .favourite{
        &__icon{
            filter: invert(42%) sepia(54%) saturate(2368%) hue-rotate(324deg) brightness(115%) contrast(86%);
            transition: filter 1s;
        }
        &:hover &__icon{
            filter: invert(27%) sepia(79%) saturate(5405%) hue-rotate(339deg) brightness(92%) contrast(103%);
        }
    }
</style>
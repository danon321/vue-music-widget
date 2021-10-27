<template>
    <div class="player__options">
        <div class="player__options--container">
            <div class="player__options--option">
                <img :src="refresh2Icon" alt="">
            </div>
            <div class="player__options--option">
                <img :src="shuffleIcon" alt="">
            </div>
            <div class="player__options--option">
                <img :src="refresh1Icon" alt="">
            </div>
        </div>
        <nav class="player__nav">
            <router-link to="/">
                <img :src="hamburgerIcon" alt="">
            </router-link>
        </nav>
    </div>
</template>

<script>
import refresh1Icon from '@/assets/icons/refresh-1.svg'
import refresh2Icon from '@/assets/icons/refresh-2.svg'
import shuffleIcon from '@/assets/icons/shuffle.svg'
import hamburgerIcon from '@/assets/icons/hamburger-menu.svg'

export default {
    name: 'PlayerOptions',
    data(){
        return{
            refresh1Icon,
            refresh2Icon,
            shuffleIcon,
            hamburgerIcon
        }
    }
}
</script>

<style lang="scss" scoped>
    .player{
        &__options{
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            width: 100%;
            z-index: 2;
            padding: 22px 20px;
            &:after{
                content: "";
                background-color: $player-dark-bg;
                position: absolute;
                top: 0;
                opacity: 0.5;
                z-index: -1;
                width: 100%;
                height: 100%;
                border-top-left-radius: 30px;
                border-top-right-radius: 30px;
            }
            &--container{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                flex: 0 1 auto;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
            }
            &--option{
                margin-right: 20px;
                cursor: pointer;
                &:last-child{
                    margin-right: 0;
                }
            }
        }
        &__nav{
            flex: 0 1 auto;
            margin-left: auto;
        }
    }
</style>

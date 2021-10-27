<template>
    <div class="button__container button__circle--purple" 
    :class="{button__circle : haveBg,
    button__bigger : bigger}"
    @click="playPuseSong()"
    >
        <img v-if="songStatus === 'pause'"  :src="playSongIcon" class="play-icon" alt="Play Song Icon">
        <img v-else :src="pauseSongIcon" alt="Pause Song Icon">
    </div>
</template>

<script>
import pauseSongIcon from '@/assets/icons/pause.svg'
import playSongIcon from '@/assets/icons/play.png'
import { mapMutations, mapState } from 'vuex'

export default {
    name: 'PlayerControlsButtonPrev',
    props:{
        haveBg: Boolean,
        bigger: Boolean
    },
    data(){
        return{
            pauseSongIcon,
            playSongIcon
        }
    },
    methods: { ...mapMutations('player', [
        'playPuseSong'
        ]), 
    },
    computed: mapState({
        songStatus: state => state.player.playState
    })
}
</script>

<style lang="scss" scoped>
    .button__container{
        margin: 0 20px;
    }
    .play-icon{
        height: 17px;
    }
</style>
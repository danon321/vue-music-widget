<template>
    <div class="controls">
        <PlayerControlsSeekSlider />
        <audio id="audio-player" :src="songLink" preload="metadata"></audio>
        <div class="controls__buttons--container">
            <ButtonShare :haveBg="true" />
            <div class="controls__buttons">
                <PlayerControlsButtonPrev :haveBg="true" :bigger="false" />
                <PlayerControlsButtonPlay :haveBg="true" :bigger="true" />
                <PlayerControlsButtonNext :haveBg="true" :bigger="false" />
            </div>
            <ButtonFavourite :haveBg="true" />
        </div>
    </div>
</template>

<script>
//components
import PlayerControlsSeekSlider from '@/components/player/PlayerControlsSeekSlider'
import PlayerControlsButtonNext from '@/components/player/PlayerControlsButtonNext'
import PlayerControlsButtonPrev from '@/components/player/PlayerControlsButtonPrev'
import PlayerControlsButtonPlay from '@/components/player/PlayerControlsButtonPlay'
import ButtonFavourite from '@/components/buttons/ButtonFavourite'
import ButtonShare from '@/components/buttons/ButtonShare'
//vuex
import { mapState } from 'vuex'

export default {
    name: 'PlayerControls',
    props:{
        songLink: String
    },
    components:{
        PlayerControlsSeekSlider,
        ButtonFavourite,
        ButtonShare,
        PlayerControlsButtonPlay,
        PlayerControlsButtonPrev,
        PlayerControlsButtonNext
    },
    computed: {
        ...mapState({
            songStatus: state => state.player.playState
        }),
    }
}

</script>


<style lang="scss" scoped>
    .controls{
        position: absolute;
        height: 160px;
        width: 100%;
        bottom: 0;
        &__buttons{
            display: flex;
            align-items: center;
            &--container{
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 100%;
                padding: 0 20px;
            }
        }
    }
</style>
<template>
    <div class="seek-slider--container">
        <div class="seek-slider--progress" :style="{width: progressWidth}"></div>
        <input type="range" class="seek-slider" max="100" value="0" @input="showRangeProgress($event)">
    </div>
</template>

<script>
export default {
    name: 'PlayerControlsSeekSlider',
    data(){
        return{
            progressWidth: 0
        }
    },
    methods:{
        showRangeProgress(rangeInput){
            this.progressWidth = rangeInput.target.value / rangeInput.target.max * 100 + '%';
        }
    }
}
</script>

<style lang="scss" scoped>
    .seek-slider{
        width: 100%;
        margin: 0;
        position: relative;
        -webkit-appearance: none;
        margin: 0;
        padding: 0;
        height: 7px;
        outline: none;
        background-color: $player-seek-slider;
        &--container{
            position: absolute;
            width: 100%;
        }
        &--progress {
            position: absolute;
            content: "";
            top: 6px;
            left: 0;
            height: 7px;
            z-index: 1;
            background-color: $player-seek-slider-progress;
            cursor: pointer;
        }
        &::-webkit-slider-thumb { //This is that dot who's moving on seek slider
            position: relative;
            background-image: url('../../assets/icons/audio.svg');
            background-repeat: no-repeat;
            background-position: center;
            -webkit-appearance: none;
            box-sizing: content-box;
            border: none;
            height: 22px;
            width: 22px;
            filter: drop-shadow(0px 2px 2px rgba(0,0,0,0.1));
            border-radius: 50%;
            background-color: $player-seek-slider-dot;
            cursor: pointer;
            z-index: 2;
        }
    }

</style>
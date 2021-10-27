<template>
    <div class="button__container button__circle--purple" 
    :class="{button__circle : haveBg, 
    button__bigger : bigger}"
    @click="changeSong(1)"
    >
        <img :src="nextSongIcon" alt="Next Song Icon">
    </div>
</template>

<script>
import nextSongIcon from '@/assets/icons/next.svg'
import { mapMutations } from 'vuex'

export default {
    name: 'PlayerControlsButtonPrev',
    props:{
        haveBg: Boolean,
        bigger: Boolean
    },
    data(){
        return{
            nextSongIcon
        }
    },
    methods: { ...mapMutations('player', [
      'changeSong'
    ]),
  }
}
</script>
<template>
    <div class="button__container button__circle--purple" 
    :class="{button__circle : haveBg,
    button__bigger : bigger}"
    @click="changeSong(-1)"
    >
        <img :src="prevSongIcon" alt="Previous Song Icon">
    </div>
</template>

<script>
import prevSongIcon from '@/assets/icons/previous.svg'
import { mapMutations } from 'vuex'

export default {
    name: 'PlayerControlsButtonPrev',
    props:{
        haveBg: Boolean,
        bigger: Boolean
    },
    data(){
        return{
            prevSongIcon
        }
    },
    methods: { ...mapMutations('player', [
      'changeSong'
    ]),
  }
}
</script>
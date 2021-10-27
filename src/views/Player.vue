<template>
  <div class="player">
    <PlayerOptions />
    <div class="song__container">
      <div class="song__image--container">
        <img class="song__image" :src="song.image" alt="">
      </div>
      <div class="song__info">
        <p class="song__info--artist">{{song.artist}}</p>
        <p class="song__info--title">{{song.title}}</p>
      </div>
    </div>
    <PlayerControls :songLink="song.file"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PlayerOptions from '@/components/player/PlayerOptions'
import PlayerControls from '@/components/player/PlayerControls'

export default {
  name: 'Player',
  components:{
    PlayerControls,
    PlayerOptions
  },
  computed: mapState({
    song: state => state.player.playingSongID[0]
  })
}
</script>

<style lang="scss" scoped>
  .player{
    position: relative;
    width: 100%;
    height: 100%;
    background-color: $player-bg;
    border-radius: 30px;
    .song{
      &__container{
        position: relative;
      }
      &__image{
        // transform: scale(1.15);
        opacity: 0.7;
        &--container{
          position: relative;
          overflow: hidden;
          background-color: $basic-purple;
          border-top-left-radius: 30px;
          border-top-right-radius: 30px;
          background-color: $basic-purple;
        }
      }
      &__info{
        text-align: center;
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 15px 0 20px 0;
        &--artist,
        &--title{
          position: relative;
          color:  $font-white;
        }
        &--artist{
          font-size: 18px;
          font-weight: 700;
          padding-bottom: 7px;
        }
        &--title{
          font-size: 14px;
        }
        &:before{
          content: "";
          background-color: $player-dark-bg;
          position: absolute;
          bottom: 0;
          left: 0;
          opacity: 0.5;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>

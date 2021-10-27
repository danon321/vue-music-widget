<template>
  <div class="playlist">
    <div class="playlist__top">
      <nav class="nav">
        <ButtonBackToPlayer :haveBg="true" />
      </nav>
      <p class="playlist__title">PlayList</p>
    </div>
    <div class="playlist__songs">
      <PlayListItem v-for="song in songs" :key="song.id" :song="song"/>
      <div class="fadeout"></div>
    </div>
  </div>
</template>

<script>
import ButtonBackToPlayer from '@/components/buttons/ButtonBackToPlayer'
import PlayListItem from '@/components/playlist/PlayListItem'
import { mapState } from 'vuex'

export default {
  name: 'PlayList',
  components:{
    PlayListItem,
    ButtonBackToPlayer
  },
  computed: mapState({
    songs: state => state.playlist.allSongs
  })
}
</script>

<style lang="scss" scoped>
  .playlist{
    padding: 20px 24px 0px 29px; 
    margin-bottom: 40px;
    position: relative;
    &__top{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      position: relative; 
      padding-bottom: 20px;  
    }
    &__title{
      flex: 0 1 auto;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-size: 18px;
      font-weight: 700;
      color: $font-purple;
    }
    &__songs{
      overflow: auto;
      max-height: 405px;
      padding-right: 25px;
    }
    .nav{
      flex: 0 1 auto;
      margin-right: auto;
    }
  }
  ::-webkit-scrollbar {
    width: 7px;
    &-thumb {
      width: 7px;
      border-radius: 3px;
      background-color: $scroll-color;
      &:hover{
        background: $scroll-hover-color;
      }
    }
  }

  .fadeout {
    position: absolute; 
    bottom: 0em;
    width: 90%;
    height: 4em;
    background: -webkit-linear-gradient(
        rgba(255, 255, 255, 0) 40%,
        #f3f4f8 80%
    );
    background-image: -moz-linear-gradient(
        rgba(255, 255, 255, 0) 40%,
        #f3f4f8 80%
    );
    background-image: -o-linear-gradient(
        rgba(255, 255, 255, 0) 40%,
        #f3f4f8 80%
    );
    background-image: linear-gradient(
        rgba(255, 255, 255, 0) 40%,
        #f3f4f8 80%
    );
    background-image: -ms-linear-gradient(
        rgba(255, 255, 255, 0) 40%,
        #f3f4f8 80%
    );
  } 
</style>
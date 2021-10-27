import Vue from 'vue'
import Vuex from 'vuex'
import player from './modules/player'
import playlist from './modules/playlist'

Vue.use(Vuex)

export default new Vuex.Store({
  currentSongID: 1,
  modules: {
    player,
    playlist
  }
})
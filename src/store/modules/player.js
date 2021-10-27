import songs from '../../api/songs'

// initial state
const state = () => ({
  playingSongID: songs.getSongById(1),
  playState: 'pause'
  
})

// actions
const actions = {
    setPlayingSong({ commit }, song) {
    commit('getSong', song.id)
  }
}

// mutations
const mutations = {
  
  getSong(state, id) {
    state.playingSongID = songs.getSongById(id);
  },

  changeSong(state, direction) {
    //direction = 1 means next song
    //direction = -1 means prev song
    let currentSongID = state.playingSongID[0].id;

    if(songs.getSongById(currentSongID + direction).length){
      state.playingSongID = songs.getSongById(currentSongID + direction);
      state.playState = 'pause';
    }
  },

  playPuseSong(state) {
    state.playState == 'pause' ? state.playState = 'play' : state.playState = 'pause';
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
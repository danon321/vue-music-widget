import songs from '../../api/songs'

// initial state
const state = () => ({
  allSongs: []
})

// actions
const actions = {
  getAllSongs ({ commit }) {
    songs.getSongs(songs => {
      commit('setSongs', songs)
    })
  }
}

// mutations
const mutations = {
  setSongs (state, songs) {
    state.allSongs = songs
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
/*
* @Author: xiaoc
* @Date:   2018-08-05 22:22:30
* @Last Modified by:   xiaoc
* @Last Modified time: 2018-08-06 11:00:41
*/
export const singer = state => state.singer
export const topList = state => state.topList
export const playing = state => state.playing
export const fullScreen = state => state.fullScreen
export const playlist = state => state.playlist
export const sequenceList = state => state.sequenceList
export const mode = state => state.mode
export const currentIndex = state => state.currentIndex
export const disc = state => state.disc

export const currentSong = (state) => {
  console.log(state.playlist[state.currentIndex])
  return state.playlist[state.currentIndex] || {}
}

export const currentUrl = state => state.currentUrl

export const searchHistory = state => state.searchHistory

export const playHistory = state => state.playHistory

export const favoriteList = state => state.favoriteList

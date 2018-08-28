/*
* @Author: xiaoc
* @Date:   2018-08-05 22:23:08
* @Last Modified by:   xiaoc
* @Last Modified time: 2018-08-06 10:27:53
*/
import {playMode} from 'common/js/config'
import {loadSearch, loadPlay, loadFavorite} from 'common/js/cache'

const state = {
  singer: {},
  topList: {},
  playing: false,
  fullScreen: false,
  playlist: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1,
  currentUrl: '',
  disc: {},
  searchHistory: loadSearch(),
  playHistory: loadPlay(),
  favoriteList: loadFavorite()
}

export default state

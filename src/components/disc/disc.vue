<template>
  <transition name="slide">
   <music-list :songs="songs" :title="title" :bg-image="bgImage"></music-list>
  </transition>
</template>

<script>
  import MusicList from 'components/music-list/music-list'
  import {getSongList} from 'api/recommend'
  import {ERR_OK} from 'common/js/config'
  import {mapGetters} from 'vuex'
  import { createSong, isValidMusic, processSongsUrl } from 'common/js/song'

  export default {
    components: {
      MusicList
    },
    computed: {
      title(){
        return this.disc.dissname
      },
      bgImage(){
        return this.disc.imgurl
      },
      ...mapGetters([
        'disc'
      ])
    },
    data() {
      return {
        songs:[]
      }
    },
    created() {
      this._getSongList()
    },
    methods: {
      _getSongList() {
        if (!this.disc.dissid){
           this.$router.push('/recommend')
           return
        }
        console.log(this.disc)
        getSongList(this.disc.dissid).then((res) => {
          if(res.code === ERR_OK){
            /*processSongsUrl(this._normalizeSongs(res.cdlist[0].songlist)).then((songs)=>{
               this.songs = songs
               console.log(songs)
            })*/
            this.songs = this._normalizeSongs(res.cdlist[0].songlist)
          }
        })
      },
      _normalizeSongs(list){
         let ret =[]
         list.forEach((musicData)=>{
           if(isValidMusic(musicData)){
             ret.push(createSong(musicData))
           }
        })
        console.log(ret)
        return ret
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>

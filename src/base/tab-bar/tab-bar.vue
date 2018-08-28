<template>
  <div class="tab" ref="slider">
    <div class="tab-item"
         v-for="(item,index) in data"
         :key="index">{{item.label}}
    </div>
  </div>
</template>

<script type-="text/ecmascript-6">
  export default {
    props: {
      data: {
        type: Array,
        default() {
          return []
        }
      },
      inline: {
        type: Boolean,
        default: false
      },
      useTransition: {
        type: Boolean,
        default: true
      }
    },
    created() {
      this.tabs = []
    },
    mounted() {
      this._updateSliderStyle()
    },
    methods: {
      findIndex(arr, fn) {
        if (arr.findIndex) {
          return arr.findIndex(fn)
        }
      },
      addTab(tab) {
        this.tabs.push(tab)
      },
      removeTab(tab) {
        const index = this.tabs.findIndex(tab)
        if (index > -1) {
          this.tabs.slice(index, 1)
        }
      },
      _updateSliderStyle() {
        if (!this.showSlider) return
        const slider = this.$refs.slider
        this.$nextTick(() => {
          const {width, index} = this._getSliderWidthAndIndex()
          slider.style.width = `${width}px`
          this.setSliderTransform(this._getOffsetLeft(index))
        })
      },
      setSliderTransform(offset) {
        const slider = this.$refs.slider
        if (typeof offset === 'number') {
          offset = `${offset}px`
        }
        if (slider) {
          if (this.userTransition) slider.style.transform = `all 0.2s linear`
          slider.style.transform = `translateX(${offset}) translateZ(0)`
        }
      },
      _getSliderWidthAndIndex() {
        let width = 0
        let index = 0
        if (this.tabs.length > 0) {
          index = this.findIndex(this.tabs, (tab) => tab.label === this.value)
          width = this.tabs[index].$el.clientWidth
        }
        return {
          width,
          index
        }
      },
      _getOffsetLeft(index) {
        let offsetLeft = 0
        this.tabs.forEach((tab, i) => {
          if (i < index) {
            offsetLeft += tab.$el.clientWidth
          }
        })
        return offsetLeft
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .tab
    display: flex
    height: 44px
    line-height: 44px
    font-size: $font-size-medium
    .tab-item
      flex: 1
      text-align: center
      .tab-link
        padding-bottom: 5px
        color: $color-text-1
      &.router-link-active
        .tab-link
          color: $color-theme
          border-bottom: 2px solid $color-theme
</style>

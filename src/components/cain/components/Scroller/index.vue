<template>
  <div>

    <div class="cainScrollWrap">
      <div class="scroll" ref="scroller">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
// function
// show()
// hide()

// event
// confirm

// import { Picker, Button } from 'mint-ui'
// import Cain from '@cain/'
import BScroll from 'better-scroll'
export default {
  name: 'cain-scroller',
  data () {
    return {
      scroller: null
    }
  },
  props: {
    value: {
      top: {
        type: Number,
        default: 0
      },
      bottom: {
        type: Number,
        default: 0
      }
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.scroller = new BScroll(this.$refs.scroller, {
        bounceTime: 300,
        observeDOM: false,
        click: true
      })
      this.refresh()
    },
    // 刷新DOM数据
    refresh () {
      this.$nextTick(() => {
        this.scroller.refresh()
      })
    }
  }
}
</script>

<style   lang="scss">
.cainScrollWrap {
  position: fixed;
  // position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  bottom:30px;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%;

  .scroll {
    height: 100%;
    &::after {
      display: table;
      content: " ";
      clear: both;
      height: 20px;
    }
  }
}
</style>

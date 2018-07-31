<template>
  <div class="qaDetailContainer">
    <cain-scroller ref="scroller" :top="'40'"  :pullUpLoad="true" :pullDownRefresh="true" @pullingUp="pullingUp" @pullingDown="pullingDown">
      <ul class="qaList">
        <li @click="test1(item)" v-for="(item,index) in list" :key="index">{{item}}</li>
      </ul>
    </cain-scroller>
  </div>
</template>

<script>
import CainScroller from '@cain/components/Scroller/'

export default {
  data () {
    return {
      list: 20
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
    },
    pullingUp () {
      this.list += 20
      this.$refs.scroller.finish()
    },
    pullingDown () {
      setTimeout(() => {
        this.list = 20
        this.$refs.scroller.finish()
      }, 3000)
    },
    test1 (item) {
      console.log(item)
    }
  },
  components: {
    CainScroller
  }
}
</script>

<style  scoped   lang="scss">
.qaDetailContainer {
  .qaList {
    padding: 90px 52px;
    li {
      list-style: none;
      margin-bottom: 90px;
      .title {
        font-size: $fs34;
        font-weight: 900;
      }
    }
  }
}
</style>

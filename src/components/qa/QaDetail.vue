<template>
  <div class="qaDetailContainer">
    <cain-scroller ref="scroller">
      <ul class="qaList">
        <li>
          <p class="title">我是题目</p>
          <qa-radio-group v-model="test">
            <qa-radio name="1">1</qa-radio>
            <qa-radio name="2">2</qa-radio>
          </qa-radio-group>
        </li>
        <li>
          <p class="title">我是题目</p>
          <qa-check-group v-model="test2">
            <qa-check name="1">1</qa-check>
            <qa-check name="2">2</qa-check>
          </qa-check-group>
        </li>
        <li>
          <p class="title">我是题目</p>
          <qa-check-group v-model="test2">
            <qa-check name="1">1</qa-check>
            <qa-check name="2">2</qa-check>
          </qa-check-group>
        </li>
        <li>
          <p class="title">我是题目</p>
          <qa-check-group v-model="test2">
            <qa-check name="1">1</qa-check>
            <qa-check name="2">2</qa-check>
          </qa-check-group>
        </li>
        <li>
          <p class="title">我是题目</p>
          <qa-check-group v-model="test2">
            <qa-check name="1">1</qa-check>
            <qa-check name="2">2</qa-check>
          </qa-check-group>
        </li>
        <li>
          <p class="title">我是题目</p>
          <qa-check-group v-model="test2">
            <qa-check name="1">1</qa-check>
            <qa-check name="2">2</qa-check>
          </qa-check-group>
        </li>

      </ul>
    </cain-scroller>
  </div>
</template>

<script>
import QaRadioGroup from './QaRadioGroup'
import QaRadio from './QaRadio'
import QaCheckGroup from './QaCheckGroup'
import QaCheck from './QaCheck'
import CainScroller from '@cain/components/Scroller/'

// import EventBus from '@/components/common/EventBus'
export default {
  data () {
    return {
      test: '1',
      test2: [],
      pickerRes: '',
      list: [
        {
          label1: '飞机票',
          value1: 0
        },
        {
          label1: '火车票',
          value1: 1
        },
        {
          label1: '汽车票',
          value1: 3
        },
        {
          label1: '公车票',
          value1: 4
        }
      ]
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.$http.post({
        url: 'jkzx/imagetextinfo/find',
        model: 'news'
      })
    }
  },
  components: {
    QaCheckGroup,
    QaRadioGroup,
    QaRadio,
    QaCheck,
    CainScroller
  }
}
</script>

<style  scoped   lang="scss">
@import "@/components/qa/base/common.scss";
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
  .test{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;;
  }
}
</style>

<template>
  <div>
    <div class="codeArea">
      <a @click="showPicker1">调用打开</a>
      <a @click="showPicker2">指定开始和结束时间打开</a>
      <pre>
直接看本源码吧。。。
</pre>
      <p>通过绑定返回的值：{{defaultValue}}</p>
    </div>
    <cain-date-picker ref="picker1" @confirm='confirmPicker' v-model="defaultValue"></cain-date-picker>
    <cain-date-picker ref="picker2" @confirm='confirmPicker' v-model="defaultValue" :startDate="startDate" :endDate="endDate"></cain-date-picker>

  </div>
</template>

<script>
import Cain from '@cain/'
import CainDatePicker from '@cain/components/Picker/CainDatePicker'
export default {
  components: {
    CainDatePicker
  },
  data () {
    return {
      defaultValue: new Date('1980/02/14'),
      startDate: new Date('1950/01/01'),
      endDate: new Date('2000/01/01')
    }
  },
  mounted () {
  },
  methods: {
    confirmPicker (val) {
      console.log('res', Cain.formatDate(val.toString()))
      // this.resJson = val
    },
    changePicker (val) {
      console.log(val)
    },
    showPicker1 () {
      this.$refs.picker1.show()
    },
    showPicker2 () {
      this.$refs.picker2.show()
    }
  }
}
</script>

<style  scoped lang="scss">
p {
  font-size: $fs26;
}
.codeArea {
  margin-bottom: 10px;
  padding: 10px;
  a {
    margin: 10px;
    display: block;
    background-color: $mainColor;
    color: #fff;
    font-size: $fs16;
    padding: 10px;
    border-radius: 5px;
    line-height: $fs32;
    text-align: center;
  }
  pre {
    white-space: pre-wrap;
    user-select: text;
    margin: 10px 0;
    border-radius: 6px;
    background-color: #dedede;
    border: 1px solid #b1b1b1;
    padding: 10px;
    font-size: $fs16;
  }
}
</style>

<template>
  <div>
    <div class="codeArea">
      <a @click="showPicker">调用打开</a>
      <a @click="showPickerByDefault">默认选中某个值打开</a>
      <a @click="showPickerByCustom">自定义label、value key灵活调用</a>
      <pre>
直接看本源码吧。。。
</pre>
      <p>通过change返回的值：{{resJson}}</p>
      <p>通过绑定返回的值：{{resValue}}</p>
    </div>
    <cain-picker ref="picker" @confirm='confirmPicker' @change="changePicker" v-model="resValue"></cain-picker>
     <cain-picker ref="pickerCustom" @confirm='confirmPicker' @change="changePicker" v-model="resValue" valueKey="value1" labelKey="label1"></cain-picker>

  </div>
</template>

<script>
// import Cain from '@cain/'
import CainPicker from '@cain/components/Picker/CainPicker'
export default {
  components: {
    CainPicker
  },
  data () {
    return {
      resJson: '',
      resValue: ''
    }
  },
  mounted () {},
  methods: {
    confirmPicker (val) {
      console.log(val)
      this.resJson = val
    },
    changePicker (val) {
      console.log(val)
    },
    showPicker () {
      let list = [
        {
          value: '1',
          label: '第一个'
        },
        {
          value: '2',
          label: '第二个'
        },
        {
          value: '3',
          label: '第三个'
        }
      ]
      this.$refs.picker.show(list)
    },
    showPickerByDefault () {
      let list = [
        {
          value: '1',
          label: '第一个1'
        },
        {
          value: '2',
          label: '第二个1'
        },
        {
          value: '3',
          label: '第三个1'
        }
      ]
      this.$refs.picker.show(list, '3')
    },
    showPickerByCustom () {
      let list = [
        {
          value1: '1',
          label1: '第一个1'
        },
        {
          value1: '2',
          label1: '第二个1'
        },
        {
          value1: '3',
          label1: '第三个1'
        }
      ]
      this.$refs.pickerCustom.show(list, '3')
    }
  }
}
</script>

<style  scoped lang="scss">
p{
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

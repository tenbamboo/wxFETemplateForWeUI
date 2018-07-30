<template>
  <div class="qaRadioContaniner" @click="onClickLabel">
    <span>
      <input :value="name" v-model="currentValue" type="radio">
      <img :src="currentIcon" />
    </span>
    <span v-if="$slots.default" @click="onClickLabel">
      <slot />
    </span>
  </div>
  <!-- 85 -->
</template>

<script>
import checkIcon from './img/check.png'
import unCheckIcon from './img/unCheck.png'
export default {
  name: 'qa-radio',
  props: {
    name: null,
    value: null
  },
  data () {
    return {
      parent: null
    }
  },
  computed: {
    currentValue: {
      get () {
        return this.parent ? this.parent.value : this.value
      },
      set (val) {
        (this.parent || this).$emit('input', val)
      }
    },
    currentIcon: {
      get () {
        return this.currentValue === this.name ? checkIcon : unCheckIcon
      }
    }
  },
  created () {
    this.findParent('qa-radio-group')
  },
  mounted () {},
  methods: {
    onClickLabel () {
      // if (!this.isDisabled && !this.labelDisabled) {
      this.currentValue = this.name
      // }
    },
    findParent (name) {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.name === name) {
          this.parent = parent
          break
        }
        parent = parent.$parent
      }
    }
  }
}
</script>

<style scoped   lang="scss">
.qaRadioContaniner {
  input[type="radio"] {
    display: none;
  }
  img{
    width: 40px;
    height: 40px;
    vertical-align: middle;
  }
}
</style>

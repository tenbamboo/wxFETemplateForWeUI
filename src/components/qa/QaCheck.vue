<template>
  <div class="qaCheckContaniner" @click="toggle">
    <span>
      <img :src="currentIcon" />
    </span>
    <span v-if="$slots.default" @click="toggle">
      <slot />
    </span>
  </div>
  <!-- 85 -->
</template>

<script>
import checkIcon from './img/check.png'
import unCheckIcon from './img/unCheck.png'
export default {
  name: 'qa-check',
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
    checked: {
      get () {
        return this.parent
          ? this.parent.value.indexOf(this.name) !== -1
          : this.value
      },
      set (val) {
        const { parent } = this
        if (parent) {
          const parentValue = this.parent.value.slice()
          if (val) {
            if (parentValue.indexOf(this.name) === -1) {
              parentValue.push(this.name)
              parent.$emit('input', parentValue)
            }
          } else {
            const index = parentValue.indexOf(this.name)
            /* istanbul ignore else */
            if (index !== -1) {
              parentValue.splice(index, 1)
              parent.$emit('input', parentValue)
            }
          }
        } else {
          this.$emit('input', val)
        }
      }
    },
    currentIcon: {
      get () {
        return this.checked ? checkIcon : unCheckIcon
      }
    }
  },
  created () {
    this.findParent('qa-check-group')
  },
  watch: {
    value (val) {
      this.$emit('change', val)
    }
  },
  mounted () {},
  methods: {
    toggle (target) {
      this.checked = !this.checked
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

<style scoped  lang="scss">
.qaCheckContaniner {
  img{
    width: 40px;
    height: 40px;
    vertical-align: middle;
  }
}
</style>

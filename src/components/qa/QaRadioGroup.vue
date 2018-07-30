<template>
  <div class="qaRadioGroupContaniner">
    <slot />
  </div>
  <!-- 85 -->
</template>

<script>
export default {
  name: 'qa-radio-group',
  props: {
    value: null
  },
  watch: {
    value (value) {
      this.$emit('change', value)
    }
  }
}
</script>

<style   lang="scss">
.qaRadioGroupContaniner {
  .qaRadioContaniner {
    margin-top: 50px;
    font-size: $fs34;
    img {
      margin-right: 31px;
    }
  }
}
</style>

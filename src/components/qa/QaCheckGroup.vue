<template>
  <div class="qaCheckGroupContaniner">
    <slot />
  </div>
  <!-- 85 -->
</template>

<script>
export default {
  name: 'qa-check-group',
  props: {
    value: Array
  },
  watch: {
    value (value) {
      this.$emit('change', value)
    }
  }
}
</script>

<style scoped   lang="scss">
.qaCheckGroupContaniner {
  .qaCheckContaniner {
    margin-top: 50px;
    font-size: $fs34;
    img {
      margin-right: 31px;
    }
  }
}
</style>

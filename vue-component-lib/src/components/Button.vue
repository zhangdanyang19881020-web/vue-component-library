<template>
  <button :class="type" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'primary'
    }
  }
}
</script>

<style scoped>
.primary { background-color: blue; color: white; }
.secondary { background-color: gray; color: white; }
</style>

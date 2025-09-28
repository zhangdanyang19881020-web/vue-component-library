<template>
  <input :placeholder="placeholder" @input="$emit('update:value', $event.target.value)" />
</template>

<script>
export default {
  name: 'Input',
  props: {
    placeholder: { type: String, default: '' },
    value: { type: String, default: '' }
  }
}
</script>

<style scoped>
input { padding: 4px 8px; border: 1px solid #ccc; border-radius: 4px; }
</style>

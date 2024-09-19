<script setup lang="ts">
const isOpen = ref(false);
</script>

<template>
  <div>
    <slot @click="isOpen=true" name="preview"> </slot>
    <div class="fixed w-full h-full items-center justify-center" v-viewer>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped></style>

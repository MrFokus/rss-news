<script setup lang="ts">
const props = defineProps<{
  content: {
    url: string;
    type: string;
    length?: string;
  };
}>();
</script>

<template>
  <div class="w-full h-full">
    <img class="w-full h-full object-cover" :src="content.url" alt="" />
    <!-- <video v-else-if="content.type.includes('video')" :src="content.url" > -->
      <!-- <source :src="content.url" type="video/mp4" />
      <source :src="content.url" type="video/webm" />
      Ваш браузер не поддерживает встроенные видео :( -->
    <!-- </video> -->
  </div>
</template>

<style scoped></style>

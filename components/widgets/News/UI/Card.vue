<script setup lang="ts">
const props = defineProps<{
  content: {
    id: string;
    title?: string;
    description?: string;
    category: string;
    img?: string;
    date?: Date;
  };
}>();
const optionsDateLocal = {
  hour: "numeric",
  minute: "numeric",
  year: "numeric",
  month: "long",
  day: "numeric",
};
</script>

<template>
  <nuxt-link
    title="Перейти к новости"
    :to="`/news/${content.id}`"
    class="flex flex-col w-full bg-white rounded-xl p-4 border gap-4 h-full justify-between"
  >
    <img
      class="w-full aspect-video object-cover rounded-lg bg-gray-200"
      :src="
        content.img ??
        'https://saneux-website.imgix.net/images/placeholder-image.png?w=2000&h=&q=90&auto=format&fit=crop&crop=edges,focalpoint&fm=png'
      "
      alt=""
    />
    <div class="flex-col gap-2">
      <p class="text-xl leading-[110&] line-clamp-2">{{ content.title }}</p>
      <p class="text-gray-500 line-clamp-2" v-html=" content.description"></p>
    </div>
    <footer class="flex justify-between">
      <p>{{ content.date?.toLocaleDateString("ru-RU", optionsDateLocal) }}</p>
      <p class="text-end text-indigo-400">{{ content.category }}</p>
    </footer>
  </nuxt-link>
</template>

<style scoped></style>

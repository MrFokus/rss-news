<script setup lang="ts">
import { NewsService } from "~/services/news";
import SlideContent from "./UI/SlideContent.vue";

const route = useRoute();
console.log(route.params.id);
const news = await NewsService.getDetailNews(route.params.id as string);
console.log(news);
</script>

<template>
  <div class="w-full flex-col gap-10 mt-7">
    <div class="flex-wrap justify-between items-center gap-x-10">
      <h1 class="text-3xl font-bold">{{ news.title }}</h1>
      <time :datetime="new Date(news.published).toISOString()">
        Опубликовано
        {{
          new Date(news.published).toLocaleDateString("ru-RU", optionsDateLocal)
        }}</time
      >
    </div>
    <swiper-container class="w-full">
      <swiper-slide v-for="gallery in news.enclosures"
        ><SlideContent :content="gallery" />
      </swiper-slide>
    </swiper-container>
    <section class="flex-col gap-8">
      <p>{{ news.description }}</p>
      <div>
        <NuxtLink class="text-indigo-600 underline" :to="news.link">Ссылка на новость РБК</NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped></style>

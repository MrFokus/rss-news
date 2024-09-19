<script setup lang="ts">
import { NewsService } from "~/services/news";
import SlideContent from "./UI/SlideContent.vue";
import NextIcon from "@/assets/img/next.svg?component";
const route = useRoute();
const news = await NewsService.getDetailNews(route.params.id as string);
const swiperRef = ref();

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
    <div class="relative w-full">
      <swiper-container
        ref="swiperRef"
        :slides-per-view="1.5"
        :space-between="50"
        class="w-full"
        v-viewer
      >
        <swiper-slide v-for="gallery in news.enclosures"
          ><SlideContent :content="gallery" />
        </swiper-slide>
      </swiper-container>
      <button class="action-swiper right-3" @click="swiperRef.swiper.slideNext()">
        <NextIcon class="w-6 *:fill-indigo-800"></NextIcon>
      </button>
      <button class="action-swiper left-3" @click="swiperRef.swiper.slidePrev()">
        <NextIcon class="w-6 *:fill-indigo-800 rotate-180"></NextIcon>
      </button>
    </div>
    <section class="flex-col gap-8">
      <p class="text-xl">{{ news.description }}</p>
      <div>
        <NuxtLink class="text-indigo-600 underline" :to="news.link"
          >Ссылка на новость РБК</NuxtLink
        >
      </div>
    </section>
  </div>
</template>

<style scoped>
.action-swiper{
    @apply absolute h-fit bottom-0 top-0 z-10 my-auto bg-white rounded-md w-8 aspect-square flex items-center justify-center border
}
</style>

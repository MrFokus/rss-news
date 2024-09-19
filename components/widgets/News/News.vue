<script setup lang="ts">
import DatePickerRange from "~/components/UI/DatePickerRange.vue";
import Card from "./UI/Card.vue";
import Pagination from "~/components/UI/Pagination.vue";
import { NewsApi } from "~/api/news";
import { NewsService } from "~/services/news";
const dateFilter = ref();
const currentPagePagination = ref(1);
const contentPage = ref();
const searchWord = ref("");
function pagination(data: any[], current: number, limit: number) {
  if (data) {
    return data.slice((current - 1) * limit, current * limit);
  }
}

function transformDateFilter(data: any[], date: { start: Date; end: Date }) {
  return data.filter(
    (el) => el.created < date.end.getTime() && el.created > date.start.getTime()
  );
}
contentPage.value = await NewsService.getAllNewsForMainPage()

function likeWords(data: any[], word: string) {
  return data.filter((el) => el.title.includes(word));
}
function filterNews(
  data: any[],
  date?: { start: Date; end: Date },
  words?: string
) {
  let result = data;

  if (date) {
    result = transformDateFilter(result, date);
  }
  if (words) {
    result = likeWords(result, words);
  }
  return result;
}
const filtredNews = computed(() =>
  filterNews(contentPage.value.data.items, dateFilter.value, searchWord.value)
);
</script>

<template>
  <div class="w-full flex-col gap-10">
    <section class="w-full justify-between">
      <DatePickerRange v-model="dateFilter"></DatePickerRange>
      <input
        class="primary w-[400px]"
        placeholder="Введите ключевые слова для поиска"
        type="text"
        v-model="searchWord"
      />
    </section>
    <ul
      v-if="contentPage?.data?.items && filtredNews.length"
      class="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-4"
    >
      <li v-for="card in pagination(filtredNews, currentPagePagination, 5)">
        <Card :content="card" />
      </li>
    </ul>
    <div v-else class="w-full items-center justify-center text-xl h-full">
      По вашему запросы новости не найдены
    </div>
    <Pagination
      v-if="contentPage?.data"
      v-model="currentPagePagination"
      :length="filtredNews.length"
      :limit="5"
    />
  </div>
</template>

<style scoped></style>

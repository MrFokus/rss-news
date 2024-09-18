<script setup lang="ts">
import NewsIcon from "@/assets/img/newspaper.svg?component"
import DatePickerRange from "~/components/UI/DatePickerRange.vue";

const dateFilter = ref()
</script>

<template>
    <div class="flex-col w-full">
        <header class="w-full border border-b-2 px-6 py-3 bg-white sticky top-0 right-0 left-0">
            <div class="w-full max-w-[1340px] mx-auto px-6">
                <div class="items-center gap-2">
                    <NewsIcon class="w-10 *:fill-indigo-600"/>
                    <h1 class="text-xl" >Тестовые новости</h1>
                </div>
            </div>
        </header>
        <main class="w-full max-w-[1340px] mx-auto px-6 py-3">
            <section class="w-full justify-between">
                <DatePickerRange v-model="dateFilter"></DatePickerRange>
                <input class="primary w-[400px]" placeholder="Введите ключевые слова для поиска" type="text">
            </section>
        </main>
    </div>
</template>

<style scoped>

</style>
<script setup lang="ts">
import NewsIcon from "@/assets/img/newspaper.svg?component"

</script>

<template>
     <div class="flex-col w-full">
        <header class="w-full border border-b-2 px-6 py-3 bg-white sticky top-0 right-0 left-0 z-10">
            <div class="w-full max-w-[1340px] mx-auto px-6">
                <NuxtLink to="/" class="flex items-center gap-2">
                    <NewsIcon class="w-10 *:fill-indigo-600"/>
                    <h1 class="text-xl" >Тестовые новости</h1>
                </NuxtLink>
            </div>
        </header>
        <main class="w-full flex-1 max-w-[1340px] mx-auto px-6 py-3">
            <slot/>
        </main>
        <footer class="w-full border border-b-2 px-6 py-3 bg-white">
            <p>Сайт создан для HiSmith</p>
        </footer>
    </div>
</template>

<style scoped>

</style>
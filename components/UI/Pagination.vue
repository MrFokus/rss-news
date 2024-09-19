<script setup lang="ts">
const props = defineProps<{
    length:number,
    limit:number,
}>()
const emit = defineEmits<{
    setPage:[number]
}>()
const modelValue = defineModel<number>({default:1})
function setPage(page:number){
    modelValue.value = page
    emit('setPage', page)
}
</script>

<template>
    <ul class="w-full justify-end flex gap-2 items-center">
        <li v-for="(i) in Math.round(length/limit)" :key="i">
            <button :class="[modelValue == i?'current':'']" class="bg-white border rounded-md w-8 aspect-square" @click="setPage(i)">
                {{ i }}
            </button>
        </li>
    </ul>
</template>


<style scoped>
.current{
    @apply bg-indigo-100 border-indigo-600
}
</style>
<script setup lang="ts">
import CalendarIcon from "@/assets/img/calendar-range.svg?component";
const modelValue = defineModel<{ start: Date; end: Date }>();
import { vOnClickOutside } from "@vueuse/components";
const isOpen = ref(false);
const transformSelectData = computed(() => {
  let result = "";
  if (modelValue.value?.start) {
    result += formatDatePoint(modelValue.value.start);
  }
  if (modelValue.value?.end) {
    result += ` - ${formatDatePoint(modelValue.value.end)}`;
  }
  return result;
});
</script>

<template>
  <button
    placeholder="Выберите даты для фильтрации"
    @click="isOpen = !isOpen"
    v-on-click-outside="() => (isOpen = false)"
    class="relative flex gap-2 primary w-[250px] justify-between"
  >
    <span>{{ transformSelectData ? transformSelectData : "Не выбрано" }}</span>
    <CalendarIcon class="w-6" />
    <VDatePicker
      :attributes="[
        {
          key: 'today',
          dot:true,
          dates: new Date(),
        },
      ]"
      @click.stop
      v-if="isOpen"
      class="!absolute top-[110%] left-0"
      mode="dateTime"
      v-model.range="modelValue"
      :dot="true"
      is24hr
    />
  </button>
</template>

<style scoped></style>

<script setup lang="ts">
import { Movie } from "../lib/types";
import EditFrom from "./EditForm.vue";

interface Props {
  isOpen: boolean;
  id: number;
  name: string;
  year: number;
  runtime: number;
  categories: Array<string>;
  releaseDate: string;
  director: string;
  writer: Array<string> | string;
  actors: Array<string>;
  storyline?: string;
}

const props = defineProps<Props>();

const emits = defineEmits<{
  (e: "close", id: number): void;
}>();
</script>

<template>
  <div v-if="isOpen" class="fixed z-10 inset-0 overflow-y-auto">
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >
      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-12 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <EditFrom v-bind="props" @close="$emit('close', id)" />
      </div>
    </div>
  </div>
</template>

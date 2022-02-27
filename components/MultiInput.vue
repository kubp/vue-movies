<script setup lang="ts">
import { ref, Ref } from "vue";

interface Props {
  items?: string[];
  name: string;
}

const props = defineProps<Props>();

const emits = defineEmits<{
  (e: "removeItem", id: number, index: number): void;
  (e: "addItem", id: string, input: string): void;
}>();

const input: Ref<string>= ref("");

const enter = (e) => {
  emits("addItem", props.name, input.value);
  input.value = "";
};
</script>

<template>
  <div>
    <div flex>
      <div>
        <button
          class="mt-1 ml-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          v-for="(item, index) in items"
          :key="item"
          type="button"
          @click="$emit('removeItem', name, index)"
        >
          {{ item }}
        </button>
        <input
          class="mt-2 appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="movie-name"
          type="text"
          v-on:keydown.enter.prevent="enter"
          v-model="input"
        />
      </div>
    </div>
  </div>
</template>

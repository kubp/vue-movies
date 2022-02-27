<script setup lang="ts">
interface Props {
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
  isExpanded?: boolean;
}

const props = defineProps<Props>();
const emits = defineEmits<{
  (e: "expand", id: number): void;
  (e: "openEdit", id: number): void;
}>();

const allCategories = computed(() => {
  return props.categories.join(" / ");
});

const getWriter = computed(() => {
  // TODO: use mapper instead - everything to array
  if (Array.isArray(props.writer)) {
    return props.writer.join(", ");
  }
  return props.writer;
});
</script>

<template>
  <div class="rounded bg-white border-gray-200 shadow-md overflow-hidden mt-5">
    <div class="m-4 flex justify-between">
      <div>
        <span class="font-bold">{{ name }} ({{ year }})</span>
        <span class="block text-gray-500 text-sm"
          >{{ allCategories }}, {{ runtime }} min</span
        >
        <div>
          <span class="text-gray-500 text-sm font-bold">Director </span>
          <span class="text-gray-500 text-sm ml-2">{{ director }} </span>
        </div>

        <div v-if="isExpanded">
          <div>
            <span class="text-gray-500 text-sm font-bold">Writers </span>
            <span class="text-gray-500 text-sm ml-2">{{ getWriter }}</span>
          </div>

          <div>
            <span class="text-gray-500 text-sm font-bold">Actors </span>
            <span class="text-gray-500 text-sm ml-2">{{
              actors.join(", ")
            }}</span>
          </div>

          <div>
            <span class="text-gray-500 text-sm font-bold">Released date </span>
            <span class="text-gray-500 text-sm ml-2">{{ releaseDate }}</span>
          </div>

          <span class="block text-gray-500 text-sm mt-2">{{ storyline }}</span>
        </div>
      </div>
      <div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          @click="$emit('expand', id)"
        >
          More
        </button>
        <button
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-full shadow ml-2"
          @click="$emit('openEdit', id)"
        >
          Edit
        </button>
      </div>
    </div>
  </div>
</template>

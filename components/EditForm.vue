<script setup lang="ts">
import { Movie } from "../lib/types";
import { ref, Ref } from "vue";
import MultiInput from "./MultiInput.vue";

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

const movieEdit: Ref<Movie> = ref({ ...props });

const response = ref(null);
const error = ref(null);

const onSubmit = () => {
  fetch("/api/editMovies", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movieEdit.value),
  })
    .then((res) => res.json())
    .then((json) => (response.value = json))
    .catch((err) => (error.value = err));
};

const removeItem = (name, index) => {
  movieEdit.value[name] = movieEdit.value.actors.filter((a, i) => i !== index);
};

const addItem = (name, val) => {
  movieEdit.value[name] = [...movieEdit.value.actors, val];
};
</script>

<template>
  <form @submit.prevent="onSubmit" class="w-full max-w-lg">
    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <div class="sm:flex sm:items-start">
        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <h3
            class="text-lg leading-6 font-medium text-gray-900"
            id="modal-title"
          >
            Edit movie
          </h3>
          <div class="mt-2">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3 w-96">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="movie-name"
                >
                  Movie name
                </label>
                <input
                  class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="movie-name"
                  type="text"
                  v-model="movieEdit.name"
                />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3 w-96">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="movie-name"
                >
                  Movie name
                </label>
                <input
                  class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="movie-name"
                  type="text"
                  v-model="movieEdit.name"
                />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3 w-96">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="movie-name"
                >
                  Movie name
                </label>
                <MultiInput
                  :items="movieEdit.actors"
                  :name="'actors'"
                  @removeItem="removeItem"
                  @addItem="addItem"
                />
              </div>
            </div>

            <div
              class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
              v-if="error !== null"
            >
              <span class="block sm:inline">Error occurred</span>
            </div>

            <div
              class="bg-blue-100 border border-blue-400 text-grey-700 px-4 py-3 rounded relative"
              role="alert"
              v-if="response !== null"
            >
              <span class="block sm:inline">Success</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
      <button
        type="submit"
        class="w-full inline-flex justify-center rounded-full border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
      >
        Save Changes
      </button>
      <button
        type="button"
        class="mt-3 w-full inline-flex justify-center rounded-full border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        @click="$emit('close', id)"
      >
        Cancel
      </button>
    </div>
  </form>
</template>

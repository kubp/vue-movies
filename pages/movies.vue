<script setup lang="ts">
import { ref, onMounted, reactive, Ref } from "vue";

import EditModal from "../components/EditModal.vue";
import MovieDetail from "../components/MovieDetail.vue";

import { Movie } from "../lib/types";
import { moviesMapper } from "../lib/moviesMapper";

const movies: Ref<Array<Movie>> = ref([]);
const detailOpenedId: Ref<number> = ref(0);
const editOpenedId: Ref<number> = ref(0);
const movieEdit: Ref<Movie> = ref();

async function getMovies() {
  const response = await fetch("/api/movies");
  const data = await response.json();

  movies.value = moviesMapper(data);
}

onMounted(async () => {
  getMovies();
});

const expand = (id: number) => {
  detailOpenedId.value = id;
};

const openEdit = (id: number) => {
  editOpenedId.value = id;
  movieEdit.value = movies.value.filter((m) => m.id === id)[0];
};
</script>

<template>
  <main class="px-16 py-6">
    <header>
      <h2 class="text-gray-700 text-6xl font-semibold">Movies</h2>
      <h3 class="text-2xl font-semibold">Page</h3>
    </header>

    <div>
      <h4 class="font-bold pb-2 mt-12 border-b border-gray-200">All movies</h4>

      <div class="mt-8">
        <MovieDetail
          v-for="movie in movies"
          :key="movie.id"
          :id="movie.id"
          :name="movie.name"
          :year="movie.year"
          :runtime="movie.runtime"
          :categories="movie.categories"
          :releaseDate="movie.releaseDate"
          :director="movie.director"
          :writer="movie.writer"
          :actors="movie.actors"
          :storyline="movie.storyline"
          :isExpanded="movie.id == detailOpenedId"
          @expand="expand"
          @openEdit="openEdit"
        />
      </div>
    </div>
  </main>
  <div v-if="movieEdit">
    {{ movieEdit }}
    <EditModal
      :isOpen="editOpenedId !== 0"
      @close="editOpenedId = 0"
      v-bind="movieEdit"
    />
  </div>
</template>

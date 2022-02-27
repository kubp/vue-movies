<script setup lang="ts">
import { ref, onMounted, reactive, Ref } from "vue";
import MovieDetail from "../components/MovieDetail.vue";
import {Movie} from "../lib/types"
// reactive state
const count: Ref<number> = ref(0);

// functions that mutate state and trigger updates
function increment() {
  count.value++;
}

interface Author {
  name: string;
  books?: Array<string>;
}



const author: Author = reactive({
  name: "John Doe",
  books: [
    "Vue 2 - Advanced Guide",
    "Vue 3 - Basic Guide",
    "Vue 4 - The Mystery",
  ],
});

const movies:Ref<Movie[]> = ref([]);
const detailOpenedId:Ref<number> = ref(0);

async function getMovies() {
  // GET request using fetch with async/await
  const response = await fetch("/api/movies");
  const data = await response.json();
  console.log(data);
  
  movies.value = data;
}

// lifecycle hooks
onMounted(async () => {
  getMovies();
  console.log(`The initial count is ${count}.`);
});

// Form

let input = ref("sss");

const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? "Yes" : "No";
});
</script>


<template>
  <div
    class="
      flex flex-col
      justify-center
      w-full
      h-screen
      max-w-3xl
      mx-auto
      space-y-2
    "
  >
    <div>
      <button @click="increment">Count is: {{ count }}</button>

      <button v-bind:disabled="count === 2" v-if="count === 2">Button</button>

      {{ publishedBooksMessage }}

      <li v-for="item in items" v-bind:key="item.message">
        {{ item.message }}
      </li>

      <br />
      <br />

      <p>Message is: {{ input }}</p>
      <input v-model="input" placeholder="edit me" />

      <br />
      <br />
      <MovieDetail v-for="movie in movies" :key="movie.id" :name="movie.name" />
    </div>
  </div>
</template>

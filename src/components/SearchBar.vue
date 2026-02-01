<script setup>
import data from '../data/manga.json'
import { ref } from 'vue'

const q = ref('')
const result = ref([])

function search() {
  result.value = data.filter(m =>
    m.title.toLowerCase().includes(q.value.toLowerCase())
  )
}
</script>

<template>
  <div class="relative">
    <input
      v-model="q"
      @input="search"
      placeholder="Search manga..."
      class="bg-[#1a1a1a] rounded px-2 py-1 text-sm"
    />

    <div v-if="q && result.length"
      class="absolute top-full left-0 right-0 bg-[#111] rounded mt-2">
      <a v-for="m in result"
        :key="m.slug"
        :href="`/manga/${m.slug}`"
        class="block px-3 py-2 hover:bg-[#222]">
        {{ m.title }}
      </a>
    </div>
  </div>
</template>
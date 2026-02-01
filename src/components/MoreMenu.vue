<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>

<template>
  <button @click="open = true">•••</button>

  <div v-if="open" class="fixed inset-0 bg-black/50">
    <div class="absolute bottom-0 w-full bg-[#111] rounded-t-xl p-4">
      <button class="block w-full py-2">Bookmark</button>
      <button class="block w-full py-2">Share</button>
      <button class="block w-full py-2 text-red-500"
        @click="open = false">
        Close
      </button>
    </div>
  </div>
</template>
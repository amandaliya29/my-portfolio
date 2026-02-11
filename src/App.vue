<script setup>
import Navbar from './components/Navbar.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-white text-black dark:bg-[#282C33] dark:text-white transition-colors duration-300 font-mono flex flex-col">
    <Navbar />
    <main class="max-w-screen-xl mx-auto px-4 pt-24 pb-12 flex-grow w-full">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>
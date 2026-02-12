<script setup>
import { useDark, useToggle } from '@vueuse/core'
import { ref } from 'vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const links = [
  { name: 'home', href: '#home' },
  { name: 'works', href: '#projects' },
  { name: 'about-me', href: '#about' },
  { name: 'contacts', href: '#contact' },
]

const isOpen = ref(false)
</script>

<template>
  <nav class="fixed top-0 w-full z-50 bg-white dark:bg-[#282C33] border-b border-transparent dark:border-gray-700 transition-colors duration-300">
    <div class="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center bg-white dark:bg-[#282C33]">
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-2 font-bold text-lg z-50">
        <span>Ashish M.</span>
      </router-link>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-8">
        <router-link 
          v-for="link in links" 
          :key="link.name" 
          :to="{ path: '/', hash: link.href }"
          class="text-gray-500 hover:text-black dark:text-[#ABB2BF] dark:hover:text-white transition-colors"
        >
          <span class="text-[#C778DD]">#</span>{{ link.name }}
        </router-link>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="isOpen = !isOpen" class="md:hidden p-2 z-50 focus:outline-none">
        <div class="space-y-1.5">
          <span :class="{'rotate-45 translate-y-2': isOpen}" class="block w-6 h-0.5 bg-black dark:bg-white transition-transform duration-300"></span>
          <span :class="{'opacity-0': isOpen}" class="block w-6 h-0.5 bg-black dark:bg-white transition-opacity duration-300"></span>
          <span :class="{'-rotate-45 -translate-y-2': isOpen}" class="block w-6 h-0.5 bg-black dark:bg-white transition-transform duration-300"></span>
        </div>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div 
      :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
      class="fixed inset-0 top-0 left-0 w-full h-screen bg-white dark:bg-[#282C33] transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-24 px-8 z-40"
    >
      <div class="flex flex-col gap-8 text-2xl font-medium">
        <router-link 
          v-for="link in links" 
          :key="link.name" 
          :to="{ path: '/', hash: link.href }"
          @click="isOpen = false"
          class="hover:text-[#C778DD] transition-colors"
        >
          <span class="text-[#C778DD]">#</span>{{ link.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

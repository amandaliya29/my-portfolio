<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="border border-gray-600 flex flex-col bg-white dark:bg-transparent transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-[#C778DD]/20 duration-300 glow-on-hover">
    <div class="h-48 border-b border-gray-600 overflow-hidden relative group shrink-0">
         <img :src="project.img" :alt="project.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
         <router-link :to="{ name: 'project-detail', params: { id: project.id }}" class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span class="text-white border border-white px-4 py-2 text-sm">View Details</span>
         </router-link>
    </div>
    <div class="p-2 border-b border-gray-600 text-gray-400 text-sm">
      {{ project.tags.join(' ') }}
    </div>
    <div class="p-4 flex flex-col flex-grow">
      <h3 class="text-2xl font-medium mb-4">{{ project.title }}</h3>
      <p class="text-gray-400 mb-6 flex-grow delay-100">{{ project.desc }}</p>
      <div class="flex gap-4 mt-auto">
        <a :href="project.links.live" class="px-4 py-2 border border-[#C778DD] text-sm hover:bg-[#C778DD]/10 transition-colors shimmer-btn delay-200">View on GitHub &lt;~></a>
        <a v-if="project.links.cached" :href="project.links.cached" class="px-4 py-2 border border-gray-500 text-gray-500 hover:text-white transition-colors shimmer-btn delay-300">View on GitHub >=</a>
      </div>
    </div>
  </div>
</template>

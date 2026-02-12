<script setup>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { projects } from '@/data/projects'

const route = useRoute()
const router = useRouter()

const project = computed(() => {
  return projects.find(p => p.id === route.params.id)
})

onMounted(() => {
  if (!project.value) {
    router.push('/projects')
  }
  window.scrollTo(0, 0)
})
</script>

<template>
  <div v-if="project" class="py-10 md:py-0 px-8 max-w-screen-xl mx-auto min-h-screen">

    <!-- Header Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
      <div class="reveal">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">{{ project.title }}</h1>
        <div class="flex flex-wrap gap-2 mb-6">
          <span v-for="tag in project.tags" :key="tag" class="px-3 py-1 border border-gray-600 text-sm text-gray-400">
            {{ tag }}
          </span>
        </div>
        <p class="text-xl text-gray-300 leading-relaxed mb-8">
          {{ project.fullDesc }}
        </p>
        <div class="flex gap-4">
          <a :href="project.links.live" target="_blank" class="px-8 py-3 border border-[#C778DD] text-white hover:bg-[#C778DD]/10 transition-colors shimmer-btn">
            View Repository
          </a>
        </div>
      </div>
      <div class="reveal delay-200">
        <div class="border border-radius-20 border-gray-600 p-2 bg-gray-800/20 glow-on-hover">
          <img :src="project.img" :alt="project.title" class="w-full h-auto object-cover border border-gray-700" />
        </div>
      </div>
    </div>

    <!-- Content Sections -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <!-- Left Column: Features & Purpose -->
      <div class="lg:col-span-2 space-y-12">
        <!-- Features -->
        <section class="reveal">
          <h2 class="text-2xl font-medium mb-6 flex items-center gap-2">
            <span class="text-[#C778DD]">#</span>features
          </h2>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li v-for="feature in project.features" :key="feature" class="p-4 border border-gray-600 bg-gray-800/10 flex items-start gap-3">
              <span class="text-[#C778DD] mt-1">~</span>
              <span class="text-gray-400">{{ feature }}</span>
            </li>
          </ul>
        </section>

        <!-- Advanced Capabilities -->
        <section v-if="project.advancedFeatures" class="reveal delay-100">
          <h2 class="text-2xl font-medium mb-6 flex items-center gap-2">
            <span class="text-[#C778DD]">#</span>{{ project.advancedFeatures.title.toLowerCase().replace(/ /g, '-') }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="item in project.advancedFeatures.items" :key="item.name" class="p-6 border border-gray-600 bg-gray-800/10">
              <h3 class="text-[#C778DD] font-bold mb-3">{{ item.name }}</h3>
              <p class="text-gray-400 text-sm leading-relaxed">{{ item.desc }}</p>
            </div>
          </div>
        </section>

        <!-- Purpose -->
        <section class="reveal delay-200">
          <h2 class="text-2xl font-medium mb-6 flex items-center gap-2">
            <span class="text-[#C778DD]">#</span>project-purpose
          </h2>
          <div class="p-6 border-l-4 border-[#C778DD] bg-gray-800/5 text-gray-400 leading-relaxed italic">
            {{ project.purpose }}
          </div>
        </section>
      </div>

      <!-- Right Column: Tech Stack & Architecture -->
      <div class="space-y-12">
        <!-- Tech Stack -->
        <section class="reveal">
          <h2 class="text-2xl font-medium mb-6 flex items-center gap-2">
            <span class="text-[#C778DD]">#</span>tech-stack
          </h2>
          <div class="space-y-6">
            <div v-for="(stack, key) in project.techStack" :key="key" class="border border-gray-600">
              <h3 class="p-3 border-b border-gray-600 font-bold capitalize bg-gray-800/30">{{ key }}</h3>
              <div class="p-3 flex flex-wrap gap-2">
                <span v-for="tech in stack" :key="tech" class="text-xs text-gray-400 bg-gray-700/30 px-2 py-1">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    </div>
  </div>
</template>

<style scoped>
.shimmer-btn {
  position: relative;
  overflow: hidden;
}
</style>

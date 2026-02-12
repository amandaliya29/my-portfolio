<script setup>
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard.vue'
</script>

<template>
  <div id="projects" class="py-10 md:py-6 px-8 max-w-screen-xl mx-auto">
    <div class="mb-12 reveal">
      <h2 class="text-3xl font-medium flex items-center gap-0 text-white">
        <span class="text-[#C778DD]">/</span>projects
      </h2>
      <p class="text-gray-400 mt-2">List of my projects</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
      <ProjectCard 
        v-for="project in projects" 
        :key="project.id" 
        :project="project" 
      />
    </div>
  </div>
</template>

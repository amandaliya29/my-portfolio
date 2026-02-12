<script setup>
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard.vue'

const visibleProjects = projects.filter(p => !p.isSmall)
</script>

<template>
  <section id="projects" class="py-10 md:py-20 reveal">
    <div class="flex items-center justify-between mb-8 md:mb-12 mt-10">
      <h2 class="text-3xl font-medium flex items-center gap-4">
        <span class="text-[#C778DD]">#</span>projects
        <span class="h-px w-64 bg-[#C778DD] hidden md:block"></span>
      </h2>
      <router-link to="/projects" class="text-gray-400 hover:text-white transition-colors">View all ~~></router-link>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCard 
        v-for="project in visibleProjects" 
        :key="project.id" 
        :project="project" 
      />
    </div>
  </section>
</template>


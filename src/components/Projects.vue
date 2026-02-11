<script setup>
const projects = [
  {
    title: 'ChertNodes',
    tags: 'HTML SCSS Python Flask',
    desc: 'Minecraft servers hosting',
    links: { live: '#', cached: '#' },
    img: 'https://placehold.co/600x400/282C33/C778DD?text=ChertNodes'
  },
  {
    title: 'ProtectX',
    tags: 'React Express Discord.js Node.js',
    desc: 'Discord anti-crash bot',
    links: { live: '#' },
    img: 'https://placehold.co/600x400/282C33/C778DD?text=ProtectX'
  },
  {
    title: 'Kahoot Answers Viewer',
    tags: 'CSS Express Node.js',
    desc: 'Get answers to your kahoot quiz',
    links: { live: '#' },
    img: 'https://placehold.co/600x400/282C33/C778DD?text=Kahoot+Answers'
  }
]
</script>

<template>
  <section id="projects" class="py-20">
    <div class="flex items-center justify-between mb-12">
      <h2 class="text-3xl font-medium flex items-center gap-4">
        <span class="text-[#C778DD]">#</span>projects
        <span class="h-px w-64 bg-[#C778DD] hidden md:block"></span>
      </h2>
      <a href="#" class="text-gray-400 hover:text-white transition-colors">View all ~~></a>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="project in projects" :key="project.title" class="border border-gray-600 flex flex-col bg-white dark:bg-transparent transition-transform hover:-translate-y-1 duration-300">
        <div class="h-48 border-b border-gray-600 overflow-hidden relative group shrink-0">
             <!-- Using a placeholder pattern if image fails to load/is not provided -->
             <img :src="project.img" :alt="project.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        </div>
        <div class="p-2 border-b border-gray-600 text-gray-400 text-sm">
          {{ project.tags }}
        </div>
        <div class="p-4 flex flex-col flex-grow">
          <h3 class="text-2xl font-medium mb-4">{{ project.title }}</h3>
          <p class="text-gray-400 mb-6 flex-grow">{{ project.desc }}</p>
          <div class="flex gap-4 mt-auto">
            <a :href="project.links.live" class="px-4 py-2 border border-[#C778DD] text-sm hover:bg-[#C778DD]/10 transition-colors">Live &lt;~></a>
            <a v-if="project.links.cached" :href="project.links.cached" class="px-4 py-2 border border-gray-500 text-gray-500 hover:text-white transition-colors">Cached >=</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

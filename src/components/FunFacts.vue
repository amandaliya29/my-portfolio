<script setup>
const facts = [
  'I like winter more than summer',
  'I enjoy building mobile apps more than using them',
  'My best coding ideas come late at night',
  'I’ve rewritten the same component more times than I can count',
  'Coding with music on makes everything smoother',
  'Seeing an app run without errors feels like a small victory',
  'I deploy first, panic later'
]
</script>

<template>
  <section id="fun-facts" class="py-10 md:py-10 reveal">
    <div class="flex items-center justify-between mb-8">
      <h2 class="text-3xl font-medium flex items-center gap-4">
        <span class="text-[#C778DD]">#</span>my-fun-facts
      </h2>
    </div>

    <div class="flex flex-col md:flex-row gap-12 items-start">
      <!-- Facts Tags -->
      <div class="flex flex-wrap gap-4 w-full md:w-2/3">
        <div 
          v-for="(fact, index) in facts" 
          :key="index"
          class="border border-gray-600 px-4 py-2 text-gray-400 hover:text-white hover:border-white transition-colors duration-300"
        >
          {{ fact }}
        </div>
      </div>

       <!-- Decorative Graphic -->
       <div class="w-full md:w-1/3 flex justify-center md:justify-end relative">
          <div class="relative w-32 h-32">
             <div class="absolute top-0 right-0 grid grid-cols-5 gap-2">
                <div v-for="i in 25" :key="i" class="w-1 h-1 bg-gray-500 rounded-full"></div>
             </div>
             <div class="absolute bottom-5 left-5 border border-gray-600 w-16 h-16 transform rotate-12"></div>
          </div>
       </div>
    </div>
  </section>
</template>

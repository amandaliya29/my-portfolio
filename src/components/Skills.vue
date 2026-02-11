<template>
  <section id="skills" class="py-20">
    <div class="flex items-center justify-between mb-12">
      <h2 class="text-3xl font-medium flex items-center gap-4">
        <span class="text-[#C778DD]">#</span>skills
        <span class="h-px w-64 bg-[#C778DD] hidden md:block"></span>
      </h2>
    </div>

    <div class="flex flex-col md:flex-row gap-8 items-start">
      <!-- Decorative Graphic -->
      <div class="w-full md:w-1/3 min-h-[200px] relative hidden md:block self-center lg:self-start">
         <div class="absolute top-0 left-8 border border-gray-600 w-24 h-24"></div>
         <div class="absolute bottom-10 right-10 border border-gray-600 w-16 h-16"></div>
         <div class="absolute top-1/2 left-1/4 grid grid-cols-5 gap-2">
            <div v-for="i in 25" :key="i" class="w-1 h-1 bg-gray-500 rounded-full"></div>
         </div>
      </div>

      <!-- Skills Grid -->
      <div class="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        
        <div class="border border-gray-600 h-fit hover:border-white transition-colors duration-300">
          <h3 class="font-bold border-b border-gray-600 p-2 text-black dark:text-white">Languages</h3>
          <p class="p-2 text-gray-500 dark:text-gray-400">JavaScript Java</p>
        </div>

        <div class="border border-gray-600 h-fit hover:border-white transition-colors duration-300">
          <h3 class="font-bold border-b border-gray-600 p-2 text-black dark:text-white">Databases</h3>
          <p class="p-2 text-gray-500 dark:text-gray-400">SQLite</p>
        </div>

        <div class="border border-gray-600 h-fit hover:border-white transition-colors duration-300">
          <h3 class="font-bold border-b border-gray-600 p-2 text-black dark:text-white">Tools</h3>
          <p class="p-2 text-gray-500 dark:text-gray-400">VSCode GitHub Postman Git</p>
        </div>

        <div class="border border-gray-600 h-fit hover:border-white transition-colors duration-300">
          <h3 class="font-bold border-b border-gray-600 p-2 text-black dark:text-white">Other</h3>
          <p class="p-2 text-gray-500 dark:text-gray-400">HTML CSS TailwindCSS Redux</p>
        </div>

        <div class="border border-gray-600 h-fit hover:border-white transition-colors duration-300">
          <h3 class="font-bold border-b border-gray-600 p-2 text-black dark:text-white">Frameworks</h3>
          <p class="p-2 text-gray-500 dark:text-gray-400">React Native</p>
        </div>

      </div>
    </div>
  </section>
</template>

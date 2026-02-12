<script setup>
</script>

<template>
  <section id="home" class="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 py-20 md:py-0">
    <!-- Text Content -->
    <div class="flex-1 space-y-5 md:space-y-8 text-center md:text-left reveal">
      <h1 class="text-3xl md:text-5xl font-bold leading-tight">
        Ashish Mandaliya is a <span class="text-[#C778DD]">React Native</span> and <span class="text-[#C778DD]">Mobile Application Developer</span>
      </h1>
      
      <p class="text-gray-500 dark:text-[#ABB2BF] max-w-lg mx-auto md:mx-0 text-sm md:text-base">
        He crafts responsive mobile applications where technologies meet creativity.
      </p>
      
      <router-link to="/contacts" class="inline-block px-6 py-2 border border-[#C778DD] text-black dark:text-white hover:bg-[#C778DD]/10 transition-colors duration-300">
        Contact me!!
      </router-link>
    </div>

    <!-- Image / Graphic -->
    <div class="flex-1 relative flex justify-center w-full max-w-sm md:max-w-none reveal delay-300">
      <!-- Decorative Logo/Elements -->
      <div class="relative z-10 w-64 h-64 md:w-80 md:h-80 bg-gray-200 dark:bg-gray-700/50 rounded-full overflow-hidden flex items-center justify-center border-4 border-gray-100 dark:border-gray-800 animate-float">
         <img src="@/assets/images/image.png" alt="Ashish Mandaliya" class="w-full h-full object-cover" />
      </div>

      <!-- Background decorative elements -->
      <div class="absolute top-10 right-10 w-20 h-20 border-2 border-[#C778DD] rounded-full opacity-50 animate-pulse delay-500"></div>
      <div class="absolute bottom-5 left-5 text-[#C778DD] animate-float delay-200">
         <svg width="60" height="60" viewBox="0 0 100 100" fill="currentColor">
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
               <circle cx="2" cy="2" r="2" class="text-gray-400 dark:text-gray-600" />
            </pattern>
            <rect width="100" height="100" fill="url(#dots)" />
         </svg>
      </div>
    </div>
  </section>
</template>

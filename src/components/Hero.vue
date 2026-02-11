<script setup>
</script>

<template>
  <section id="home" class="flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-20  md:py-20">
    <!-- Text Content -->
    <div class="flex-1 space-y-8 text-center md:text-left">
      <h1 class="text-4xl md:text-5xl font-bold leading-tight">
        Ashish Mandaliya is a <span class="text-[#C778DD]">React Native</span> and <span class="text-[#C778DD]">Mobile Application Developer</span>
      </h1>
      
      <p class="text-gray-500 dark:text-[#ABB2BF] max-w-lg mx-auto md:mx-0">
        He crafts responsive mobile applications where technologies meet creativity.
      </p>
      
      <a href="#contact" class="inline-block px-6 py-2 border border-[#C778DD] text-black dark:text-white hover:bg-[#C778DD]/10 transition-colors duration-300">
        Contact me!!
      </a>
    </div>

    <!-- Image / Graphic -->
    <div class="flex-1 relative flex justify-center w-full max-w-sm md:max-w-none">
      <!-- Decorative Logo/Elements mimicking the design -->
      <div class="relative z-10 w-64 h-64 md:w-80 md:h-80 bg-gray-200 dark:bg-gray-700/50 rounded-full overflow-hidden flex items-center justify-center border-4 border-gray-100 dark:border-gray-800">
         <img src="@/assets/images/image.png" alt="Ashish Mandaliya" class="w-full h-full object-cover transition-all duration-500" />
      </div>

      <!-- Background decorative elements -->
      <div class="absolute top-10 right-10 w-20 h-20 border-2 border-[#C778DD] rounded-full opacity-50 animate-pulse"></div>
      <div class="absolute bottom-5 left-5 text-[#C778DD]">
         <svg width="60" height="60" viewBox="0 0 100 100" fill="currentColor">
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
               <circle cx="2" cy="2" r="2" class="text-gray-400 dark:text-gray-600" />
            </pattern>
            <rect width="100" height="100" fill="url(#dots)" />
         </svg>
      </div>
      
      <!-- "Currently working on" badge -->
      <div class="absolute -bottom-0 z-10 right-1/2 translate-x-1/2 md:bg-[#282C33] bg-white border border-gray-600 p-2 flex items-center gap-2 text-sm text-gray-400">
        <span class="w-4 h-4 bg-[#C778DD]"></span>
        Currently working on <strong class="text-black dark:text-white">Portfolio</strong>
      </div>
    </div>
  </section>
</template>

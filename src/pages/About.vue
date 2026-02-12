<script setup>
import Skills from '@/components/Skills.vue'
import FunFacts from '@/components/FunFacts.vue'
</script>

<template>
  <div id="about" class="py-10 md:py-10 px-8 max-w-screen-xl mx-auto">
    <!-- Header -->
    <div class="mb-12 reveal">
      <h2 class="text-3xl font-medium flex items-center gap-0 text-white">
        <span class="text-[#C778DD]">/</span>about-me
      </h2>
      <p class="text-gray-400 mt-2">Who am I?</p>
    </div>

    <!-- Introduction -->
    <div class="flex flex-col md:flex-row gap-12 items-center mb-22 reveal">
      <div class="w-full md:w-1/2 space-y-6 text-gray-400">
        <p>Hello, I'm Ashish Mandaliya!</p>
        <p>
          I am a React Native Mobile Application Developer with around 6 months of hands-on experience in building responsive and user-friendly mobile applications. I focus on writing clean, efficient code and creating smooth mobile experiences using modern development practices.
        </p>
        <p>
         I completed my BCA in 2025 and have been actively growing my skills in React Native, Redux, JavaScript, and Tailwind CSS, along with tools like GitHub, Postman, VS Code, and Android Studio.My aim is to build impactful mobile applications.
        </p>
      </div>

      <div class="w-full md:w-1/2 relative flex justify-center">
         <div class="relative w-full max-w-sm">
            <img src="@/assets/images/image2.jpeg" alt="Ashish Mandaliya" class="w-full border-b-2 border-[#C778DD]" />
            <!-- Decorations -->
            <div class="absolute -bottom-10 left-0 grid grid-cols-5 gap-2">
               <div v-for="i in 25" :key="i" class="w-1 h-1 bg-[#C778DD] rounded-full"></div>
            </div>
            <div class="absolute top-10 -right-5 grid grid-cols-5 gap-2">
               <div v-for="i in 20" :key="i" class="w-1 h-1 bg-gray-500 rounded-full"></div>
            </div>
         </div>
      </div>
    </div>

    <!-- Skills -->
    <Skills />

    <!-- Fun Facts -->
    <FunFacts />
  </div>
</template>
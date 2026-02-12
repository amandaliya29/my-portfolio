<template>
  <section id="about" class="py-10 md:py-20 reveal">
    <div class="flex items-center justify-between mb-8 md:mb-12 mt-10">
      <h2 class="text-3xl font-medium flex items-center gap-4">
        <span class="text-[#C778DD]">#</span>about-me
        <span class="h-px w-64 bg-[#C778DD] hidden md:block"></span>
      </h2>
    </div>

    <div class="flex flex-col md:flex-row gap-12 items-center">
      <div class="w-full md:w-1/2 space-y-6 text-gray-400">
        <p>Hello, I'm Ashish Mandaliya!</p>
        <p>
          I am a React Native Mobile Application Developer with 6 months of experience. I specialize in building responsive and user-friendly mobile applications using React Native.
        </p>
        <p>
          My technical stack includes React Native, Redux, JavaScript, Tailwind CSS, and tools like GitHub, Postman, VS Code and Android Studio. I am passionate about creating seamless mobile experiences.
        </p>
        <router-link to="/about" class="inline-block px-6 py-2 border border-[#C778DD] text-white hover:bg-[#C778DD]/10 transition-colors">
          Read more ->
        </router-link>
      </div>

      <div class="w-full md:w-1/2 relative flex justify-center">
         <div class="relative w-full max-w-sm">
            <img 
              src="@/assets/images/image2.jpeg" 
              alt="Ashish Mandaliya" 
              class="w-full border-b-2 border-[#C778DD]" 
              width="480"
              height="480"
              loading="lazy"
              decoding="async"
            />

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
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import Navbar from './components/Navbar.vue'
import AppFooter from './components/AppFooter.vue'
import SocialSidebar from './components/SocialSidebar.vue'

const updateScrollProgress = () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const scrolled = (winScroll / height) * 100
  const progressElement = document.getElementById('scroll-progress')
  if (progressElement) {
    progressElement.style.width = scrolled + '%'
  }
}

const initReveal = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.05 })

  requestAnimationFrame(() => {
    const targets = document.querySelectorAll('.reveal:not(.active)')
    targets.forEach(el => observer.observe(el))
  })
}

onMounted(() => {
  initReveal()
  window.addEventListener('scroll', updateScrollProgress, { passive: true })

  // Initialize Crisp on interaction (improves bfcache and TBT)
  const crispWebsiteId = import.meta.env.VITE_CRISP_WEBSITE_ID
  if (crispWebsiteId && crispWebsiteId !== 'your-crisp-website-id-here') {
    const initCrisp = () => {
      if (window.$crisp) return
      
      window.$crisp = []
      window.CRISP_WEBSITE_ID = crispWebsiteId
      const d = document
      const s = d.createElement('script')
      s.src = 'https://client.crisp.chat/l.js'
      s.async = 1
      d.getElementsByTagName('head')[0].appendChild(s)

      cleanupCrispListeners()
    }

    const cleanupCrispListeners = () => {
      window.removeEventListener('scroll', initCrisp)
      window.removeEventListener('click', initCrisp)
      window.removeEventListener('touchstart', initCrisp)
    }

    // Attach for later cleanup
    window._cleanupCrisp = cleanupCrispListeners

    window.addEventListener('scroll', initCrisp, { passive: true })
    window.addEventListener('click', initCrisp, { passive: true })
    window.addEventListener('touchstart', initCrisp, { passive: true })
  }

  // bfcache monitoring
  window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
      console.log('Page restored from bfcache')
      initReveal() // Re-run reveal animations on restoration
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress, { passive: true })
  if (window._cleanupCrisp) {
    window._cleanupCrisp()
    delete window._cleanupCrisp
  }
})
</script>

<template>
  <div class="min-h-screen bg-white text-black dark:bg-[#282C33] dark:text-white transition-colors duration-300 font-mono flex flex-col">
    <div id="scroll-progress"></div>
    <SocialSidebar />
    <Navbar />
    <main class="max-w-screen-xl mx-auto px-4 pt-28 pb-12 flex-grow w-full min-h-screen">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in" @after-enter="initReveal">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <AppFooter />
  </div>
</template>
import DefaultTheme from 'vitepress/theme'
import { watch } from 'vue'
import { useData } from 'vitepress'
import './custom.css'
// import './light-theme.css'

// Create enhanced theme with logging
const theme = {
  ...DefaultTheme,
  setup() {
    const { isDark } = useData()

    // Force dark mode value to true
    isDark.value = true

    // Only run DOM operations on client side
    if (typeof window !== 'undefined') {
      // Force dark mode on initial load
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
      
      // Log when dark mode changes
      watch(isDark, (newVal) => {
        console.log('Dark mode changed:', newVal, 'isDark is now', isDark.value)

        // Force dark mode again if it somehow changed
        if (!isDark.value) {
          isDark.value = true
          document.documentElement.classList.add('dark')
          document.documentElement.classList.remove('light')
        }

        // Manually update logo with DOM manipulation after a short delay
        setTimeout(() => {
          const logo_title = document.querySelector('.VPNavBarTitle .logo')
          console.log('Found logo element:', logo_title)

          const logo_hero = document.querySelector('.image-src-hero')
          console.log('Found logo element:', logo_hero)

          if (logo_title) {
            const src = '/assets/oikos_logo.png'
            console.log(`Src is ${src}`)
            logo_title.setAttribute('src', src)
          }

          if (logo_hero) {
            const src = '/assets/oikos_logo.png'
            console.log(`Src is ${src}`)
            logo_hero.setAttribute('src', src)
          }

          // Apply yellow to gold gradient and font size to name.clip element and remove the class
          const nameElements = document.querySelectorAll('.name.clip')
          nameElements.forEach(el => {
            console.log('Found name.clip element:', el)

            // Apply gradient text
            el.style.setProperty('background', 'linear-gradient(90deg, #CCAA00	, #ffd700)', 'important')
            el.style.setProperty('-webkit-background-clip', 'text', 'important')
            el.style.setProperty('background-clip', 'text', 'important')
            el.style.setProperty('color', 'transparent', 'important')
            el.style.setProperty('font-size', '56px', 'important')
            el.style.setProperty('height', '64px', 'important')
            el.style.setProperty('line-height', '64px', 'important')
            // Add some extra styling to make gradient text more appealing
            el.style.setProperty('font-weight', 'bold', 'important')
            el.style.setProperty('display', 'inline-block', 'important')

            // Remove the name_clip class after styling
            el.classList.remove('name_clip')
            el.classList.remove('name') 
            el.classList.remove('clip')
            console.log('Removed classes from element:', el)
          })

          const otherElements = document.querySelectorAll('.VPButton')
          otherElements.forEach(el => {
            console.log('Found VPButton element:', el)
            el.style.setProperty('background', 'linear-gradient(90deg, #bf9a2f	, #a57b00)', 'important')

          })

          console.log('Updated logo source:', logo_title?.getAttribute('src'))
          console.log('Updated logo hero source:', logo_hero?.getAttribute('src'))
        }, 100)
      }, { immediate: true })
    }

    // Run original setup if it exists
    if (DefaultTheme.setup) {
      DefaultTheme.setup()
    }
  }
}

export default theme
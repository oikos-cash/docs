import DefaultTheme from 'vitepress/theme'
import { watch } from 'vue'
import { useData } from 'vitepress'
import './custom.css'
import './light-theme.css'

// Force dark mode
document.documentElement.classList.add('dark')
document.documentElement.classList.remove('light')

// Create enhanced theme with logging
const theme = {
  ...DefaultTheme,
  setup() {
    const { isDark } = useData()
    
    // Force dark mode value to true
    isDark.value = true
    
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

        console.log('Updated logo source:', logo_title?.getAttribute('src'))
        console.log('Updated logo hero source:', logo_hero?.getAttribute('src'))
      }, 100)
    }, { immediate: true })

    // Run original setup if it exists
    if (DefaultTheme.setup) {
      DefaultTheme.setup()
    }
  }
}

// Log theme export
console.log('Exporting theme with logo switch setup')
export default theme
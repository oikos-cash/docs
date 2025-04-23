<script setup>
import { useData } from 'vitepress'

const { isDark } = useData()
</script>

<template>
  <img 
    :src="isDark ? '/assets/noma_logo_dark.png' : '/assets/oikos_logo.png'" 
    alt="Noma Logo" 
    class="custom-logo" 
  />
</template>

<style scoped>
.custom-logo {
  height: var(--vp-nav-logo-height, 24px);
}
</style>
<script setup lang="ts">
const menuToDisplay: Array = useState('menu', () => [
  {
    label: 'Les recettes de jus',
    link: '/'
  },
  {
    label: 'Mes favoris',
    link: '/favoris'
  },
  {
    label: 'Les fruits et légumes de saisons',
    link: '/saison'
  }
])
</script>
<template>
  <div>
    <CommonMenu :menu="menuToDisplay" />
    <div class="container">
      <NuxtPage />
    </div>
  </div>
</template>

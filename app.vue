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
  <div class="homepage container">
    <CommonMenu :menu="menuToDisplay" />
    <CommonTitle>
      Mes recettes de jus
    </CommonTitle>
    <a href="https://www.flaticon.com/fr/icones-gratuites/regime" title="régime icônes">Régime icônes créées par Freepik - Flaticon</a>
  </div>
</template>

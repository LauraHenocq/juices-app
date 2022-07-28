<script setup lang="ts">
import { Grocery } from '@/domain/Grocery'
import GroceryCard from '~/components/grocery/GroceryCard.vue'

const { data: response } = await useFetch<Grocery[]>('/api/grocery')

const groceryList = computed((): Grocery[] => {
  return response.value
})
</script>
<template>
  <div class="grocery-list">
    <CommonTitle>
      Les fruits et légumes de saison
    </CommonTitle>
    <div>
      <GroceryCardsList :grocery-list="groceryList" border />
    </div>
  </div>
</template>

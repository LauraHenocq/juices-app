<script setup lang="ts">
import { Grocery } from '@/domain/Grocery'

const limit = ref(6)

const { data: response, pending, error, refresh } = await useFetch<Grocery[]>(() => `/api/grocery?limit=${limit.value}`)

const groceryList = computed((): Grocery[] => {
  return response.value
})

function changeLimit () {
  limit.value += 6
  refresh()
}
</script>
<template>
  <div class="grocery-list">
    <CommonTitle>
      Les fruits et légumes de saison
    </CommonTitle>
    <div v-if="pending">
      <p>Chargement en cours...</p>
    </div>
    <div v-else-if="error">
      <p>Une erreur est survenue lors du chargement des données</p>
    </div>
    <div v-else>
      <GroceryCardsList :grocery-list="groceryList" border />
      <div class="grocery-list__see-more">
        <button class="grocery-list__see-more__button" @click="changeLimit">
          Voir plus
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.grocery-list__see-more {
  margin: 20px 0;
  display: flex;
  justify-content: center;
}
.grocery-list__see-more__button {
  color: #fff;
  font-size: 16px;
  padding: 15px 40px;
  background-color: $secondary;
  border: 1px solid $secondary;
  border-radius: $small-radius;
  transition: all 300ms;
}

.grocery-list__see-more__button:hover {
  background-color: #fff;
  cursor: pointer;
  color: $secondary;
}
</style>

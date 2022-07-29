<template>
  <div class="grocery-cards-list">
    <GroceryCard v-for="grocery in itemsToDisplay" :key="grocery._id" :border="border" :grocery="grocery" />
  </div>
</template>
<script setup lang="ts">
import { Grocery } from '~/domain/Grocery'

const props = defineProps({
  groceryList: {
    type: [Grocery],
    required: true
  },
  border: {
    type: Boolean
  }
})

const itemsToDisplay = ref(props.groceryList)
</script>
<style lang="scss" scoped>
.grocery-cards-list {
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: 80px;
  row-gap: 32px;

  @media screen and (max-width: 1264px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 28px;
    row-gap: 24px;
  }
}
</style>

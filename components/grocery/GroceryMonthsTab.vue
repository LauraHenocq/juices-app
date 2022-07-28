<script setup lang="ts">

const props = defineProps({
  months: {
    type: Array,
    required: true
  }
})

const toMonthName = (monthNumber) => {
  const date = new Date()
  date.setMonth(monthNumber)

  return date.toLocaleString('fr-FR', {
    month: 'short'
  })
}
</script>
<template>
  <div class="grocery-months-tab">
    <div v-for="month in months" :key="month" class="grocery-months-tab__item">
      {{ toMonthName(month)}}
    </div>
  </div>
</template>
<style lang="scss" scoped>
.grocery-months-tab {
  font-size: 8px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  column-gap: 5px;
  row-gap: 5px;
}

.grocery-months-tab__item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: $quaternary;
  color: #fff;
  text-transform: uppercase;
}
</style>

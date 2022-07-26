<script setup lang="ts">
import { Grocery } from '~/domain/Grocery'

const props = defineProps({
  grocery: {
    type: Grocery,
    required: true
  },
  border: {
    type: Boolean
  }
})

const useGrocery = () => useState<Grocery>('grocery', () => props.grocery)
const itemToDisplay = useGrocery()
const local = computed((): string => {
  return props.grocery._local ? 'Local' : 'Non local'
})
const image = computed((): string => {
  return props.grocery._image
})
const name = computed((): string => {
  return `-- ${props.grocery._name} --`
})
const type = computed((): string => {
  return props.grocery._type
})
const months = computed((): Array<number> => {
  return props.grocery._months
})
</script>
<template>
  <div :class="['grocery-card', { 'grocery-card--border': border}]">
    <img
        class="grocery-card__picture"
        :src="image"
        alt="Photo du fruit ou du légume"
    />
    <div class="grocery-card__type">
      <img src="~/assets/icons/apple.svg" alt="Icône représentant une pomme" />
      <div>
        {{ type }}
      </div>
    </div>
    <div class="grocery-card__local">
      <img src="~/assets/icons/map.svg" alt="Icône représentant un point de localisation" />
      <div>
        {{ local }}
      </div>
    </div>
    <div class="grocery-card__content">
      <h3 class="grocery-card__content__title">
        {{ name }}
      </h3>
      <GroceryMonthsTab :months="months" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.grocery-card {
  display: grid;
  grid-template-columns: 5fr 4fr;
  grid-template-rows: auto auto 1fr;
  align-items: stretch;
  column-gap: 16px;
  row-gap: 32px;
  padding: 32px 16px;
  background-color: #fff;
  border-radius: $radius;
  height: 312px;
  max-height: 370px;
  grid-template-areas:
    'picture picture'
    'picture picture'
    'type local'
    'content content';
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
}
.grocery-card__picture {
  grid-area: picture;
  border-bottom-left-radius: $radius;
  border-top-left-radius: $radius;
  width: 144px;
  height: 144px;
  object-fit: contain;
  margin: auto;
  transition: all 300ms;
}
.grocery-card:hover .grocery-card__picture {
  transform: scale(1.2);
}
.grocery-card__type, .grocery-card__local {
  font-family: Helvetica, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  color: $primary;
  font-size: 12px;
}

.grocery-card__type {
  grid-area: type;
}

.grocery-card__local {
  grid-area: local;
}
.grocery-card__content {
  grid-area: content;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 16px;
  font-family: Helvetica, sans-serif;
}
.grocery-card__content__title {
  color: $secondary;
  font-size: 18px;
  font-weight: normal;
  text-transform: uppercase;
  margin: 0;
  word-break: break-word;
}
.grocery-card--border {
  border: 1px solid $quaternary;
}
.grocery-card--width {
  max-width: 400px;
}

@media screen and (max-width: 960px) {
  .grocery-card {
    row-gap: 24px;
  }
  .grocery-card__content__title {
    letter-spacing: 5px;
    font-size: 18px;
  }
}

@media screen and (max-width: 600px) {
  .grocery-card__picture {
    animation: zoomInAndOut 4s linear infinite;
  }
}

@keyframes zoomInAndOut {
  to {
    transform: scale(1.2)
  }
}
</style>

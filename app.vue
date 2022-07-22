<template>
  <div class="homepage container">
    <h1 class="homepage__title">
      Mes recettes de jus
    </h1>
    <a href="https://www.flaticon.com/fr/icones-gratuites/regime" title="régime icônes">Régime icônes créées par Freepik - Flaticon</a>
  </div>
</template>
<style scoped lang="scss">
.homepage__title {
  letter-spacing: 5px;
  position: relative;
  text-align: center;
  background: linear-gradient(90deg, $secondary 0%, $primary 100%);
  background-clip: initial;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.homepage__title::after {
  position: absolute;
  bottom:-10px;
  display: inline-block;
  width: 60px;
  height: 60px;
  content: '';
  background-image: url('~/assets/icons/logo.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  margin-left: 10px;
}
</style>

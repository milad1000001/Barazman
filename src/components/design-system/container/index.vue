<template>
  <div id="responsive"><slot /></div>
</template>
<style lang="scss" scoped>
@media (max-width: 700px) {
  #responsive {
    margin: 0 auto !important;
  }
}
#responsive {
  max-width: 1200px;
  margin: 1rem auto;
}
</style>

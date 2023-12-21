<template>
  <div>
    <ProductItem :productItem="ProductItemJson"></ProductItem>
  </div>
</template>

<script setup lang="ts">
import ProductItem from "@/components/design-system/productItem/index.vue";
import ProductItemJson from "@/assets/json/items.json";
</script>

<style scoped></style>

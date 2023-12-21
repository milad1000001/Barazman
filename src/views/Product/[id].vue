<template>
  <div>
    <BCarousel
      :haveTitle="false"
      :image="`/src/assets/header/${getItemById.headerImage}`"
    />
    <BContainer class="py-6">
      <p>
        {{ getItemById.description }}
      </p>
    </BContainer>
  </div>
</template>

<script setup lang="ts">
import BCarousel from "@/components/design-system/carousel/index.vue";
import BContainer from "@/components/design-system/container/index.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
import ProductItemJson from "@/assets/json/items.json";
const getItemById = computed(() => {
  ProductItemJson.filter((el) => String(el.id) === route.params.id);
  return Object.assign({}, ...ProductItemJson);
});
</script>

<style scoped></style>

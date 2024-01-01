<template>
  <div>
    <BCarousel :image="headerImage" />
    <BContainer class="product-item-container">
      <div
        v-for="(item, index) in productItem"
        :key="index"
        class="product-item-container__item"
      >
        <RouterLink :to="{ name: 'ProductItem', params: { id: item.id } }">
          <div>
            <v-img :src="imageUrl" width="300px" height="100%" cover />
          </div>
          <strong>{{ item.title }}</strong>
          <small>{{ item.price }}</small>
        </RouterLink>
      </div>
    </BContainer>
  </div>
</template>

<script lang="ts" setup>
import imageUrl from "/src/assets/product/1.jpg";
import headerImage from "/src/assets/header/6.jpg";
import BContainer from "@/components/design-system/container/index.vue";
import BCarousel from "@/components/design-system/carousel/index.vue";

interface Product {
  productItem: Array<{
    id: number;
    imageUrl: string;
    headerImage: string;
    title: string;
    price: string;
  }>;
}
defineProps<Product>();
</script>

<style lang="scss" scoped>
.product-item-container {
  &__item {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: start;
    gap: 0.2rem;
    max-width: 320px;
    padding: 1rem;
    box-shadow: 1px 1px 5px 1px #eee;
    border-radius: 0.5rem;
  }
}
</style>

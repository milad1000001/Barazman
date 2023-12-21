<template>
  <v-app-bar scroll-behavior="elevate" class="bg-blue-grey-darken-4">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click.stop="toggle = !toggle"></v-app-bar-nav-icon>
      <v-img
        src="@/assets/logo/1.png"
        width="50px"
        height="50px"
        class="mr-2"
      />
      <strong>Barazman</strong>
    </template>
  </v-app-bar>
  <v-navigation-drawer v-model="toggle" temporary fixed width="100px">
    <v-list>
      <v-list-item v-for="item in items" :key="item.title" :to="item.route">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import { ref } from "vue";
const toggle = ref(false);
const items = [
  { title: "Home", icon: "mdi-home-city-outline", route: "/" },
  {
    title: "Product",
    icon: "mdi-bookmark-multiple-outline",
    route: "/product",
  },
  { title: "Contact Us", icon: "mdi-voicemail", route: "/contact" },
];
</script>

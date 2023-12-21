<template>
  <v-img :src="image" height="700" width="100%" cover>
    <div
      v-if="haveTitle"
      class="d-flex flex-column fill-height justify-center align-left text-white darken"
    >
      <div class="ml-16">
        <strong class="text-h4 font-weight-bold mb-4">
          The only way to do great work, is to love what you do.
        </strong>
        <div class="text-subtitle-1 font-weight-bold">
          WE LOVE AND WE CARE ...
        </div>
      </div>
    </div>
  </v-img>
</template>
<script lang="ts" setup>
withDefaults(defineProps<{ image: string; haveTitle: boolean }>(), {
  haveTitle: true,
});
</script>
<style scoped>
.v-img :deep(img) {
  filter: brightness(70%);
}
</style>

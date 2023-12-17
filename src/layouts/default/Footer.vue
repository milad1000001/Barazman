<template>
  <v-footer app class="bf-container">
    <div class="bf-container__social bg-blue-grey-darken-4">
      <strong>Get connected with us on social networks!</strong>
      <v-spacer></v-spacer>
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          :icon="icon"
          variant="plain"
          size="small"
        ></v-btn>
      </div>
    </div>

    <div class="bf-container__information bg-blue-grey-darken-1">
      <div>
        <div>Email: Nimalatif@Gmail.com</div>
        <div>Tell: (+98) 901 813 0049</div>
      </div>
      <div>Block 15, Kian Tower, Vali-e-Asr, Tehran, Iran</div>
    </div>
  </v-footer>
</template>

<script lang="ts" setup>
const icons = ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"];
</script>
<style lang="scss" scoped>
@media (max-width: 700px) {
  .bf-container {
    display: flex !important;
    &__information {
      display: flex !important;
      flex-direction: column !important;
      justify-items: center !important;
      align-items: center;
      padding: 1rem !important;
    }
    &__social {
      flex-direction: column !important;
    }
    strong {
      display: none !important;
    }
  }
}
.bf-container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  &__social {
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0 1rem;
  }
  &__information {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 1rem;
  }
}

.v-footer {
  padding: 0;
}
</style>

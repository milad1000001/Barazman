<template>
  <form class="bc-container">
    <div class="bc-container__image">
      <v-img src="@/assets/header/4.jpg" width="300px" height="100%" cover />
    </div>
    <div class="bc-container__form">
      <h1>Get in touch</h1>
      <small>24/7 We will answere you questions and problems.</small>
      <v-responsive>
        <v-text-field
          v-model="state.firstname"
          :error-messages="String(v$.firstname.$errors.map((e) => e.$message))"
          :counter="10"
          clearable
          label="Firstname"
          required
          class="my-3"
          variant="outlined"
          @input="v$.firstname.$touch"
          @blur="v$.firstname.$touch"
        ></v-text-field>
        <v-text-field
          v-model="state.lastname"
          :error-messages="String(v$.lastname.$errors.map((e) => e.$message))"
          :counter="10"
          clearable
          label="Lastname"
          required
          class="my-3"
          variant="outlined"
          @input="v$.lastname.$touch"
          @blur="v$.lastname.$touch"
        ></v-text-field>
        <v-text-field
          v-model="state.email"
          :error-messages="String(v$.email.$errors.map((e) => e.$message))"
          label="E-mail"
          required
          variant="outlined"
          clearable
          class="my-3"
          @input="v$.email.$touch"
          @blur="v$.email.$touch"
        ></v-text-field>
      </v-responsive>

      <div>
        <v-btn class="me-4" @click="submit">Submit </v-btn>
        <v-btn @click="clear"> Clear </v-btn>
      </div>
    </div>
  </form>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

defineProps<{ image: string }>();
const initialState = {
  firstname: null,
  lastname: null,
  email: null,
};

const state = reactive({
  ...initialState,
});

const rules = {
  firstname: { required },
  lastname: { required },
  email: { required, email },
};

const v$ = useVuelidate(rules, state);

function clear() {
  v$.value.$reset();
  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value;
  }
}

const submit = () => {
  v$.value.$validate();
  if (!v$.value.$error) {
    window.location.href = "mailto:nimalatif@Gmail.com";
  }
};
</script>
<style lang="scss" scoped>
@media (max-width: 700px) {
  .bc-container {
    margin: 0rem auto !important;
    border: 0px solid black !important;
    width: 100vw !important;
    overflow: unset !important;
    padding: 3rem;

    &__image {
      display: none !important;
    }
    &__form {
      width: 100% !important;
      padding: 0rem !important;
    }
  }
}
.bc-container {
  display: flex;
  border: 5px solid black;
  border-radius: 1rem;
  width: 60vw;
  margin: 7rem auto;
  overflow: hidden;
  &__image {
    border-right: 5px solid black;
    filter: brightness(70%);
  }
  &__form {
    display: flex;
    flex-direction: column;
    justify-items: center;
    width: 100%;
    padding: 5rem;
  }
}
</style>

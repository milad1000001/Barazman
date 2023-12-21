<template>
  <div class="home-container">
    <BCarousel :image="homeSliderImages" />
    <BContainer class="py-6">
      <div class="home-container__challange">
        <div>
          <h1>The Challange</h1>
          <p>
            Soil compaction increases soil density. Roots are less able to
            penetrate the soil and are generally shallow and malformed and can’t
            grow. Because their growth is restricted, they're less able to
            exploit the soil for nutrients and moisture. Nitrogen and potassium
            deficiencies are the most common. Precision agriculture is a
            management strategy that gathers, processes and analyzes temporal,
            spatial and individual data and combines it with other information
            to support management decisions according to estimated variability
            for improved resource use efficiency, productivity, quality,
            profitability and ...
          </p>
        </div>
        <div class="text-center ml-4">
          <v-img src="@/assets/product/1.jpg" width="300px" height="300px" />
          <strong> BarazPenetrometer </strong>
        </div>
      </div>
      <v-divider class="my-6" />
      <div class="home-container__solution home-solution">
        <div class="text-center mr-8">
          <v-img
            src="@/assets/product/2.jpg"
            width="500px"
            height="300px"
            cover
          />
        </div>
        <div class="home-solution__content">
          <h1>Our Solution</h1>
          <p>
            Smart Penetrometer can measure a variety of soil parameters like
            vertical and horizontal pressure, moisture and EC. Most important
            value propositions are:
          </p>
          <div class="py-2">
            <div>1. Automatic sending data on web application.</div>
            <div>
              2. Generating Map of Soil compaction based on GPS location
            </div>
            <div>
              3. Helping farmers by using decision support system for planning
              required actions.
            </div>
            <div>4. Real time data analysis and creating graph</div>
          </div>
        </div>
      </div>
    </BContainer>
  </div>
</template>

<script lang="ts" setup>
const homeSliderImages = "src/assets/header/1.jpg";
import BCarousel from "@/components/design-system/carousel/index.vue";
import BContainer from "@/components/design-system/container/index.vue";
</script>
<style lang="scss" scoped>
@media (max-width: 700px) {
  .home-container {
    &__challange {
      flex-direction: column !important;
      padding: 0 1rem;
    }
    &__solution {
      flex-direction: column !important;
      padding: 0 1rem;
    }
  }
}
.home-container {
  &__challange {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  &__solution {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
}
.home-solution {
  &__content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>

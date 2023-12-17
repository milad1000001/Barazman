<template>
  <BCarousel :image="homeSliderImages" />
  <BContainer class="py-6">
    <section class="d-flex justify-center align-center">
      <div>
        <strong class="text-h4 font-weight-bold">The Challange</strong>
        <p class="text-body-1 mt-4">
          Soil compaction increases soil density. Roots are less able to
          penetrate the soil and are generally shallow and malformed and can’t
          grow. Because their growth is restricted, they're less able to exploit
          the soil for nutrients and moisture. Nitrogen and potassium
          deficiencies are the most common. Precision agriculture is a
          management strategy that gathers, processes and analyzes temporal,
          spatial and individual data and combines it with other information to
          support management decisions according to estimated variability for
          improved resource use efficiency, productivity, quality, profitability
          and ...
        </p>
      </div>
      <div class="text-center ml-4">
        <v-img src="@/assets/product/1.jpg" width="300px" height="300px" />
        <strong> BarazPenetrometer </strong>
      </div>
    </section>
    <v-divider class="my-6" />
    <section class="d-flex align-center justify-center">
      <div class="text-center mr-8">
        <v-img
          src="@/assets/product/2.jpg"
          width="500px"
          height="300px"
          cover
        />
      </div>
      <div>
        <strong class="text-h4 font-weight-bold">Our Solution</strong>
        <p class="text-body-1 py-2">
          Smart Penetrometer can measure a variety of soil parameters like
          vertical and horizontal pressure, moisture and EC. Most important
          value propositions are:
        </p>
        <div class="py-2">
          <div>1. Automatic sending data on web application.</div>
          <div>2. Generating Map of Soil compaction based on GPS location</div>
          <div>
            3. Helping farmers by using decision support system for planning
            required actions.
          </div>
          <div>4. Real time data analysis and creating graph</div>
        </div>
      </div>
    </section>
  </BContainer>
</template>

<script lang="ts" setup>
const homeSliderImages = "src/assets/header/1.jpg";
import BCarousel from "@/components/design-system/carousel/index.vue";
import BContainer from "@/components/design-system/container/index.vue";
</script>

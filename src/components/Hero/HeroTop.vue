<template>
  <div class="container mx-auto flex flex-col md:flex-row items-center pl-12">
    <!--Left Col-->
    <div
      class="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24"
    >
      <MainHeading heading="A new model for open collaboration" />
      <p class="leading-normal font-bmc-proxima font-normal text-gray-500 mb-4">
        Run an organization where members get rewarded for their contributions
        with fractional ownership.
      </p>
      <button
        class="bg-bmcblue text-white rounded shadow hover:shadow-lg py-2 px-4 border hover:border-transparent"
      >
        Request early access
      </button>
    </div>
    <!--Right Col-->
    <div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
      <img
        class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
        src="../../assets/Illustration.png"
        alt=""
      />
    </div>
  </div>
</template>
<script>
import MainHeading from "../Sections/MainHeading.vue";
export default {
  name: "HeroTop",
  components: { MainHeading },
};
</script>

<template lang="">
  <div
    class="container mx-auto flex flex-col md:flex-row py-10 items-center pl-10"
  >
    <!--Left Col-->
    <div
      class="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6"
    >
      <MainHeading heading="Start an Open Enterprise" />
      <p class="leading-normal font-bmc-proxima text-gray-500 mb-4">
        If you can’t wait to run a new or existing organization on Open
        Enterprise and are willing to explore and navigate the beta, we’d love
        to get you started.
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
        src="../../assets/PabloSignin.png"
        alt=""
      />
    </div>
  </div>
</template>
<script>
import MainHeading from "../Sections/MainHeading.vue";
export default {
  name: "HeroBottom",
  components: { MainHeading },
};
</script>

<template>
  <div
    class="container mx-auto flex flex-col-reverse md:flex-row py-10 justify-around"
  >
    <div class="font-bmc-mono">
      <div class="flex flex-col md:flex-row justify-center items-center p8">
        <div
          class="max-w-sm flex flex-col bg-white border-2 border-black p-8 rounded-2xl tracking-wide shadow-lg"
        >
          <div id="header" class="flex items-center mb-4">
            <img
              alt="avatar"
              class="w-20 rounded-full border-2 border-gray-300"
              src="../../assets/DillonKydd.png"
            />
            <div id="header-text" class="leading-5 ml-6 sm">
              <h4 id="name" class="text-xl font-semibold">Jassir Jonis</h4>
              <h5 id="job" class="text-slate-400">Pre-seed angel investor</h5>
            </div>
          </div>
          <div id="quote">
            <p class="text-gray-600">
              Hey guys, love what you’re doing and I’m convinced that together
              we’ll achieve amazing things.
            </p>
          </div>
          <div class="flex mt-4 space-x-8">
            <div>
              <h3>COMMIT</h3>
              <h2 class="font-semibold">10,000 DAI</h2>
            </div>
            <div>
              <h3>SHARES</h3>
              <h2 class="font-semibold">10</h2>
            </div>
          </div>
          <button class="bg-black space-between rounded-md text-white mt-4 p-4">
            Go to vote
          </button>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col font-bmc-proxima w-full lg:w-1/2 justify-center items-start px-6"
    >
      <MainHeading
        heading="Onboard users, investors and advisors as you grow"
      />
      <p class="leading-normal mb-4">
        You’ve bootstrapped and delivered an MVP, and some investors and
        advisors are interested in having a chat with you. As an Open
        Enterprise, you can onboard them seamlessly into your digital
        organization and align them with your success.
      </p>
    </div>
  </div>
</template>
<script>
import MainHeading from "./MainHeading.vue";
export default {
  name: "FeatureInfoTwo",
  components: { MainHeading },
};
</script>

<template>
  <div class="container mx-auto flex flex-col md:flex-row py-10 justify-around">
    <div
      class="flex flex-col font-bmc-proxima w-full lg:w-1/2 justify-center items-start sm:px-4"
    >
      <MainHeading heading="Kickstart an organization with your co-founders" />
      <p class="leading-normal mb-4">
        It’s the early days, you just had a long conversation with two friends
        about a meaningful challenge that you’re all passionate about and have a
        potential solution for. You’re ready to embark the startup journey.
      </p>
    </div>
    <div
      class="flex flex-col md:flex-row font-bmc-mono justify-center items-center p8"
    >
      <div
        class="max-w-sm flex flex-col bg-white border-2 border-black p-8 pr-32 rounded-2xl tracking-wide shadow-lg"
      >
        <h1 class="text-lg p-4 font-bold">Members</h1>
        <a
          class="flex p-4 items-center no-underline hover:underline text-black"
          href="#"
        >
          <img
            class="block rounded-full"
            src="../../assets/DillonKydd.png"
            alt=""
          />
          <div>
            <h2 class="ml-2 font-bold">Dillon Kydd</h2>
            <p class="ml-2 text-sm">100 SHARES</p>
          </div>
        </a>
        <a
          class="flex p-4 items-center no-underline hover:underline text-black"
          href="#"
        >
          <img
            class="block rounded-full"
            src="../../assets/AnnaOlsen.png"
            alt=""
          />
          <div>
            <h2 class="ml-2 font-bold">Anna Olsen</h2>
            <p class="ml-2 text-sm">100 SHARES</p>
          </div>
        </a>
        <a
          class="flex p-4 items-center no-underline hover:underline text-black"
          href="#"
        >
          <img
            class="block rounded-full"
            src="../../assets/KasMoss.png"
            alt=""
          />
          <div>
            <h2 class="ml-2 font-bold">Kas Moss</h2>
            <p class="ml-2 text-sm">100 SHARES</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeading from "./MainHeading.vue";
export default {
  name: "FeatureInfoOne",
  components: { MainHeading },
};
</script>

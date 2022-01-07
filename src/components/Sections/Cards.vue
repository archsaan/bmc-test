<template>
  <section class="px-6 py-16 overflow-x-hidden">
    <div class="container mx-auto p-6 mb-6 flex items-center flex-col">
      <MainHeading heading="Reimagining what it means to work" align="center" />
      <div class="w-1/2 text-center text-sm font-bmc-proxima pt-4">
        <p>
          Teams and communities using Open Enterprise fundamentally unlock a
          reality of work that reimagines how people engage in economic
          opportunity, meeting the demands and expectations of a modern
          organization.
        </p>
      </div>
    </div>
    <div class="container flex flex-wrap w-full mx-auto px-2">
      <div
        v-for="item in cardItems"
        v-bind:key="item.id"
        class="w-full lg:w-1/3 mb-6"
      >
        <div class="mx-2 h-full p-4 shadow-lg flex flex-col items-center">
          <div class="text-indigo-300">
            <img :src="getImgUrl(item.icon)" alt="" />
          </div>
          <h3 class="text-xl font-bold font-bmc-proxima">{{ item.title }}</h3>
          <div class="font-bmc-proxima text-center p-4">
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import MainHeading from "./MainHeading.vue";
export default {
  name: "Cards",
  components: { MainHeading },
  methods: {
    getImgUrl(pic) {
      return require("../../assets/" + pic);
    },
  },
  data: function () {
    return {
      cardItems: [
        {
          id: 1,
          title: "Modern workforce",
          icon: "modern.svg",
          content: `Multistakeholder governance aligns employees with the organization's 
                    wider community.`,
        },
        {
          id: 2,
          icon: "meritocratic_by_design.svg",
          title: "Meritocratic by design",
          content: `Tokenized ownership aligns deeply committed individuals with the 
                    organization’s success.`,
        },
        {
          id: 3,
          icon: "engineered_for_resilience.svg",
          title: "Engineered for resilience",
          content: `Open Enterprise supports best practices in sociocratic management.`,
        },
      ],
    };
  },
};
</script>

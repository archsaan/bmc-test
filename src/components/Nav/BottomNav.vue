<template>
  <Navbar v-bind:show-logo="false" />
</template>
<script>
import Navbar from "./Navbar.vue";
export default {
  name: "BottomNav",
  components: {
    Navbar,
  },
};
</script>

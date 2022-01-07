<template>
  <Navbar v-bind:show-logo="true" />
</template>
<script>
import Navbar from "./Navbar.vue";
export default {
  name: "TopNav",
  components: {
    Navbar,
  },
};
</script>

<template>
  <h1
    class="font-bold font-bmc-serif text-5xl leading-snug my-4"
    :class="align ? 'text-center' : 'text-left'"
  >
    {{ heading }}
  </h1>
</template>
<script>
export default {
  name: "MainHeading",
  props: ["heading", "align"],
};
</script>

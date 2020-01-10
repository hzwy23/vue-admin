<template>
  <div>
    <wisrc-header />
    <wisrc-side />
    <wisrc-content />
    <wisrc-footer />
  </div>
</template>

<script>
import WisrcSide from "@/components/layout/Side.vue";
import WisrcContent from "@/components/layout/Content.vue";
import WisrcFooter from "@/components/layout/Footer.vue";
import WisrcHeader from "@/components/layout/Header.vue";

export default {
  components: {
    WisrcSide,
    WisrcContent,
    WisrcFooter,
    WisrcHeader
  }
};
</script>
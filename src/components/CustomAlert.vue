<template>
  <div class="alert"></div>
</template>
>

<script>
import axios from "axios";

export default {
  name: "VotingContainer",
  props: {
    url: String,
    metadata: Object,
    vote: Function,
  },
  data() {
    return {
      msg: "soup!",
    };
  },
  created() {
    console.log("container open");
  },
};
</script>

<style scoped>
img {
  height: 50vh;
  width: 50vh;
}
figure {
  border: 2px solid black;
}
</style>

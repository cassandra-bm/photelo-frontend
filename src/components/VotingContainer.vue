<template>
  <figure class="figure d-flex flex-column justify-content-center">
    <img :src="url" class="figure-img img-fluid rounded" alt="..." />

    <figcaption class="figure-caption">
      {{ metadata.name }}
    </figcaption>

    <button class="btn btn-primary" @click="second_image_wins">
      Vote For This Image
    </button>
  </figure>
</template>

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

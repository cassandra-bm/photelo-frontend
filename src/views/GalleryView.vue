<template>
  <div>
    <br />
    <ul>
      <li v-for="metadata in image_metadata">
        <img :src="get_image_url(metadata.id)" />
        <!-- <p>{{ metadata }}</p>
        <p>{{ get_image_url(metadata.image_id) }}</p> -->
      </li>
      <!-- <p v-if="show_metadata">{{  metadata }}</p> -->
      <li />
    </ul>
    <br />
  </div>
</template>
<script>
import axios from "axios";
// import { meta } from 'eslint-plugin-vue'
export default {
  name: "GalleryView",
  data() {
    return {
      image_metadata: [],
      // show_metadata: false,
    };
  },
  methods: {
    get_all_image_urls() {
      const path = "http://localhost:5000/images/gallery";
      axios
        .get(path)
        .then((res) => {
          // console.log(res);
          this.image_metadata = res.data;
          console.log(this.image_metadata);
        })
        .catch((error) => {
          console.error(error);
        });
      // this.image_ = []
    },
    get_image_url(image_id) {
      const path_base = "http://localhost:5000/images/";
      return path_base + image_id;
    },
  },
  created() {
    this.get_all_image_urls();
  },
};
</script>

<style>
ul {
  margin: 0 0 0 0;
  padding: 0;
  list-style-type: none;

  display: flex;
  flex-wrap: wrap;
}

li {
  height: 40vh;
  flex-grow: 1;
}

img {
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
}

li:last-child {
  flex-grow: 10;
}

br {
  width: 100%;
  border: 1px solid black;
}
</style>

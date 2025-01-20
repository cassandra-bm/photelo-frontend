<template>
  <div class="alert alert-primary" v-show="showAlert">{{ alertMessage }}</div>
  <div class="float-start">
    <VotingContainer
      :url="get_image_url(image_metadata[0].id)"
      :metadata="image_metadata[0]"
      :vote="first_image_wins"
    />
  </div>

  <div class="float-end">
    <VotingContainer
      :url="get_image_url(image_metadata[1].id)"
      :metadata="image_metadata[1]"
      :vote="second_image_wins"
    />
  </div>
</template>

<script>
import axios from "axios";
import VotingContainer from "@/components/VotingContainer.vue";

export default {
  components: { VotingContainer },
  name: "VotingVue",
  data() {
    return {
      image_metadata: [],
      showAlert: false,
      alertMessage: "",
      // show_metadata: false,
    };
  },
  methods: {
    get_contestant_images() {
      const path = "http://localhost:5000/vote/";
      axios
        .get(path)
        .then((res) => {
          this.image_metadata = res.data;
          console.log("OBtained new images");
          console.log(this.image_metadata);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    get_image_url(image_id) {
      const path_base = "http://localhost:5000/images/";
      return path_base + image_id;
    },
    async handleVoteSubmit(winner_id, loser_id) {
      console.log("Winner: ", winner_id);
      console.log("Loser: ", loser_id);

      const base_route = "http://localhost:5000/vote/";
      const route = base_route + winner_id + "/" + loser_id;

      const formData = new FormData();
      formData.append("winner_id", winner_id);
      formData.append("loser_id", loser_id);

      try {
        const response = await fetch(route, {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const result = await response.json();
          console.log("Vote success:", result);
        } else {
          console.error("Vote failed.");
        }
      } catch (error) {
        console.error("Error during vote:", error);
      }
    },
    first_image_wins() {
      this.handleVoteSubmit(
        this.image_metadata[0].id,
        this.image_metadata[1].id
      );
    },
    second_image_wins() {
      this.handleVoteSubmit(
        this.image_metadata[1].id,
        this.image_metadata[0].id
      );
    },
  },
  created() {
    this.get_contestant_images();
  },
};
</script>

<style scoped>
ul {
  margin: 0 0 0 0;
  padding: 0;
  list-style-type: none;

  /* display: flex;
  flex-wrap: wrap; */
}

li {
  height: 40vh;
  flex-grow: 1;
}

img {
  max-height: 250px;
  min-width: 250px;
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

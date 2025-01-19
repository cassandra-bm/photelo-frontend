<template>
  <div>
    <br />
    <div>
      <img :src="get_image_url(image_metadata[0].id)" />
      <ul>
        <li>{{ image_metadata[0].name }}</li>
        <li>{{ image_metadata[0].id }}</li>
        <li>{{ image_metadata[0].rating }}</li>
        <li>{{ image_metadata[0].tags }}</li>
      </ul>
      <button @click="first_image_wins">Vote for Image 1</button>
    </div>
    <div>
      <img :src="get_image_url(image_metadata[1].id)" />
      <ul>
        <li>{{ image_metadata[1].name }}</li>
        <li>{{ image_metadata[1].id }}</li>
        <li>{{ image_metadata[1].rating }}</li>
        <li>{{ image_metadata[1].tags }}</li>
      </ul>
      <button @click="second_image_wins">Vote for Image 2</button>
    </div>
    <br />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "VotingVue",
  data() {
    return {
      image_metadata: [],
      // show_metadata: false,
    };
  },
  methods: {
    get_contestant_images() {
      const path = "http://localhost:5000/vote/";
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
    // submitVote(winner, loser) {
    //   console.log("Winner: ", winner);
    //   console.log("Loser: ", loser);

    //   const base_route = "http://localhost:5000/vote/";
    //   const route = base_route + winner + "/" + loser;

    //   const tied = true;

    //   axios
    //     .post(route, { tied: tied })
    //     .then((res) => {
    //       // console.log(res);
    //       console.log(res);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // },
    async handleVoteSubmit(winner_id, loser_id) {
      console.log("Winner: ", winner_id);
      console.log("Loser: ", loser_id);

      const base_route = "http://localhost:5000/vote/";
      const route = base_route + winner_id + "/" + loser_id;

      const formData = new FormData();
      formData.append("winner_id", winner_id);
      formData.append("loser_id", loser_id);
      // const payload = {
      //   data: this.addImageForm.file,
      //   name: this.addImageForm.name,
      // };

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

<style>
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

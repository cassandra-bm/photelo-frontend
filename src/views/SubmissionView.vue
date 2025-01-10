<template>
  <h2>image submission??</h2>
  <div>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="addImageName">Name: </label>
        <input type="text" id="addImageName" v-model="addImageForm.name" />
      </div>
      <div>
        <label for="addImage"></label>
        <input
          type="file"
          id="addImage"
          v-on:change="
            (data) => {
              console.log(data);
              ImageForm.data = data;
            }
          "
        />
      </div>
    </form>
    <div>
      <button @click="handleAddSubmit">Submit</button>
      <!-- <button>Cancel</button> -->
    </div>
    <button @click="handleAddReset">Cancel</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SubmissionView",

  data() {
    return {
      addImageForm: {
        data: null,
        name: "",
      },

      // show_metadata: false,
    };
  },
  methods: {
    addImage(payload) {
      const path = "http://localhost:5000/images";
      axios
        .post(path, payload)
        .then(() => {
          // this.getBooks();
          //should actually just do nothing tbh
          //todo: NOT REALLY, it should display success or failure to the user
          //responsive input is important
          //refresh page and send to gallery or user profile (if it exists yet)
        })
        .catch((error) => {
          console.log(error);
          // this.getBooks();
        });
    },
    handleAddReset() {
      this.initForm();
    },
    handleAddSubmit() {
      const payload = {
        data: this.addImageForm.data,
        name: this.addImageForm.name,
      };
      this.addImage(payload);
    },
    initForm() {
      this.addImageForm.name = "";
      this.addImageForm.data = null;
    },
  },
  created() {},
};
</script>

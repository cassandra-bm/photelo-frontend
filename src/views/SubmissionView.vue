<template>
  <h2>image submission??</h2>
  <div>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="addImageName">Name: </label>
        <input type="text" id="addImageName" v-model="addImageForm.name" />
      </div>
      <div>
        <label for="addImageFile"></label>
        <input type="file" id="addImageFile" @change="onFileChange" />
      </div>
    </form>
    <div>
      <button @click="handleAddSubmit">Submit</button>
      <button @click="handleAddReset">Cancel</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SubmissionView",
  data() {
    return {
      addImageForm: {
        file: null,
        name: "",
      },

      // show_metadata: false,
    };
  },

  methods: {
    onFileChange(event) {
      const files = event.target.files;
      if (files && files[0]) {
        this.addImageForm.file = files[0];
      }
    },
    // addImage(payload) {
    //   const path = "http://localhost:5000/images";
    //   axios
    //     .post(path, payload)
    //     .then(() => {
    //       // this.getBooks();
    //       //should actually just do nothing tbh
    //       //todo: NOT REALLY, it should display success or failure to the user
    //       //responsive input is important
    //       //refresh page and send to gallery or user profile (if it exists yet)
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       // this.getBooks();
    //     });
    async handleAddSubmit() {
      if (!this.addImageForm.file) {
        alert("Please select a file");
        return;
      }

      const formData = new FormData();
      formData.append("name", this.addImageForm.name);
      formData.append("image", this.addImageForm.file);
      // const payload = {
      //   data: this.addImageForm.file,
      //   name: this.addImageForm.name,
      // };

      try {
        const response = await fetch("http://localhost:5000/images", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const result = await response.json();
          console.log("Upload success:", result);
        } else {
          console.error("Upload failed.");
        }
      } catch (error) {
        console.error("Error during upload:", error);
      }
    },
    // },
    handleAddReset() {
      this.initForm();
    },
    initForm() {
      this.addImageForm.file = null;
      this.addImageForm.name = "";

      const fileInput = document.getElementById("addImage");
      if (fileInput) fileInput.value = "";
    },
  },
  created() {},
};
</script>

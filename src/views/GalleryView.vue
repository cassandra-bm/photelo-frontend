<template>
    <div>
      <!-- <h2>Image Gallery</h2> -->
      <br/>
      <ul>
        <!-- <li v-for="metadata in image_metadata"> -->
          <!-- <img :src="metadata.url"> -->
          <!-- <p>{{  metadata }}</p> -->
        <!-- </li> -->
        <li/>
      </ul>
      <br/>
      <!-- <div id="grid-container">
        <div v-for="image_url in image_urls">
          <img v-bind:src="image_url"  />
        </div>
      </div> -->
    </div>
</template>
  
<script>
import axios from 'axios'
import { meta } from 'eslint-plugin-vue';
export default {
  name: 'GalleryView',
  data() {
    return {
      image_metadata: []
    }
  },
  methods: {
    get_all_image_urls() {
      const path = "http://localhost:5000/images"
      axios.get(path).then((res) => {
        console.log(res);
        this.image_metadata = res.data;
        // console.log(this.image_metadata)
      }).catch( (error) => {
        console.error(error)
      })
      // this.image_ = []
    }
  },
  created() {
    this.get_all_image_urls();
  }
}
</script>

<style>
  /* @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  } */

   /* #grid-container{
    display: flex;
    flex-flow: row wrap;

    align-content: flex-start;
    gap: 20px;
   } */
    

   ul {
    margin: 0 0 0 0;
    padding: 0;
     list-style-type: none;
    
      display: flex;
      flex-wrap: wrap;
    }

    li {
      /* height: 40vh; */
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
  
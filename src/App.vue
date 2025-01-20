<script setup>
import { RouterLink, RouterView } from "vue-router";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap";

import Navbar from "./components/Navbar.vue";
import Dropdown from "./components/Dropdown.vue";

// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>
  <RouterView />
</template>

<style scoped>
/* #navbar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 20px;
}

#nav-border {
  width: 100%;
  border: 1px solid black;
}

h1 {
  margin: 2% 5%;
  text-align: center;
} */
</style>

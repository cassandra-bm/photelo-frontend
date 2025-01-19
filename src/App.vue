<script setup>
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <h1>photelo</h1>
    <div id="navbar">
      <p>
        <a href="/gallery">gallery</a> | <a href="/submission">submit</a> |
        <a href="/voting">vote</a>
      </p>
    </div>
  </header>
  <div id="nav-border" />

  <RouterView />
</template>

<style scoped>
#navbar {
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
  /* margin: auto; */
  margin: 2% 5%;
  text-align: center;
}
</style>

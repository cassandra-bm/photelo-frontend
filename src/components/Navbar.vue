<template>
  <!-- <h1>photelo</h1>
    <div id="navbar">
      <p>
        <a href="/gallery">gallery</a> | <a href="/submission">submit</a> |
        <a href="/voting">vote</a>
      </p>
    </div>
    <div id="nav-border" /> -->
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Photelo</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <!-- <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li> -->

            <li class="nav-item">
              <a class="nav-link" href="/gallery">Gallery</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/submission">Upload</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/voting">Rate Photos</a>
            </li>

            <!-- <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li> -->

            <!-- <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </li> -->
          </ul>

          <!-- <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> -->
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
<!-- 
<style scoped>
.navbar {
  /* height: 200px; */
}
</style> -->

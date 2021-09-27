<template>
  <div>
    <div class="d-print-none" style="height: 80px"></div>
    <nav
      class="navbar navbar-expand navbar-dark bg-dark fixed-top d-print-none"
    >
      <div class="container-fluid">
        <div
          class="
            navbar-nav
            mx-auto
            justify-content-center
            align-items-center
            text-center
          "
        >
          <router-link class="nav-link" :to="{ name: 'Home' }"
            >Home</router-link
          >
          <router-link class="nav-link" :to="{ name: 'Schedule' }"
            >Schedule</router-link
          >
          <router-link class="nav-link" :to="{ name: 'Cards' }"
            >Costume Cards</router-link
          >
        </div>
      </div>
    </nav>
  </div>

  <!-- <ul class="nav nav-pills justify-content-center">
    <li class="nav-item">
      <router-link class="nav-link px-2 py-1 small" :to="{ name: 'Home' }"
        >Home</router-link
      >
    </li>
    <li class="nav-item">
      <router-link class="nav-link px-2 py-1 small" :to="{ name: 'Schedule' }"
        >Schedule</router-link
      >
    </li>
    <li class="nav-item">
      <router-link class="nav-link px-2 py-1 small" :to="{ name: 'Classes' }"
        >Classes</router-link
      >
    </li>
  </ul> -->
</template>

<script>
export default {
  name: "Nav",
};
</script>

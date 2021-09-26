<template>
  <ul class="nav nav-pills justify-content-center">
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'Home' }">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'Schedule' }"
        >Schedule</router-link
      >
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'Classes' }"
        >Classes</router-link
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: "Nav",
};
</script>

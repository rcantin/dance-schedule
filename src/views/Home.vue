<template>
  <div>
    <!-- <h1 class="text-center">Home Page...</h1> -->
    <div class="row mt-5 g-4">
      <div class="col-12 col-sm-6 col-lg-4 offset-lg-2">
        <router-link class="" :to="{ name: 'Schedule' }">
          <div class="card shadow text-center h-100">
            <div class="card-body">
              <div><i class="fas fa-calendar-alt fa-lg"></i></div>
              <div class="fs-4 fw-bold">Class Schedule</div>
              <div class="pt-3 fw-light">
                Weekly class schedule, class details and routine information.
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="col-12 col-sm-6 col-lg-4">
        <router-link class="" :to="{ name: 'Cards' }">
          <div class="card shadow text-center h-100">
            <div class="card-body">
              <div><i class="fas fa-tag fa-lg"></i></div>
              <div class="fs-4 fw-bold">Costume Cards</div>
              <div class="pt-3 fw-light">
                Printable costume bag cards with costume &amp; accessory
                information.
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

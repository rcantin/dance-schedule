<template>
  <div>
    <h1 class="text-center d-print-none mb-4">Costume Cards</h1>
    <div class="text-center d-print-none pb-4">
      <div class="alert alert-primary small p-2">
        <div class="fw-bold">
          <i class="fas fa-info-circle"></i> Layout on this page is not
          important
        </div>
        <div>
          Cards will resize to fit on a sheet of paper and unwanted elements
          will be hidden when printed.
        </div>
      </div>
      <button class="btn btn-primary" @click="printWindow()">Print Now</button>
    </div>
    <div>
      <div class="row g-0 border">
        <div
          class="col-6 border py-3 px-4"
          v-for="(item, index) in choreoclasses"
          :key="index"
        >
          <div
            class="
              d-flex
              justify-content-between
              align-items-end
              mb-1
              border-bottom border-dark
            "
          >
            <h6 class="mb-0 fw-bold">{{ item.routine[0].name }}</h6>
            <div class="fw-light text-uppercase ps-3" style="font-size: 0.7rem">
              {{ item.style }}
            </div>
          </div>
          <div class="small">
            <div>
              <span class="fw-light">Costume:</span>
              &nbsp;&nbsp;{{ item.routine[0].costume }}
            </div>
            <div>
              <span class="fw-light">Hair:</span>
              &nbsp;&nbsp;{{ item.routine[0].hair }}
            </div>
            <div>
              <span class="fw-light">Tights:</span>
              &nbsp;&nbsp;{{ item.routine[0].tights }}
            </div>
            <div>
              <span class="fw-light">Shoes:</span>
              &nbsp;&nbsp;{{ item.routine[0].shoes }}
            </div>
            <div>
              <span class="fw-light">Jewelry:</span>
              &nbsp;&nbsp;{{ item.routine[0].jewelry }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CostumeCards",
  props: ["classdata"],
  components: {},
  computed: {
    choreoclasses: function () {
      return this.classdata.filter(function (u) {
        return u.type == "choreo";
      });
    },
  },
  methods: {
    printWindow: function () {
      window.print();
    },
  },
};
</script>

<template>
  <div>
    <div
      class="modal fade"
      id="modalClassDetail"
      tabindex="-1"
      aria-hidden="true"
      v-if="classdetail"
    >
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ classdetail.name }}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <Details :classdata="classdetail" />
          </div>
        </div>
      </div>
    </div>

    <h2 class="text-center">Class Details</h2>
    <div class="row">
      <div v-for="(item, index) in classdata" :key="index" class="pb-3">
        <div class="fw-bold fs-5">
          <a
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#modalClassDetail"
            @click="setClassDetail(item)"
            >{{ item.name }}</a
          >
        </div>
        <div>
          <span class="text-capitalize">{{ item.day }}s</span> from
          {{ moment(item.start).format("h:mmA") }} to
          {{ moment(item.end).format("h:mmA") }}
        </div>
        <div class="border-start ps-3">
          <div>
            <div>
              <div>Instructor</div>
              <div>{{ item.instructor }}</div>
            </div>
            <div>
              <div>Location</div>
              <div>{{ item.location }}</div>
            </div>
            <div>
              <div>Clothing</div>
              <div>{{ item.clothing }}</div>
            </div>
            <div>
              <div>Shoes</div>
              <div>{{ item.shoes }}</div>
            </div>
            <div>
              <div>Hair</div>
              <div>{{ item.hair }}</div>
            </div>
          </div>
          <div v-if="item.routine">
            <div class="fw-bold">Routine/Choreography Details</div>
            <div>
              <div>Name</div>
              <div>{{ item.routine.name }}</div>
            </div>
            <div>
              <div>Hair</div>
              <div>{{ item.routine.hair }}</div>
            </div>
            <div>
              <div>Jewelry</div>
              <div>{{ item.routine.jewelry }}</div>
            </div>
            <div>
              <div>Shoes</div>
              <div>{{ item.routine.shoes }}</div>
            </div>
            <div>
              <div>Tights</div>
              <div>{{ item.routine.tights }}</div>
            </div>
            <div>
              <div>Costume</div>
              <div>{{ item.routine.costume }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="small">
        <pre>{{ classdata }}</pre>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";

export default {
  name: "Classes",
  props: ["classdata"],
  created: function () {
    this.moment = moment;
  },
  data() {
    return {
      classdetail: null,
      // classesgroupedbyday: this.orgClassesByDay(),
    };
  },
  mounted() {
    this.setClassDetail(this.classdata[0]);
  },
  methods: {
    // orgClassesByDay: function () {
    //   var classesgroupedbyday = this.classdata.filter(function (entry) {
    //     return entry.day === "thursday";
    //   });
    //   return classesgroupedbyday;
    // },
    setClassDetail: function (item) {
      this.classdetail = item;
      console.log(item);
    },
  },
  // beforeMount() {
  //   this.orgClassesByDay();
  // },
};
</script>

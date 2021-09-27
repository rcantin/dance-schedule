<template>
  <div>
    <h1 class="text-center">Amelia's Schedule</h1>

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

    <div v-if="classdata" style="max-width: 800px" class="mx-auto">
      <table
        class="table table-borderless"
        v-for="(day, indexday) in [
          'monday',
          'tuesday',
          'wednesday',
          'thursday',
          'friday',
          'saturday',
          'sunday',
        ]"
        :key="indexday"
      >
        <tbody v-if="getClassesByDay(day).length > 0">
          <tr>
            <th colspan="2" class="text-capitalize pt-2">
              {{ day }}
            </th>
          </tr>
          <tr
            v-for="(item, index) in getClassesByDay(day)"
            :key="index"
            class="border-top"
          >
            <td>
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#modalClassDetail"
                @click="setClassDetail(item)"
                >{{ item.name }}</a
              >
            </td>
            <td class="text-nowrap fw-light text-end">
              {{ moment(item.start).format("h:mmA") }} -
              {{ moment(item.end).format("h:mmA") }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import Details from "@/components/Details.vue";

export default {
  name: "Schedule",
  props: ["classdata"],
  components: {
    Details,
  },
  created: function () {
    this.moment = moment;
  },
  mounted() {
    this.setClassDetail(this.classdata[0]);
  },
  methods: {
    getClassesByDay: function (day) {
      var classes = this.classdata.filter(function (entry) {
        return entry.day === day;
      });
      return classes;
    },
    setClassDetail: function (item) {
      this.classdetail = item;
      console.log(item);
    },
  },
  data() {
    return {
      classdetail: null,
    };
  },
};
</script>
